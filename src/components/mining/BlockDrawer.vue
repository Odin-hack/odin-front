<script setup lang="ts">
import Drawer from '@/components/Drawer.vue';
import MiningBlockHash from '@/components/mining/BlockHash.vue';
import IconForward from '@/components/Icon/Forward.vue';
import Button from '@/components/UI/Button.vue';
import { ButtonThemeEnum } from '@/types/enums/button.enum';

const visible = defineModel('visible', {
  type: Boolean,
  default: false,
});

const blockDataMock = {
  hash: '2z3xcv4a2fg353c4ccx6c4xc56zcxbvc3423sdf4215cgdfd45345sad00',
  info: [
    {
      label: 'Miner',
      value: 'Dmitry',
    },
    {
      label: 'Miner reward',
      value: '1234',
    },
    {
      label: 'Total miners',
      value: '12',
    },
    {
      label: 'Share Rewards',
      value: '3145',
    },
    {
      label: 'My reward',
      value: '0',
    },
    {
      label: 'Date',
      value: '12.11.2024',
    },
  ],
};
</script>

<template>
  <Drawer v-model:visible="visible">
    <template #title>
      <p class="BlockDrawer__drawer-title">
        Block <span>#1231523345</span>
      </p>
    </template>

    <template #content>
      <div class="BlockDrawer__content">
        <MiningBlockHash hash="2z3xcv4a2fg353c4ccx6c4xc56zcxbvc3423sdf4215cgdfd45345sad00" />

        <div class="BlockDrawer__data">
          <div
            v-for="item in blockDataMock.info"
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

        <Button
          class="BlockDrawer__share"
          :theme="ButtonThemeEnum.SECONDARY"
        >
          <template #icon>
            <IconForward size="18" />
          </template>

          Share
        </Button>
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

  &__share {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>
