import { computed, ref } from 'vue';

export const useLocalStorage = <T>(name: string, options?: {
  defaultName?: string | undefined
  parse?: boolean
}) => {
  const storageValue =
    ref<string | undefined>(localStorage.getItem(name) || options?.defaultName);

  return computed({
    get: () => {
      if (!options?.parse) return storageValue.value;

      return storageValue.value
        ? JSON.parse(storageValue.value)
        : storageValue.value;
    },
    set: (value: T) => {
      const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;

      serializedValue
        ? localStorage.setItem(name, serializedValue as string)
        : localStorage.removeItem(name);

      storageValue.value = serializedValue as string;
    },
  });
};
