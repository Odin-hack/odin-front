import { defineStore, storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import socket from '@/api/socket';
import { useSocketDataStore } from '@/stores/socket-data';
import { useThrottle } from '@/composables/useThrottle';
import { useTurboModeStore } from '@/stores/turbo-mode';
import { useAuthStore } from '@/stores/auth';
import { useUserEnergyStore } from '@/stores/energy';
import { MiningStatus } from '@/enum';

export const useHashStore = defineStore('hashStore', () => {
    const totalShares = ref<number>(0);
    const totalHashes = ref<number>(0);

    const { miningStatus } = storeToRefs(useUserEnergyStore());
    const { isTurboModeActive } = storeToRefs(useTurboModeStore());

    watch(
        isTurboModeActive,
        () => {
            if (miningStatus.value === MiningStatus.MINING) {
                restartMining();
            }
        },
        { immediate: true }, // Выполнять при инициализации
    );

    const { miningData } = storeToRefs(useSocketDataStore());
    const { user } = storeToRefs(useAuthStore());

    const workers = ref<Worker[]>([]);

    const restartMining = () => {
        stopMining();
        startMining({ minerId: user.value?.info.id });
    };

    const initializeWorkers = (numWorkers: number) => {
        workers.value.forEach((worker) => worker.terminate());
        workers.value = Array.from({ length: numWorkers }, () => {
            const worker = new Worker(new URL('@/workers/mining-code.js', import.meta.url), { type: 'module' });

            worker.onmessage = (event) => handleWorkerMessage(event.data);

            return worker;
        });
    };

    let submittedHashes = 0;
    const addHashesToTotal = useThrottle(() => (totalHashes.value = submittedHashes), 1000);

    const handleWorkerMessage = (message: string) => {
        const [status, hash, nonce, timestamp, hashes] = message.split(' ');

        switch (status) {
            case 'valid':
            case 'share':
                socket.emit('blockchain.submit_hash', {
                    hash,
                    nonce: Number(nonce),
                    blockIndex: miningData.value?.index,
                    timestamp: Number(timestamp),
                });
                if (status === 'share') totalShares.value++;
                break;
            case 'restart':
                restartMining();
                break;

            case '_':
                submittedHashes += Number(hashes) || 0;
                addHashesToTotal();
                break;

            default:
                console.warn('Unknown message from worker:', message);
        }
    };

    const maxNonce = 1_000_000_000;
    const rangeSize = 1_000_000;

    const getUniqueNonceRanges = (
      maxNonce: number,
      rangeSize: number,
      workerCount: number,
    ) => {
        const ranges = [];
        const startNonce = Math.floor(Math.random() * (maxNonce - workerCount * rangeSize));
        for (let i = 0; i < workerCount; i++) {
            const rangeStart = startNonce + i * rangeSize;
            const rangeEnd = rangeStart + rangeSize - 1;
            ranges.push({ startNonce: rangeStart, endNonce: rangeEnd });
        }
        return ranges;
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

        const nonceRanges = getUniqueNonceRanges(maxNonce, rangeSize, numWorkers);

        workers.value.forEach((worker, index) => {
            const { startNonce, endNonce } = nonceRanges[index];

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

    return {
        startMining,
        stopMining,
        totalShares,
        totalHashes,
    };
});
