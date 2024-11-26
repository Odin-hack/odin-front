<script setup lang="ts">
import { computed } from 'vue';

import type { PropType } from 'vue';
import type { IUser, IUserInfoEnergy } from '@/types/auth';

import { formatNumberWithSpaces, getPercents } from '@/utils/formatters';

import IconBlizzard from '@/components/Icon/blizzard.vue';
import IconSigmaColored from '@/components/Icon/sigmaColored.vue';
import Progress from '@/components/UI/Progress.vue';
import { MiningStatus } from '@/enum';

const props = defineProps({
  energyLeft: {
    type: Number,
    required: true,
  },
  maxEnergy: {
    type: Number,
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
    type: String as PropType<MiningStatus>,
    default: MiningStatus.STOPPED,
  },
});

const energyPercents = computed(() =>
    getPercents(props.energyLeft, props.maxEnergy || 0),
);

const balance = computed(() => {
  const userBalance = props.user?.info?.balance ? BigInt(props.user?.info?.balance) : BigInt(0);
  const formattedBalance = userBalance / BigInt(1000000);
  return formatNumberWithSpaces(Number(formattedBalance) || 0);
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
            <p>{{ energyLeft?.toFixed(0) || 0 }} / {{ maxEnergy || 0 }}</p>

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

  &__wrapper {
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
