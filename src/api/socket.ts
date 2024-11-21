import { io } from 'socket.io-client';
import { useRuntimeConfig } from '@/composables/useRuntimeConfig';

// ToDo FIX
const socket = io(useRuntimeConfig().socketUrl, {
  transports: ['websocket'],
  path: '/v1/api/socket.io',
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,

});

export default socket;
