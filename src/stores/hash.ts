import socket from '@/api/socket';

import { defineStore, storeToRefs } from 'pinia';
import { useSocketDataStore } from '@/stores/socket-data';
import { ref } from 'vue';

export const useHashStore = defineStore('hashStore', () => {
  const { miningData } = storeToRefs(useSocketDataStore());
  const isMiningStarted = ref(false);

  const totalShares = ref(0);
  const totalHashes = ref(0);

  let hashesProcessed = 0;
  let lastMeasurement = Date.now();
  let baselineHashRate = null;
  let needsCooldown = false;
  const MEASURE_INTERVAL = 2000;
  const COOLDOWN_TIME = 1000;
  const HASH_THRESHOLD = 0.7;

  const calculateHash = async (
    index: number,
    previousHash: string,
    data: string,
    nonce: number,
    timestamp: number,
    minerId: string,
  ) => {
    const input = `${index}-${previousHash}-${data}-${nonce}-${timestamp}-${minerId}`;
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  };

  const isValidBlock = (
    hash: string,
    mainFactor: bigint,
    shareFactor: bigint,
  ) => {
    const value = BigInt(`0x${hash}`);
    if (value < mainFactor) return 'valid';
    if (value < shareFactor) return 'share';
    return 'notValid';
  };

  const getRandomNonceRange = (maxNonce: number, rangeSize: number) => {
    const startNonce = Math.floor(Math.random() * (maxNonce - rangeSize));
    const endNonce = startNonce + rangeSize - 1;

    return { startNonce, endNonce };
  };

  const checkThermal = (isTurboMode: boolean) => {
    if (isTurboMode) return;

    hashesProcessed++;
    const now = Date.now();

    if (now - lastMeasurement >= MEASURE_INTERVAL) {
      const currentHashRate = (hashesProcessed * 1000) / (now - lastMeasurement);

      if (!baselineHashRate) {
        baselineHashRate = currentHashRate;
      } else {
        const performanceRatio = currentHashRate / baselineHashRate;
        needsCooldown = performanceRatio < HASH_THRESHOLD;
      }

      hashesProcessed = 0;
      lastMeasurement = now;
    }

    if (needsCooldown) {
      setTimeout(() => {
        needsCooldown = false;
      }, COOLDOWN_TIME);
    }
  };

  const startMining = async ({
     data = '',
     minerId = 'telegramUserId',
     isTurboMode = false,
  }) => {
    const maxNonce = 1_000_000_000;
    const rangeSize = 1_000_000;

    let { startNonce, endNonce } = getRandomNonceRange(maxNonce, rangeSize);

    let nonce = startNonce;

    const startTime = Date.now();
    let shares = 0;

    const mineBlock = async () => {
      while (nonce <= endNonce) {
        const timestamp = Date.now();

        if (!miningData.value || !isMiningStarted.value) return;

        checkThermal(isTurboMode);

        const hash = await calculateHash(
          miningData.value?.index,
          miningData.value?.previousHash,
          data,
          nonce,
          timestamp,
          minerId,
        );

        const result = isValidBlock(
          hash,
          miningData.value?.mainFactor,
          miningData.value?.shareFactor,
        );

        if (result === 'valid') {
          console.log(`Valid block found: ${hash}`);
          totalShares.value += 1;
          socket.emit('blockchain.submit_hash', {
            hash,
            nonce: nonce,
            blockIndex: miningData.value?.index,
            timestamp,
          });
          console.log('Valid block submitted, continuing mining...');
        } else if (result === 'share') {
          console.log(`Share found: ${hash}`);
          totalHashes.value += 1;
          socket.emit('blockchain.submit_hash', {
            hash,
            nonce: nonce,
            blockIndex: miningData.value?.index,
            timestamp,
          });
          shares++;
        }

        nonce++;

        if (needsCooldown) {
          await new Promise(resolve => setTimeout(resolve, COOLDOWN_TIME));
        }
      }

      console.log('Current nonce range exhausted, generating new range...');

      ({ startNonce, endNonce } = getRandomNonceRange(maxNonce, rangeSize));

      nonce = startNonce;

      await mineBlock();
    };

    await mineBlock();

    const endTime = Date.now();
    console.log(
      `Block not found. Spent time: ${(endTime - startTime) / 1000} s. Shares: ${shares}`,
    );
  };

  return {
    startMining,
    isMiningStarted,
    totalShares,
    totalHashes,
  };
});
