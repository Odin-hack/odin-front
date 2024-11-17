import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoaderStore = defineStore('loaderStore', () => {
  const isLoader = ref(false);

  const setLoading = (value: boolean) => isLoader.value = value;

  return {
    isLoader,
    setLoading,
  };
});
