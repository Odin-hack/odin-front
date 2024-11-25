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
    viewBox="0 0 21 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.31005 13.4331L9.98918 1.66377C10.913 0.411042 12.9377 1.04962 12.9377 2.59372V8.26694C12.9377 9.14545 13.6665 9.85762 14.5656 9.85762H18.369C19.7631 9.85762 20.5122 11.4583 19.6003 12.4887L9.02386 24.4406C7.87103 25.7433 5.71709 24.5764 6.23716 22.9308L7.79115 18.0138C8.11454 16.9906 7.33172 15.9537 6.23579 15.9537H2.63073C1.30358 15.9537 0.534169 14.4852 1.31005 13.4331Z"
      fill="#212121"
      stroke="#2990FF"
      stroke-linecap="round"
      stroke-dasharray="3 3"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  flex-shrink: 0;
}
</style>
