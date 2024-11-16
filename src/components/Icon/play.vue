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
    viewBox="0 0 13 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4993 5.76795C12.8326 6.53775 12.8326 8.46225 11.4993 9.23205L3.24927 13.9952C1.91594 14.765 0.249267 13.8027 0.249267 12.2631L0.249267 2.73686C0.249267 1.19726 1.91593 0.235008 3.24927 1.00481L11.4993 5.76795Z"
      fill="currentColor"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  flex-shrink: 0;
}
</style>
