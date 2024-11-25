<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useLoaderStore } from '@/stores/loader';

import { useScrollEl } from '@/stores/scrollEl';

import { useAuthStore } from '@/stores/auth';

import WebApp from '@twa-dev/sdk';

import Navigation from '@/components/Navigation.vue';
import Loader from '@/components/Loader.vue';
import { useLocalStorage } from '@/composables/useLocaleStorage';
import socket from '@/api/socket';

const { isLoader } = storeToRefs(useLoaderStore());

const { setScrollEl } = useScrollEl();

onMounted(async () => {
  if ('wakeLock' in navigator) {
    try {
      await navigator.wakeLock.request('screen');
    } catch (e) {
      console.error(e);
    }
  }
  WebApp.expand();
  WebApp.disableVerticalSwipes();
  WebApp.enableClosingConfirmation();

  await useAuthStore().authUser();

  socket.auth = { token: useLocalStorage('token').value };

  socket.connect();

  setScrollEl(document.querySelector('#app') as HTMLElement || undefined);

  WebApp.onEvent('viewportChanged', (event) => {
    if (!event.isStateStable) {
      socket.emit('mining.stop');
      socket.disconnect();
    }
  });
});
</script>

<template>
  <div class="RouterLayout">
    <Loader v-if="isLoader" />

    <RouterView />

    <Navigation />
  </div>
</template>

<style scoped lang="scss">
.RouterLayout {
  padding: 16px;
  height: 100dvh;
}
</style>
