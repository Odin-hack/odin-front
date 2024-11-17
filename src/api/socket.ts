import { io } from 'socket.io-client';
import { useRuntimeConfig } from '@/composables/useRuntimeConfig';

//:TODO: expand socket event types

const socket = io(useRuntimeConfig().socketUrl, {
  transports: ['websocket'],
  path: '/mining',
  // query: {
  //   api_key: 'VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self',
  // },
});

export default socket;
