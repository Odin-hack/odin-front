import socket from '@/api/socket';

import { defineStore, storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import socket from '@/api/socket';
import { useSocketDataStore } from '@/stores/socket-data';
import { useThrottle } from '@/composables/useThrottle';
import { useTurboModeStore } from '@/stores/turbo-mode';
import { useAuthStore } from '@/stores/auth';

export const useHashStore = defineStore('hashStore', () => {
  const { miningData } = storeToRefs(useSocketDataStore());
  const { isTurboModeActive } = storeToRefs(useTurboModeStore());
  const isMiningStarted = ref(false);

  const totalShares = ref(0);
  const totalHashes = ref(0);

  const { miningData } = storeToRefs(useSocketDataStore());
  const { isTurboModeActive } = storeToRefs(useTurboModeStore());
  const { user } = storeToRefs(useAuthStore());


  const workers = ref<Worker[]>([]);

  const initializeWorkers = (numWorkers: number) => {
    workers.value.forEach((worker) => worker.terminate());
    workers.value = Array.from({ length: numWorkers }, () => {
      const worker = new Worker(new URL('@/workers/mining-code.js', import.meta.url));

      worker.onmessage = (event) => handleWorkerMessage(event.data);

      return worker;
    });
  };

  let submittedHashes = 0;
  const addHashesToTotal = useThrottle(() => (totalHashes.value = submittedHashes), 1000);

  const checkLimits = (isTurboMode = false) => {
    if (isTurboMode) return needsCooldown = false;

    switch (status) {
      case 'valid':
      case 'share':
        socket.emit('blockchain.submit_hash', {
          hash,
          nonce: Number(nonce),
          blockIndex: miningData.value?.index,
          timestamp: Number(timestamp),
        });
        if (status === 'valid') totalShares.value++;
        break;

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

  const startMining = ({ minerId }) => {
    if (!miningData.value) return;

    const numWorkers = isTurboModeActive.value ? navigator.hardwareConcurrency : 1;
    initializeWorkers(numWorkers);

    const block = {
      index: miningData.value.index,
      previousHash: miningData.value.previousHash,
      mainFactor: miningData.value.mainFactor,
      shareFactor: miningData.value.shareFactor,
      minerId,
      data: '',
    };

    console.log('Starting mining with block:', block);

        checkLimits(isTurboModeActive.value);

      worker.postMessage(
        JSON.stringify({
          block,
          startNonce,
          endNonce,
        }),
      );
    });
  };

  const stopMining = () => {
    workers.value.forEach((worker) => worker.terminate());
    workers.value = [];
  };

  watch(
    [miningData, isTurboModeActive],
    () => {
      if (isMiningStarted.value) {
        stopMining();
        startMining({ minerId: user.value?.info.id });
      }
    },
    { deep: true },
  );

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
