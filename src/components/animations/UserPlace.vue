<script setup lang="ts">
import { computed } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';

import emojiComp1 from './data/emoji-comp-1.json';
import emojiComp2 from './data/emoji-comp-2.json';
import emojiComp3 from './data/emoji-comp-3.json';

const props = defineProps({
  place: {
    type: [String, Number],
    required: true,
  },
  style: {
    type: String,
    default: 'width: 32px; height: 32px;',
  },
});

const placeAnimation = computed(() => {
  return {
    1: emojiComp1,
    2: emojiComp2,
    3: emojiComp3,
  }[props.place] || null;
});
</script>

<template>
  <div class="UserPlace">
    <Vue3Lottie
      v-if="placeAnimation"
      :animation-data="placeAnimation"
      auto-play
      :style="style"
    />

    <p
      v-else
      class="UserPlace__number"
    >
      #{{ place }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.UserPlace {
  &__number {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.4px;
  }
}
</style>
