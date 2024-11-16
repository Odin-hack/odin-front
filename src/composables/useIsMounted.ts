import { onMounted, onUnmounted, ref } from 'vue';

export const useIsMounted = () => {
  const isMounted = ref(false);

  onMounted(() => {
    isMounted.value = true;
  });

  onUnmounted(() => {
    isMounted.value = false;
  });

  return isMounted;
};
