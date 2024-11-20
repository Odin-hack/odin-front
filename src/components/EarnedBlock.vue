<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { IHashLastBlock, IRewardData } from '@/types/socket-data.interface';
import { formatTimestamp } from '@/utils/formatters';

const props = defineProps({
  info: {
    type: Object as PropType<IHashLastBlock| null>,
    required: true,
  },
  rewardsData: {
    type: Array as PropType<IRewardData['payload'][]>,
    required: true,
  },
});

const myReward = computed(() => {
  return props.rewardsData?.find((reward) => reward.index === props.info?.index);
});
</script>

<template>
  <div class="EarnedBlock">
    <div class="EarnedBlock__header">
      <p>
        Block
        <span>#{{ info?.index }}</span>
      </p>

      <span>Your reward</span>

      <div
        class="EarnedBlock__tag"
        :class="myReward && 'EarnedBlock__tag--colored'"
      >
        {{ myReward ? `+ ${ myReward?.reward / 1000000 }` : 0 }} 𝚺
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
