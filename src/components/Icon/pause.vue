<script setup lang="ts">
defineProps({
  size: {
    type: [Number, String],
    default: 20,
  },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5.99927"
      y="6"
      width="12"
      height="12"
      rx="2"
      fill="currentColor"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  flex-shrink: 0;
}
</style>
