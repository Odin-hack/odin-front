<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import WebApp from '@twa-dev/sdk';

const title = ref('Hello World');

onMounted(() => {
  WebApp.expand();
});
</script>

<template>
  <header
    @click="WebApp.sendData({ message: 'Hello World' })"
  >
    {{ title }}
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
</style>
