import { useScrollEl } from '@/stores/scrollEl';
import { storeToRefs } from 'pinia';
import { onUnmounted, ref } from 'vue';


export const useScrollLocker = () => {
  const lockers = ref(new Set<() => void>());
  const { scrollEl } = storeToRefs(useScrollEl());

  let locker: () => void;
  const lock = () => {
    const el = scrollEl.value;

    if (!el) return () => void 0;

    el.style.overflow = 'hidden';

    lockers.value.delete(locker);
    locker = () => {
      el.style.overflow = '';
    };

    lockers.value.add(locker);
  };

  const unlock = () => {
    lockers.value.delete(locker);

    if (lockers.value.size === 0 && locker) {
      locker();
    }
  };

  onUnmounted(unlock);

  return { lockScroll: lock, unlock };
};
