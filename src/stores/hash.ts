import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHashStore = defineStore('hashStore', () => {
  const worker = ref(null);
  const isWorkerActive = ref(false);
  const isTurboMode = ref(false);
  const outputMessages = ref([]);
  const taskData = ref(null);
  const currentRange = ref({ startNonce: 0, endNonce: 0 });

  const initializeWorker = () => {
    if (worker.value) return;

    worker.value = new Worker(new URL('../workers/worker.js', import.meta.url));

    worker.value.onmessage = (event) => {
      const data = event.data;

      if (data === 'requestRange') return requestNonceRange();

      if (typeof data === 'string') return addMessage(data);

      try {
        const result = JSON.parse(data);
        handleResult(result);
      } catch (error) {
        console.error('Ошибка при парсинге данных воркера:', error);
      }
    };

    worker.value.onerror = (error) => {
      addMessage(`Ошибка воркера: ${error.message}`);
      console.error('Ошибка в Web Worker:', error);
    };
  };

  const startProcessing = (task) => {
    if (!worker.value) {
      initializeWorker();
    }

    taskData.value = task;
    worker.value.postMessage(JSON.stringify(task));
    isWorkerActive.value = true;
    addMessage('Задача отправлена воркеру.');
  };

  const toggleTurboMode = (turbo) => {
    if (!worker.value) return;

    worker.value.postMessage(JSON.stringify({ turboMode: turbo }));
    isTurboMode.value = turbo;
    addMessage(`Turbo Mode ${turbo ? 'включен' : 'выключен'}.`);
  };

  const requestNonceRange = () => {
    const rangeSize = 1000000;
    const newRange = {
      startNonce: currentRange.value.endNonce,
      endNonce: currentRange.value.endNonce + rangeSize,
    };

    currentRange.value = newRange;
    worker.value.postMessage(JSON.stringify(newRange));

    addMessage(`Назначен диапазон: ${newRange.startNonce} - ${newRange.endNonce}`);
  };

  const handleResult = (result) => {
    if (result.state === 'valid') {
      addMessage(`Найден валидный хэш: ${result.hash} с nonce: ${result.nonce}`);
      return stopWorker();
    }

    if (result.state === 'share') {
      return addMessage(`Найден share хэш: ${result.hash} с nonce: ${result.nonce}`);
    }
  };

  const stopWorker = () => {
    if (!worker.value) return;

    worker.value.terminate();
    worker.value = null;
    isWorkerActive.value = false;

    addMessage('Воркер остановлен.');
  };

  const addMessage = (msg) => outputMessages.value.push(msg);
  const clearMessages = () => outputMessages.value = [];

  return {
    worker,
    isWorkerActive,
    isTurboMode,
    outputMessages,
    taskData,
    currentRange,
    startProcessing,
    toggleTurboMode,
    stopWorker,
    clearMessages,
  };
});
