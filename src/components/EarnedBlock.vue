<script setup lang="ts">
import type { PropType } from 'vue';
import type { IHashLastBlock } from '@/types/socket-data.interface';
import { formatTimestamp } from '../utils/formatters';

defineProps({
  info: {
    type: Object as PropType<IHashLastBlock| null>,
    required: true,
  },
});
</script>

<template>
  <div class="EarnedBlock">
    <div class="EarnedBlock__header">
      <p>
        Block
        <span>#{{ info?.hash?.slice(-6) }}</span>
      </p>

      <div
        class="EarnedBlock__tag"
        :class="info?.myReward && 'EarnedBlock__tag--colored'"
      >
        {{ info?.myReward ? `+ ${ info?.myReward }` : 0 }} 𝚺
      </div>
    </div>

    <p class="EarnedBlock__earnedBy">
      ⤷ Created by <span>{{ info?.solverName }}</span> in {{ formatTimestamp(Number(info?.timestamp), { onlyTime: true }) }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.EarnedBlock {
  background-color: var(--color-grey-dark);
  padding: 12px 16px;
  border-radius: 16px;

  &__header {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      color: var(--color-grey-light);
    }
  }

  &__tag {
    padding: 2px 6px;
    background-color: var(--color-grey-secondary-light);
    border-radius: 20px;
    color: var(--color-primary-grey);
    font-weight: 700;

    &--colored {
      color: var(--color-primary-green);
      background-color: var(--color-secondary-green-dark);
    }
  }

  &__earnedBy {
    margin-top: 4px;
    color: var(--color-grey-light);

    span {
      color: var(--color-primary-white);
    }
  }
}
</style>
