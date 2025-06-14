import { io } from 'socket.io-client';
import { useRuntimeConfig } from '@/composables/useRuntimeConfig';

const socket = io(useRuntimeConfig().socketUrl, {
  transports: ['websocket'],
  path: '/v1/api/socket.io',
  reconnection: true,
  autoConnect: false,
});

export default socket;
