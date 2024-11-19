import socket from '@/api/socket';

import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { IEnergy, IHashCash, IRewardData } from '@/types/socket-data.interface';
import { useLocalStorage } from '@/composables/useLocaleStorage';


export const useSocketDataStore = defineStore('socketDataStore', () => {
  const hashCash = ref<IHashCash['payload'] | null>(null);
  const miningData  = ref<{
    index: number,
    previousHash: string
    mainFactor: bigint
    shareFactor: bigint
  }[]>([]);
  const energy = ref<IEnergy['payload'] | null>(null);
  const rewardsData = ref<IRewardData['payload'][]>([]);

  socket.auth = {
    token: useLocalStorage('token').value,
  };

  socket.on('mining.not_enough_energy', (data) => {
    console.log(data);
  });

  socket.on('mining.energy_left', (data) => {
    energy.value = data.payload;
  });

  socket.on('mining.started', (data) => {
    energy.value = data.payload;
  });

  socket.on('mining.stopped', (data) => {
    console.log(data);
  });

  socket.on('disconnect', () => socket.disconnect());

  const setMiningData = (data: IHashCash['payload']) => {
    miningData.value = {
      index: data.config.previousBlock.index + 1,
      previousHash: data.config.previousBlock.hash,
      mainFactor: BigInt(data.config.mainFactor),
      shareFactor: BigInt(data.config.shareFactor),
    };
  };

  socket.on('blockchain.reward', (data: IRewardData) => {
    rewardsData.value.push(data.payload);
  });

  socket.on('blockchain.get', (data: IHashCash) => {
    hashCash.value = data.payload;

    setMiningData(data?.payload);
  });

  socket.on('blockchain.new_block', (data) => {
    hashCash.value?.lastBlock?.unshift(data.payload?.lastBlock);

    setMiningData(data?.payload);
  });

  return {
    hashCash,
    miningData,
    energy,
    rewardsData,
  };
});
