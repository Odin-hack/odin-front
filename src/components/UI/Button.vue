<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import { ButtonThemeEnum } from '@/types/enums/button.enum';
import { ColorsEnum } from '@/types/enums/colors.enum';

const props = defineProps({
  theme: {
    type: String as PropType<ButtonThemeEnum>,
    default: ButtonThemeEnum.DISABLED,
  },
  loading: Boolean,
  disabled: Boolean,
  rounded: Boolean,
  small: Boolean,
});

const theme = computed(() => {
  return {
    [ButtonThemeEnum.DISABLED]: {
      background: ColorsEnum.PRIMARY_GREY,
      color: ColorsEnum.WHITE_95,
      badgeBackground: ColorsEnum.WHITE_95,
      badgeColor: ColorsEnum.PRIMARY_GREY,
    },
    [ButtonThemeEnum.PRIMARY]: {
      background: ColorsEnum.PRIMARY_BLUE,
      color: ColorsEnum.PRIMARY_WHITE,
      badgeBackground: ColorsEnum.PRIMARY_WHITE,
      badgeColor: ColorsEnum.PRIMARY_BLUE,
    },
    [ButtonThemeEnum.WARNING]: {
      background: ColorsEnum.PRIMARY_YELLOW,
      color: ColorsEnum.CAMEL,
      badgeBackground: ColorsEnum.CAMEL,
      badgeColor: ColorsEnum.PRIMARY_YELLOW,
    },
    [ButtonThemeEnum.SECONDARY]: {
      background: ColorsEnum.PRIMARY_GREY,
      color: ColorsEnum.PRIMARY_WHITE,
      badgeBackground: ColorsEnum.DARK_GREY,
      badgeColor: ColorsEnum.PRIMARY_YELLOW,
      border: `1px solid ${ColorsEnum.DARK_GREY}`,
    },
  }[props.theme];
});

const isDisabled = computed(() => props.disabled || props.loading);
const borderRadius = computed(() => props.rounded ? '20px' : '10px');
const paddings = computed(() => props.small ? '8px 12px' : '14px');
</script>

<template>
  <button
    class="Button"
    :disabled="isDisabled"
  >
    <span
      v-if="$slots?.icon"
      class="Button__icon"
    >
      <slot
        name="icon"
      />
    </span>

    <slot />

    <div
      v-if="$slots?.badge"
      class="Button__badge"
    >
      <slot
        name="badge"
      />
    </div>
  </button>
</template>

<style scoped lang="scss">
.Button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: v-bind(borderRadius);
  padding: v-bind(paddings);
  width: 100%;
  background-color: v-bind('theme.background');
  color: v-bind('theme.color');
  cursor: pointer;
  text-align: center;
  transition: opacity 0.3s ease;
  border: v-bind('theme.border');

  &:active {
    opacity: 0.65;
  }

  &__badge {
    display: flex;
    align-items: center;
    gap: 4px;
    color: v-bind('theme.badgeColor');
    background-color: v-bind('theme.badgeBackground');
    padding: 4px 6px;
    border-radius: 24px;
  }
}
</style>
