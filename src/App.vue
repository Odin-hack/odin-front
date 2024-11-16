<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import WebApp from '@twa-dev/sdk';
import Navigation from '@/components/Navigation.vue';

onMounted(() => {
  WebApp.expand();
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
