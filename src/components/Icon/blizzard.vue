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
    viewBox="0 0 18 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.293732 12.42L8.51596 1.00973C9.39114 -0.204779 11.3093 0.414322 11.3093 1.91131V7.41145C11.3093 8.26316 11.9997 8.95361 12.8514 8.95361H16.4546C17.7753 8.95361 18.485 10.5055 17.6212 11.5045L7.60146 23.0917C6.50932 24.3547 4.46877 23.2233 4.96146 21.6279L6.43364 16.8609C6.74 15.8689 5.99839 14.8637 4.96016 14.8637H1.54488C0.287599 14.8637 -0.441308 13.44 0.293732 12.42Z"
      fill="currentColor"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  flex-shrink: 0;
}
</style>
