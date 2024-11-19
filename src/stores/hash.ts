import socket from '@/api/socket';
import { defineStore, storeToRefs } from 'pinia';
import { useSocketDataStore } from '@/stores/socket-data';

export const useHashStore = defineStore('hashStore', () => {

  const { miningData } = storeToRefs(useSocketDataStore());

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


  const startMining = async ({
   data = '',
   minerId = 'telegramUserId',
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

        if (!miningData.value) return;

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
          socket.emit('blockchain.submit_hash', {
            hash,
            nonce: nonce,
            blockIndex: miningData.value?.index,
            timestamp,
          });

          console.log('Valid block submitted, continuing mining...');
        } else if (result === 'share') {
          socket.emit('blockchain.submit_hash', {
            hash,
            nonce: nonce,
            blockIndex: miningData.value?.index,
            timestamp,
          });
          shares++;
        }

        nonce++;
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
  };
});
