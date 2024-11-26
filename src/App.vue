<script setup lang="ts">
import { onMounted, ref } from 'vue';
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

const isLoaderLocal = ref(false);
onMounted(async () => {
  isLoaderLocal.value = false;
  if ('wakeLock' in navigator) {
    try {
      await navigator.wakeLock.request('screen');
    } catch (e) {
      console.error(e);
    }
  }

  await useAuthStore().authUser();

  WebApp.expand();
  WebApp.disableVerticalSwipes();
  WebApp.enableClosingConfirmation();

  socket.auth = { token: useLocalStorage('token').value };

  socket.connect();

  setScrollEl(document.querySelector('#app') as HTMLElement || undefined);
  isLoaderLocal.value = true;
});
</script>

<template>
  <div class="RouterLayout">
    <Loader v-if="isLoader" />

    <RouterView v-if="isLoaderLocal" />

    <Navigation />
  </div>
</template>

<style scoped lang="scss">
.RouterLayout {
  padding: 16px;
  height: 100dvh;
}
</style>
