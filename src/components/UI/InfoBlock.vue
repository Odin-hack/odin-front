<script setup lang="ts">
import { InfoBlockTypeEnum } from '@/types/enums/info-block.enum';
import { computed } from 'vue';
import type { PropType } from 'vue';
import { StatusEnum } from '@/types/enums/status.enum';
import Status from '@/components/UI/Status.vue';
import { ColorsEnum } from '@/types/enums/colors.enum';

import IconGamepad from '@/components/Icon/gamepad.vue';
import IconUpgrades from '@/components/Icon/upgrades.vue';
import IconBlocks from '@/components/Icon/blocks.vue';
import IconSigma from '@/components/Icon/sigma.vue';
import IconLock from '@/components/Icon/lock.vue';
import IconPiece from '@/components/Icon/piece.vue';
import IconHash from '@/components/Icon/hash.vue';

const props = defineProps({
  type: {
    type: String as PropType<InfoBlockTypeEnum>,
    default: InfoBlockTypeEnum.STATUS,
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    default: 0,
  },
});

const content = computed(() => {
  return {
    [InfoBlockTypeEnum.STATUS]: {
      label: 'Status',
      icon: IconGamepad,
    },
    [InfoBlockTypeEnum.BLOCK]: {
      label: 'Block',
      icon: IconBlocks,
    },
    [InfoBlockTypeEnum.DIFFICULTY]: {
      label: 'Difficulty',
      icon: IconLock,
    },
    [InfoBlockTypeEnum.REWARD]: {
      label: 'Reward',
      icon: IconSigma,
    },
    [InfoBlockTypeEnum.SHARES]: {
      label: 'Shares',
      icon: IconPiece,
    },
    [InfoBlockTypeEnum.HASHES]: {
      label: 'Hashes',
      icon: IconHash,
    },
    [InfoBlockTypeEnum.EARNINGS]: {
      label: 'Earnings',
      icon: IconUpgrades,
    },
    [InfoBlockTypeEnum.ONLINE]: {
      label: 'Online',
      icon: IconGamepad,
    },
  }[props.type];
});

const borderColor = computed(() => {
  return {
    [StatusEnum.BATTERY_LOW]: ColorsEnum.SECONDARY_RED,
    [StatusEnum.AWAITING]: ColorsEnum.SECONDARY_YELLOW,
    [StatusEnum.MINING]: ColorsEnum.SECONDARY_GREEN,
  }[props.value] || ColorsEnum.PRIMARY_GREY;
});
</script>

<template>
  <div class="InfoBlock">
    <div class="InfoBlock__icon">
      <slot
        v-if="$slots.icon"
        name="icon"
      />

      <component
        :is="content.icon"
        v-else
        size="28"
      />
    </div>

    <div class="InfoBlock__content">
      <p class="InfoBlock__content__title">
        {{ content.label }}
      </p>

      <Status
        v-if="type === InfoBlockTypeEnum.STATUS"
        :value
      />

      <p v-else>
        {{ value }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.InfoBlock {
  display: flex;
  gap: 16px;
  justify-content: left;
  align-items: center;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid v-bind(borderColor);
  width: 175px;

  &__icon {
    color: var(--color-grey-secondary);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 2px;

    &__title {
      color: var(--color-grey-light);
    }
  }
}
</style>
