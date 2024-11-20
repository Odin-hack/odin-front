<script setup lang="ts">
import Drawer from '@/components/Drawer.vue';
import MiningBlockHash from '@/components/mining/BlockHash.vue';
import IconForward from '@/components/Icon/Forward.vue';
import Button from '@/components/UI/Button.vue';
import { ButtonThemeEnum } from '@/types/enums/button.enum';
import { computed, type PropType } from 'vue';
import type { IHashLastBlock } from '@/types/socket-data.interface';
import { formatTimestamp } from '@/utils/formatters';

const visible = defineModel('visible', {
  type: Boolean,
  default: false,
});

const props = defineProps({
  data: {
    type: Object as PropType<IHashLastBlock>,
    required: true,
  },
});

const blockData = computed(() =>{
  return {
    index: props.data?.index,
    hash: props.data?.hash,
    info: [
      {
        label: 'Miner',
        value: props.data?.solverName,
      },
      {
        label: 'Block reward',
        value: props.data?.blockReward / 1000000,
      },
      {
        label: 'Date',
        value: formatTimestamp(Number(props.data?.timestamp)),
      },
    ],
  };
});
</script>

<template>
  <Drawer v-model:visible="visible">
    <template #title>
      <p class="BlockDrawer__drawer-title">
        Block <span>#{{ blockData?.index }}</span>
      </p>
    </template>

    <template #content>
      <div class="BlockDrawer__content">
        <MiningBlockHash :hash="blockData?.hash" />

        <div class="BlockDrawer__data">
          <div
            v-for="item in blockData?.info"
            :key="item.label"
            class="BlockDrawer__data-row"
          >
            <p class="BlockDrawer__data-row-text">
              {{ item.label }}
            </p>

            <p class="BlockDrawer__data-row-text BlockDrawer__data-row-text--value">
              {{ item.value }}
            </p>
          </div>
        </div>
      </div>
    </template>
  </Drawer>
</template>

<style scoped lang="scss">
.BlockDrawer {
  &__drawer-title {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.4px;
    font-weight: 500;
    color: var(--color-primary-white);

    span {
      color: var(--color-grey-light);
    }
  }

  &__content {
    padding: 0 20px;
  }

  &__data {
    margin-top: 12px;
    padding: 0 16px;

    &-row {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
      border-bottom: 1px solid var(--color-divider);

      &:last-child {
        border-bottom: none;
      }

      &-text {
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.4px;
        color: var(--color-primary-white);

        &--value {
          color: var(--color-grey-light);
        }
      }
    }
  }
}
</style>
