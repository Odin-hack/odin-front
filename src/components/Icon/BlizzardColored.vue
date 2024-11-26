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
    viewBox="0 0 8 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.130549 5.18045L3.78492 0.27657C4.17389 -0.245399 5.0264 0.0206771 5.0264 0.664048V3.02789C5.0264 3.39394 5.33327 3.69068 5.71181 3.69068H7.31326C7.90025 3.69068 8.21566 4.35763 7.83172 4.78698L3.37847 9.76692C2.89306 10.3097 1.98614 9.82348 2.20512 9.13783L2.85943 7.08907C2.99559 6.66273 2.66599 6.23072 2.20454 6.23072H0.686624C0.127824 6.23072 -0.196139 5.61885 0.130549 5.18045Z"
      fill="#2990FF"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  flex-shrink: 0;
}
</style>
