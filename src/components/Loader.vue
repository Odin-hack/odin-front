<script setup lang="ts">
import { useLocalStorage } from '@/composables/useLocaleStorage';

const loading = useLocalStorage('pageLoading');

</script>

<template>
  <div class="Loader">
    {{ loading }}
    <div class="spinner" />
  </div>
</template>

<style scoped lang="scss">
.Loader {
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: var(--color-primary-grey);
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 6px solid var(--color-grey-medium);
  border-top: 6px solid var(--color-primary-white);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
