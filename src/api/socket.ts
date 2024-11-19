import { io } from 'socket.io-client';
import { useRuntimeConfig } from '@/composables/useRuntimeConfig';
import { useLocalStorage } from '@/composables/useLocaleStorage';

//:TODO: expand socket event types

const socket = io(useRuntimeConfig().socketUrl, {
  transports: ['websocket'],
  path: '/api/socket.io',
  auth: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4OTYxMjY0NjUsImlwIjoidGVzdCIsInVzZXJBZ2VudCI6ImN1cmwvOC43LjEiLCJpYXQiOjE3MzIwMDg3MzQsImV4cCI6MTczMjA5NTEzNH0.0Q4hBhyTg-Syo74hmt-1kmxvrJBlYr5SC77dNEKgKL8',
  },
});

export default socket;
