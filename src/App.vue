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


const { isLoader } = storeToRefs(useLoaderStore());

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

    <Loader v-if="isLoader" />

    <Navigation />
  </div>
</template>

<style scoped lang="scss">
.RouterLayout {
  padding: 16px;
  height: 100dvh;
}
</style>
