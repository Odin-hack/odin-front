<script setup lang="ts">
import { computed } from 'vue';

import type { PropType } from 'vue';
import type { IBlockchainStats } from '@/types/auth';

import { formatNumberWithSpaces, formatTimestamp, getPercents } from '@/utils/formatters';

import Progress from '@/components/UI/Progress.vue';


const props = defineProps({
  blockchainStats: {
    type: Object as PropType<IBlockchainStats>,
    required: true,
  },
});

const minedPercents = computed(() =>
  getPercents(props.blockchainStats?.blocksMined, props.blockchainStats?.totalMined),
);

const blocksMined = computed(() => formatNumberWithSpaces(props.blockchainStats?.blocksMined));
const totalBlocks = computed(() => formatNumberWithSpaces(props.blockchainStats?.totalBlocks));
const totalSupply = computed(() => formatNumberWithSpaces(props.blockchainStats?.totalBlocks));

const data = computed(() =>[
  {
    label: 'Total emission',
    value: totalSupply.value,
  },
  {
    label: 'Blocks created',
    value: `${ blocksMined.value } / ${ totalBlocks.value}`,
  },
  {
    label: 'Total holders',
    value: props.blockchainStats?.totalHolders,
  },
  {
    label: 'Mining started',
    value: formatTimestamp(props.blockchainStats?.miningStarted),
  },
]);
</script>

<template>
  <div class="GeneralStatsCard">
    <h3 class="SectionTitle">
      TOTAL MINED
    </h3>

    <Progress
      :percents="minedPercents"
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
          {{ item.value || 0 }}
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
