import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useScrollEl = defineStore('scroll-el', () => {

  const scrollEl = ref<HTMLElement | undefined>(undefined);

  const setScrollEl = (value: HTMLElement) => scrollEl.value = value;

  return {
    scrollEl,
    setScrollEl,
  };
});
