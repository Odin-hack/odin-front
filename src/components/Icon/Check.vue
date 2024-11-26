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
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.1976 1.27096C19.5553 1.61613 19.5654 2.18589 19.2203 2.54355L7.79107 14.3862C7.62146 14.5619 7.38771 14.6612 7.14347 14.6612C6.89923 14.6612 6.66547 14.5619 6.49587 14.3862L0.781271 8.46486C0.436097 8.1072 0.446219 7.53744 0.803879 7.19227C1.16154 6.8471 1.7313 6.85722 2.07647 7.21488L7.14347 12.4652L17.9251 1.29356C18.2702 0.935905 18.84 0.925782 19.1976 1.27096Z"
      fill="#5E5E5E"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  flex-shrink: 0;
}
</style>
