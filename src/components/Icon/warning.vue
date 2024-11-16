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
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.92965 6.26536C11.0959 4.32951 13.9028 4.32952 15.069 6.26536L20.1516 14.7019C21.3562 16.7013 19.9162 19.25 17.5819 19.25L7.41676 19.25C5.08246 19.25 3.64248 16.7013 4.84706 14.7019L9.92965 6.26536ZM12.4994 7.99999C13.0517 7.99999 13.4994 8.44771 13.4994 8.99999V13C13.4994 13.5523 13.0517 14 12.4994 14C11.9471 14 11.4994 13.5523 11.4994 13V8.99999C11.4994 8.44771 11.9471 7.99999 12.4994 7.99999ZM12.4994 16.8461C13.0941 16.8461 13.5763 16.364 13.5763 15.7692C13.5763 15.1745 13.0941 14.6923 12.4994 14.6923C11.9046 14.6923 11.4224 15.1745 11.4224 15.7692C11.4224 16.364 11.9046 16.8461 12.4994 16.8461Z"
      fill="currentColor"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  flex-shrink: 0;
}
</style>
