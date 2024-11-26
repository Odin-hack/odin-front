<script setup lang="ts">
import { computed, type PropType } from 'vue';

import { TaskAwardTypeEnum } from '@/types/enums/task.enum';

import IconBlizzard from '@/components/Icon/BlizzardColored.vue';
import SigmaColored from '@/components/Icon/sigmaColored.vue';
import { ColorsEnum } from '@/types/enums/colors.enum';


const props = defineProps({
  amount: {
    type: Number,
    required: true,
    default: 0,
  },

  type: {
    type: String as PropType<TaskAwardTypeEnum>,
    required: true,
  },
});

const content = computed(() => {
  return {
    [TaskAwardTypeEnum.MAX_ENERGY]: {
      icon: IconBlizzard,
      iconSize: 10,
      backgroundColor: ColorsEnum.DARK_GREY,
    },
  }[props.type?.toUpperCase()] || {
    icon: SigmaColored,
    backgroundColor: ColorsEnum.SECONDARY_DARK_GREEN,
  };
});
</script>

<template>
  <div class="Tag">
    <component
      :is="content.icon"
      :size="content?.iconSize || 16"
    />

    <p class="Tag__amount">
      {{ amount }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.Tag {
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.08px;
  font-weight: 500;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 2px 6px 2px 4px;
  border-radius: 20px;
  width: fit-content;
  background-color: v-bind('content.backgroundColor');
}
</style>
