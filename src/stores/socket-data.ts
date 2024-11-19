import socket from '@/api/socket';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { IHashCash, IUserBlock, IUserStaff } from '@/types/socket-data.interface';

export const useSocketDataStore = defineStore('socketDataStore', () => {
  const userStaff = ref<IUserStaff['payload'] | null>(null);
  const userBlock = ref<IUserBlock['payload'] | null>(null);
  const hashCash = ref<IHashCash['payload'] | null>(null);
  const miningData  = ref<{
    index: number,
    previousHash: string
    mainFactor: bigint
    shareFactor: bigint
  } | null>(null);

  socket.on('user.userStuff', (data: IUserStaff) => {
    userStaff.value = data?.payload || null;
  });

  socket.on('user.userBlock', (data: IUserBlock) => {
    userBlock.value = data?.payload || null;
  });

  socket.on('hashcash', (data: IHashCash) => {
    hashCash.value = data?.payload || null;
  });

  socket.on('blockchain.get', (data) => {
    miningData.value = {
      index: data.payload.config.previousBlock.index + 1,
      previousHash: data.payload.config.previousBlock.hash,
      mainFactor: BigInt(data.payload.config.mainFactor),
      shareFactor: BigInt(data.payload.config.shareFactor),
    };
  });

  socket.on('blockchain.new_block', (data) => {
    miningData.value = {
      index: data.payload.config.previousBlock.index + 1,
      previousHash: data.payload.config.previousBlock.hash,
      mainFactor: BigInt(data.payload.config.mainFactor),
      shareFactor: BigInt(data.payload.config.shareFactor),
    };
  });

  return {
    userStaff,
    userBlock,
    hashCash,
    miningData,
  };
});
