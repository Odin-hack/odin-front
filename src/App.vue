<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useScrollEl } from '@/stores/scrollEl';
import WebApp from '@twa-dev/sdk';
import Navigation from '@/components/Navigation.vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const { setScrollEl } = useScrollEl();

onMounted(async () => {
  WebApp.expand();

  await authStore.authUser();

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
