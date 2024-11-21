import socket from '@/api/socket';

import { defineStore, storeToRefs } from 'pinia';
import { useSocketDataStore } from '@/stores/socket-data';
import { ref } from 'vue';
import { useThrottle } from '@/composables/useThrottle';
import { useTurboModeStore } from '@/stores/turbo-mode';

export const useHashStore = defineStore('hashStore', () => {
  const { miningData } = storeToRefs(useSocketDataStore());
  const { isTurboModeActive } = storeToRefs(useTurboModeStore());
  const isMiningStarted = ref(false);

  const totalShares = ref(0);
  const totalHashes = ref(0);

  let hashesProcessed = 0;

  const baselineHashRate = ref<number | null>(null);
  const currentHashRate = ref<number | null>(null);
  const performanceRatio = ref<number | null>(null);

  let needsCooldown = false;

  const MAX_LIMIT = 20000;
  const COOLDOWN_TIME = 1000;

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

  const checkLimits = (isTurboMode = false) => {
    if (isTurboMode) return needsCooldown = false;

    hashesProcessed++;

    if (hashesProcessed >= MAX_LIMIT) {
      needsCooldown = true;
    }

    if (needsCooldown) {
      setTimeout(() => {
        needsCooldown = false;
        hashesProcessed = 0;
      }, COOLDOWN_TIME);
    }
  };

  const startMining = async ({
     data = '',
     minerId = 'telegramUserId',
  }) => {
    const maxNonce = 1_000_000_000;
    const rangeSize = 1_000_000;

    let { startNonce, endNonce } = getRandomNonceRange(maxNonce, rangeSize);

    let nonce = startNonce;
    let hashes = 0;

    const addHashes = useThrottle(() => totalHashes.value = hashes, 1000);

    const mineBlock = async () => {
      while (nonce <= endNonce) {
        const timestamp = Date.now();

        if (!miningData.value || !isMiningStarted.value) return;

        checkLimits(isTurboModeActive.value);

        hashes += 1;
        addHashes();

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
          socket.emit('blockchain.submit_hash', {
            hash,
            nonce: nonce,
            blockIndex: miningData.value?.index,
            timestamp,
          });
        } else if (result === 'share') {
          totalShares.value++;
          socket.emit('blockchain.submit_hash', {
            hash,
            nonce: nonce,
            blockIndex: miningData.value?.index,
            timestamp,
          });

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
  };

  return {
    startMining,
    isMiningStarted,
    totalShares,
    totalHashes,
    baselineHashRate,
    currentHashRate,
    performanceRatio,
  };
});
