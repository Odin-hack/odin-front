<script setup lang="ts">
import IconBlizzard from '@/components/Icon/blizzard.vue';
import IconSigmaColored from '@/components/Icon/sigmaColored.vue';
import Progress from '@/components/UI/Progress.vue';
import { formatNumberWithSpaces } from '@/utils/numberFormatters';
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
            <p>{{ formatNumberWithSpaces(4250135) }}</p>
            <IconSigmaColored size="16" />
          </div>
        </div>

        <div class="BatteryInfo__content__energy">
          <p>
            Energy
          </p>

          <div class="BatteryInfo__content__energy__amount">
            <p>150 / 200</p>

            <IconBlizzard
              size="16"
              style="color: var(--color-primary-blue)"
            />
          </div>
        </div>

        <Progress
          percents="43"
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
