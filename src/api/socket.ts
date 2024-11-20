import { io } from 'socket.io-client';
import { useRuntimeConfig } from '@/composables/useRuntimeConfig';

// ToDo FIX
const socket = io(useRuntimeConfig().socketUrl, {
  transports: ['websocket'],
  path: '/api/socket.io',
});

export default socket;
