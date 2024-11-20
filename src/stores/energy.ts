import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { IUserInfoEnergy } from '@/types/auth';

export const useUserEnergyStore = defineStore('userEnergy', () => {
  const energyLeft = ref<number>(0);
  const intervalId = ref<number | null>(null);

  const startInterval = (userEnergy: IUserInfoEnergy | null) => {
    if (userEnergy) {
      intervalId.value = setInterval(() => {
        if (energyLeft.value > 0) {
          energyLeft.value = Math.max(energyLeft.value - userEnergy.consumptionRate, 0);
        }
      }, 1000);
    }
  };

  const stopInterval = () => {
    if (intervalId.value) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };

  const setEnergy = (newEnergy: number) => {
    energyLeft.value = newEnergy;
  };

  return {
    energyLeft,
    startInterval,
    stopInterval,
    setEnergy,
  };
});
