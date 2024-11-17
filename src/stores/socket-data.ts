import socket from '@/api/socket';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { IHashCash, IUserBlock, IUserStaff } from '@/types/socket-data.interface';

export const useSocketDataStore = defineStore('socketDataStore', () => {
  const userStaff = ref<IUserStaff | null>(null);
  const userBlock = ref<IUserBlock | null>(null);
  const hashCash = ref<IHashCash | null>(null);


  socket.io.on('user.userStuff', (data: IUserStaff) => {
    userStaff.value = data;
  });

  socket.io.on('user.userBlock', (data: IUserBlock) => {
    userBlock.value = data;
  });

  socket.io.on('hashcash', (data: IHashCash) => {
    hashCash.value = data;
  });

  return {
    userStaff,
    userBlock,
    hashCash,
  };
});
