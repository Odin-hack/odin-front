import socket from '@/api/socket';

import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { IEnergy, IHashCash, IRewardData, IStatistics, IUpdateUser } from '@/types/socket-data.interface';
import { useLocalStorage } from '@/composables/useLocaleStorage';
import { useAuthStore } from '@/stores/auth';


export const useSocketDataStore = defineStore('socketDataStore', () => {
  const isSocketReconnect = ref(false);

  const hashCash = ref<IHashCash['payload'] | null>(null);
  const miningData  = ref<{
    index: number,
    previousHash: string
    mainFactor: bigint
    shareFactor: bigint
  }[]>([]);
  const energy = ref<IEnergy['payload'] | null>(null);
  const rewardsData = ref<IRewardData['payload'][]>([]);
  const statistics = ref<IStatistics['payload'] | null>(null);
  const onlineMiners = ref(0);
  const totalRewards = ref(0);

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

  socket.on('online_users_count', (data) => {
    onlineMiners.value = data;
  });

  socket.on('statistics.update', (data: IStatistics) => {
    statistics.value = data.payload;
  });

  socket.on('user.update', (data: IUpdateUser) => {
    useAuthStore().updateUserInfo(data.payload);
  });

  socket.on('disconnect', () => {
    isSocketReconnect.value = true;
  });

  socket.on('connect', () => {
    isSocketReconnect.value = false;
  });

  const setMiningData = (data: IHashCash['payload']) => {
    miningData.value = {
      index: data.config.previousBlock.index + 1,
      previousHash: data.config.previousBlock.hash,
      mainFactor: data.config.mainFactor,
      shareFactor: data.config.shareFactor,
    };
  };

  socket.on('blockchain.reward', (data: IRewardData) => {
    rewardsData.value.push(data.payload);
    totalRewards.value += data?.payload?.reward;

    useAuthStore().addBalance(data?.payload?.reward);
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
    statistics,
    totalRewards,
    onlineMiners,
    isSocketReconnect,
  };
});
