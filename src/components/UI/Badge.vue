<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import type { PropType } from 'vue';

import { BadgeTypeEnum } from '@/types/enums/badge.enum';
import { ColorsEnum } from '@/types/enums/colors.enum';

import Switch from '@/components/UI/Switch.vue';

import IconSun from '@/components/Icon/sun.vue';


const props = defineProps({
  type: {
    type: String as PropType<BadgeTypeEnum>,
    default: BadgeTypeEnum.ACTIVE,
  },

  switchActive: Boolean,
  isInvoice: Boolean,
});

const emit = defineEmits(['update:switchActive']);

const content = computed(() => {
  return {
    [BadgeTypeEnum.DISABLED]: {
      icon: IconSun,
      label: 'Turbo',
      text: 'Remove CPU limits',
      color: ColorsEnum.SECONDARY_GREY,
    },
    [BadgeTypeEnum.UNAVAILABLE]: {
      icon: IconSun,
      label: 'Turbo',
      text: 'Remove CPU limits',
      color: ColorsEnum.PRIMARY_RED,
    },
    [BadgeTypeEnum.ACTIVE]: {
      icon: IconSun,
      label: 'Turbo',
      text: 'Remove CPU limits',
      color: ColorsEnum.PRIMARY_BLUE,
    },
  }[props.type];
});

const isSwitchActive = ref(props.switchActive);

const switchChangeHandler = (value: boolean) => {
  if (props.isInvoice) return emit('update:switchActive', value);

  isSwitchActive.value = value;
};

watch(() => props.switchActive, (value) => {
  isSwitchActive.value = value;
});
</script>

<template>
  <div class="Badge">
    <div class="Badge__icon">
      <slot
        v-if="$slots?.icon"
        name="icon"
      />

      <component
        :is="content.icon"
        v-else
        size="28"
      />
    </div>

    <div class="Badge__content">
      <p>{{ content.label }}</p>
      <div
        class="Badge__content-info"
        v-html="content.text"
      />
    </div>

    <div class="Badge__switch">
      <Switch
        :model-value="isSwitchActive"
        @update:model-value="switchChangeHandler($event)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.Badge {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background-color: var(--color-grey-dark);
  border-radius: 16px;

  &__content {
    p {
      color: var(--color-primary-white);
      font-weight: 700;
      letter-spacing: 0.06px;
      margin-bottom: 4px;
    }

    :deep(span) {
      color: v-bind('content.color');
      font-weight: 400;
    }

    &-info {
      font-weight: 400;
    }
  }

  &__icon {
    color: v-bind('content.color');
  }

  &__switch {
    margin-left: auto;
  }
}
</style>
