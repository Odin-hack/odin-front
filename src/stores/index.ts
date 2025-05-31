import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useIndexStore = defineStore('indexStore', () => {
  const helloWorld = ref('Hello world!');

  return {
    helloWorld,
  };
});
