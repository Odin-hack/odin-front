import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

export const useTurboModeStore = defineStore('turboModeStore', () => {
  const isTurboModeActive = ref<boolean>(!!useAuthStore().user?.info.powerMode);

  return {
    isTurboModeActive,
  };
});
