<script setup lang="ts">
import { ColorsEnum } from '@/types/enums/colors.enum';
import { computed } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  backgroundColor: {
    type: String as PropType<ColorsEnum>,
    default: ColorsEnum.DARK,
  },
  progressColor: {
    type: String as PropType<ColorsEnum>,
    default: ColorsEnum.PRIMARY_BLUE,
  },
  percents: {
    type: Number,
    default: 0,
  },
  showPercents: Boolean,
});

const formattedPercents = computed(() => `${ props.percents }%`);
</script>

<template>
  <div class="Progress__wrapper">
    <div class="Progress" />

    <p v-if="showPercents">
      {{ percents }}%
    </p>
  </div>
</template>

<style scoped lang="scss">
.Progress {
  position: relative;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: v-bind(backgroundColor);
  overflow: hidden;

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 16px;

    p {
      color: var(--color-grey-secondary-light);
    }
  }


  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: v-bind(progressColor);
    width: v-bind(formattedPercents);
    border-radius: 4px;
    height: 100%;
  }
}
</style>
