import { defineStore, storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import socket from '@/api/socket';
import { useSocketDataStore } from '@/stores/socket-data';
import { useThrottle } from '@/composables/useThrottle';
import { useTurboModeStore } from '@/stores/turbo-mode';
import { useAuthStore } from '@/stores/auth';

export const useHashStore = defineStore('hashStore', () => {
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

  const handleWorkerMessage = (message: string) => {
    const [status, hash, nonce, timestamp] = message.split(' ');

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

      case '_':
        submittedHashes++;
        addHashesToTotal();
        break;

      default:
        console.warn('Unknown message from worker:', message);
    }
  };

  const maxNonce = 1_000_000_000;
  const rangeSize = 1_000_000;

  const getRandomNonceRange = (maxNonce: number, rangeSize: number, offset: number) => {
    const startNonce = Math.floor(Math.random() * (maxNonce - rangeSize)) + offset * rangeSize;
    const endNonce = startNonce + rangeSize - 1;

    return { startNonce, endNonce };
  };

  const startMining = ({ minerId }) => {
    if (!miningData.value) return;

    const numWorkers = isTurboModeActive.value ? navigator.hardwareConcurrency / 2 : 1;
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

    workers.value.forEach((worker, index) => {
      const { startNonce, endNonce } = getRandomNonceRange(maxNonce, rangeSize, index);

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
    stopMining,
    isMiningStarted,
    totalShares,
    totalHashes,
  };
});
