<script setup lang="ts">
interface IIconProps {
  size?: number | string,
  width?: number | string,
  height?: number | string,
}

withDefaults(defineProps<IIconProps>(), {
  size: 20,
  width: 0,
  height: 0,
});
</script>

<template>
  <svg
    :width="width || size"
    :height="height || size"
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
