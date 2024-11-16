<script setup lang="ts">
import Progress from '@/components/UI/Progress.vue';

const data = [
  {
    label: 'Total emission',
    value: '69 420 420 420',
  },
  {
    label: 'Blocks created',
    value: '1 123 542 / 69 696 969',
  },
  {
    label: 'Total holders',
    value: '21 435',
  },
  {
    label: 'Mining started',
    value: '17 Nov 2024',
  },
];
</script>

<template>
  <div class="GeneralStatsCard">
    <h3 class="SectionTitle">
      TOTAL MINED
    </h3>

    <Progress
      :percents="13"
      show-percents
    />

    <div class="GeneralStatsCard__stats">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="GeneralStatsCard__stats__stat"
      >
        <p>
          {{ item.label }}
        </p>

        <span>
          {{ item.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.GeneralStatsCard {
  padding: 16px;
  background-color: var(--color-primary-grey);
  border-radius: 16px;

  .SectionTitle {
    margin: 0 0 8px;
  }

  &__stats {
    padding-top: 12px;

    &__stat {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;

      &:not(:last-child) {
        border-bottom: 0.5px solid var(--color-divider);
      }

      span {
        color: var(--color-grey-medium);
      }
    }
  }
}
</style>
