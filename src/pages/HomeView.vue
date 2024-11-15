<script setup lang="ts">
import socket from '@/api/socket';

socket.on('connect', () => {
  console.log('Connected to socket');
});
</script>

<template>
  <main>
    Main page
  </main>
</template>
