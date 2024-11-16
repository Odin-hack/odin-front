<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

import { useScrollEl } from '@/stores/scrollEl';

import { useAuthStore } from '@/stores/auth';

import WebApp from '@twa-dev/sdk';

import Navigation from '@/components/Navigation.vue';


const { setScrollEl } = useScrollEl();

onMounted(async () => {
  WebApp.expand();

  await useAuthStore().authUser();

  setScrollEl(document.querySelector('#app') as HTMLElement || undefined);
});
</script>

<template>
  <div class="RouterLayout">
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
