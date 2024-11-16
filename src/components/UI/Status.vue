<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import { StatusEnum } from '@/types/enums/status.enum';
import { ColorsEnum } from '@/types/enums/colors.enum';

const props = defineProps({
  value: {
    type: String as PropType<StatusEnum>,
    default: StatusEnum.BATTERY_LOW,
  },
});

const status = computed(() => {
  return {
    [StatusEnum.BATTERY_LOW]: {
      label: 'No energy',
      pointColor: ColorsEnum.PRIMARY_RED,
    },
    [StatusEnum.AWAITING]: {
      label: 'Awaiting',
      pointColor: ColorsEnum.PRIMARY_YELLOW,
    },
    [StatusEnum.MINING]: {
      label: 'Mining',
      pointColor: ColorsEnum.PRIMARY_GREEN,
    },
  }[props.value];
});
</script>

<template>
  <div class="Status">
    <div class="Status__point" />
    <p>{{ status?.label }}</p>
  </div>
</template>

<style scoped lang="scss">
.Status {
  display: flex;
  gap: 4px;
  align-items: center;

  &__point {
    border-radius: 100%;
    width: 8px;
    height: 8px;
    background-color: v-bind('status.pointColor');
  }
}
</style>
