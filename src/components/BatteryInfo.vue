<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';

import type { PropType } from 'vue';
import type { IUser, IUserInfoEnergy } from '@/types/auth';
import type { IEnergy } from '@/types/socket-data.interface';

import { formatNumberWithSpaces, getPercents } from '@/utils/formatters';

import IconBlizzard from '@/components/Icon/blizzard.vue';
import IconSigmaColored from '@/components/Icon/sigmaColored.vue';
import Progress from '@/components/UI/Progress.vue';

import { useLocalStorage } from '@/composables/useLocaleStorage';

const props = defineProps({
  energy: {
    type: Object as PropType<IEnergy['payload']>,
    required: true,
  },
  user: {
    type: Object as PropType<{
      info: IUser,
      energy: IUserInfoEnergy
    } | null>,
    required: true,
  },
  isMiningStarted: {
    type: Boolean,
    default: false,
  },
});

const storedEnergyLeft = useLocalStorage(
  'energyLeft',
  {
    defaultValue: 0,
    parse: true,
  },
);

const energyLeft = ref(storedEnergyLeft.value);

const intervalId = ref<number | null>(null);

const startInterval = () => {
  intervalId.value = setInterval(() => {
    if (energyLeft.value && energyLeft.value > 0 && props.user) {
      energyLeft.value = Math.max(energyLeft.value -= props.energy?.energyConsumed || props.user?.energy?.consumptionRate, 0);
      storedEnergyLeft.value = energyLeft.value;
    }
  }, 1000);
};

const stopInterval = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
};

watch(() => props.isMiningStarted, (newVal) => {
  newVal ? startInterval() : stopInterval();
}, { immediate: true });

watch(() => props.energy, (newVal) => {
  if (newVal?.energy) {
    energyLeft.value = newVal.energy;
    storedEnergyLeft.value = newVal.energy;
  }
});

const energyPercents = computed(() =>
    getPercents(energyLeft.value, props.user?.info?.maxEnergy || 0),
);

const balance = computed(()=> formatNumberWithSpaces(props.user?.info?.balance / 1000000 || 0));

onBeforeUnmount(() => {
  stopInterval();
});
</script>

<template>
  <div class="BatteryInfo">
    <div class="BatteryInfo__wrapper">
      <div class="BatteryInfo__icon">
        <IconBlizzard
          width="18"
          height="23"
        />
      </div>

      <div class="BatteryInfo__content">
        <div class="BatteryInfo__content__balance">
          <p>
            Balance
          </p>

          <div class="BatteryInfo__content__balance__amount">
            <p>{{ balance }}</p>
            <IconSigmaColored size="16" />
          </div>
        </div>

        <div class="BatteryInfo__content__energy">
          <p>
            Energy
          </p>

          <div class="BatteryInfo__content__energy__amount">
            <p>{{ energyLeft?.toFixed(0) || 0 }} / {{ user?.info?.maxEnergy || 0 }}</p>

            <IconBlizzard
              size="16"
              style="color: var(--color-primary-blue)"
            />
          </div>
        </div>

        <Progress
          :percents="energyPercents"
        />
      </div>
    </div>

    <div class="BatteryInfo__spacer" />
  </div>
</template>

<style scoped lang="scss">
.BatteryInfo {
  display: flex;
  gap: 6px;
  align-items: center;

  &__wrapper  {
    padding: 16px 20px;
    display: flex;
    gap: 16px;
    align-items: center;
    background-color: var(--color-primary-grey);
    border-radius: 16px;
    width: 100%;
  }

  &__icon {
    color: var(--color-grey-secondary);
    border: 2px solid var(--color-grey-secondary-light);
    padding: 14px 17px;
    border-radius: 8px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;

    &__balance,
    &__energy {
      display: flex;
      justify-content: space-between;
      width: 100%;

      &__amount {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }

    &__energy {
      color: var(--color-grey-light);
    }
  }

  &__spacer {
    width: 8px;
    height: 36px;
    border-radius: 4px;
    background-color: var(--color-primary-grey);
  }
}
</style>
