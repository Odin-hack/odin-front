import socket from '@/api/socket';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { IHashCash, IUserBlock, IUserStaff } from '@/types/socket-data.interface';

export const useSocketDataStore = defineStore('socketDataStore', () => {
  const userStaff = ref<IUserStaff['payload'] | null>(null);
  const userBlock = ref<IUserBlock['payload'] | null>(null);
  const hashCash = ref<IHashCash['payload'] | null>(null);

  socket.io.on('user.userStuff', (data: IUserStaff) => {
    userStaff.value = data?.payload || null;
  });

  socket.io.on('user.userBlock', (data: IUserBlock) => {
    userBlock.value = data?.payload || null;
  });

  socket.io.on('hashcash', (data: IHashCash) => {
    hashCash.value = data?.payload || null;
  });

  return {
    userStaff,
    userBlock,
    hashCash,
  };
});
