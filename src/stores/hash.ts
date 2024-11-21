import { defineStore, storeToRefs } from 'pinia';
import { ref } from 'vue';
import socket from '@/api/socket';
import { useSocketDataStore } from '@/stores/socket-data';
import { useThrottle } from '@/composables/useThrottle';
import { useTurboModeStore } from '@/stores/turbo-mode';


export const useHashStore = defineStore('hashStore', () => {
  const isMiningStarted = ref(false);

  const totalShares = ref(0);
  const totalHashes = ref(0);

  const { miningData } = storeToRefs(useSocketDataStore());
  const { isTurboModeActive } = storeToRefs(useTurboModeStore());

  const workers = ref<Worker[]>([]);

  const initializeWorkers = (numWorkers: number) => {
    workers.value.forEach((worker) => worker.terminate());
    workers.value = [];

    for (let i = 0; i < numWorkers; i++) {
      const worker = new Worker(new URL('@/workers/mining-code.js', import.meta.url));

      worker.onmessage = (event) => {
        handleWorkerMessage(event.data);
      };

      workers.value.push(worker);
    }
  };

  let submittedHashes = 0;

  const addHashesToTotal = useThrottle(() => (totalHashes.value = submittedHashes), 1000);

  const handleWorkerMessage = (message: string) => {
    const [status, hash, nonce, timestamp] = message.split(' ');

    switch (status) {
      case 'valid':
        console.log('inside valid');
        socket.emit('blockchain.submit_hash', {
          hash,
          nonce: Number(nonce),
          timestamp: Number(timestamp),
        });
        console.log(`Valid hash submitted: ${hash}`);
        totalShares.value++;
        break;

      case 'share':
        console.log('inside share');
        socket.emit('blockchain.submit_hash', {
          hash,
          nonce: Number(nonce),
          timestamp: Number(timestamp),
        });
        console.log(`Share submitted: ${hash}`);
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
    const numWorkers = isTurboModeActive.value ? navigator.hardwareConcurrency : 1;
    console.log('workers', numWorkers);
    initializeWorkers(numWorkers);

    const block = {
      index: miningData.value?.index,
      previousHash: miningData.value?.previousHash,
      mainFactor: miningData.value?.mainFactor,
      shareFactor: miningData.value?.shareFactor,
      minerId,
      data: '',
    };

    console.log('Mining block:', block);

    workers.value.forEach((worker, index) => {
      const { startNonce, endNonce } = getRandomNonceRange(maxNonce, rangeSize, index);

      worker.postMessage(
        JSON.stringify({
          block,
          newBlock: false,
          startNonce,
          endNonce,
        }),
      );
    });
  };

  const stopMining = () => {
    workers.value.forEach((worker) => {
      worker.postMessage(
        JSON.stringify({
          newBlock: true,
        }),
      );

      console.log(worker);
      worker.terminate();
    });

    workers.value = [];
  };

  return {
    startMining,
    stopMining,
    isMiningStarted,
    totalShares,
    totalHashes,
  };
});
