<script setup lang="ts">
import { computed, type PropType } from 'vue';
import Blizzard from '@/components/Icon/blizzard.vue';
import type { IReferralStats } from '@/types/friends';

const props = defineProps({
  referralStats: {
    type: Object as PropType<IReferralStats>,
    required: true,
  },
});


const data = computed(() =>[
  {
    label: 'Total friends invited / started',
    value: `${ props.referralStats?.rewardedInvited || 0 } / ${ props.referralStats?.totalInvited || 0 }`,
  },
  {
    label: 'Energy per friend',
    value: props.referralStats?.referralEnergy || 0,
    iconEnergy: true,
  },
  {
    label: 'Total capacity increased by',
    value: props.referralStats?.totalCapacityIncreased || 0,
    iconEnergy: true,
  },
]);
</script>

<template>
  <div class="GeneralStatsCard">
    <h3 class="SectionTitle">
      CAPACITY STAT
    </h3>

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
          <Blizzard
            v-if="item?.iconEnergy"
            size="10"
            style="color: var(--color-primary-blue)"
          />
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
    padding: 0 0 8px;
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
