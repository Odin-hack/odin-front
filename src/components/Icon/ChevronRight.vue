
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
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 3L11 8L6 13"
      stroke="#AAAAAA"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  flex-shrink: 0;
}
</style>
