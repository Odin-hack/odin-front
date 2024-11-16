<script setup lang="ts">
import { computed } from 'vue';

import { BadgeTypeEnum } from '@/types/enums/badge.enum';
import { ColorsEnum } from '@/types/enums/colors.enum';

import Switch from '@/components/UI/Switch.vue';

import IconSun from '@/components/Icon/sun.vue';

interface IBadgeProps {
  type: BadgeTypeEnum
}

const props = withDefaults(defineProps<IBadgeProps>(), {
  type: BadgeTypeEnum.ACTIVE,
});

const content = computed(() => {
  return {
    [BadgeTypeEnum.DISABLED]: {
      icon: IconSun,
      label: 'Inactive',
      text: 'Turbo-mode x10',
      color: ColorsEnum.SECONDARY_GREY,
    },
    [BadgeTypeEnum.UNAVAILABLE]: {
      icon: IconSun,
      label: 'Unavailable',
      text: 'Turbo-mode x10',
      color: ColorsEnum.PRIMARY_RED,
    },
    [BadgeTypeEnum.ACTIVE]: {
      icon: IconSun,
      label: 'Activated',
      text: 'Turbo-mode <span>x10</span<',
      color: ColorsEnum.PRIMARY_BLUE,
    },
  }[props.type];
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
      <div v-html="content.text" />
    </div>

    <div class="Badge__switch">
      <Switch />
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
      color: var(--color-grey-light);
      margin-bottom: 4px;
    }

    :deep(span) {
      color: v-bind('content.color');
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
