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
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.07699 10.4062L5.72797 12.3372C5.15626 13.1555 5.7232 14.2977 6.7011 14.2977H9.35745C10.165 14.2977 10.7418 15.1041 10.5035 15.8999L9.35846 19.7243C8.97525 21.0041 10.5624 21.9118 11.4118 20.8986L14.2199 17.5491L7.07699 10.4062ZM9.40359 7.07594L16.7996 14.4719L19.205 11.6027C19.8769 10.8012 19.3249 9.55625 18.2977 9.55625H15.4952C14.8327 9.55625 14.2957 9.00234 14.2957 8.31906V3.90655C14.2957 2.70559 12.8038 2.20892 12.1231 3.18326L9.40359 7.07594Z"
      fill="currentColor"
    />
    <path
      d="M19.4995 17.834L6.66619 5.00066"
      stroke="currentColor"
      stroke-width="2.91666"
      stroke-linecap="round"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  flex-shrink: 0;
}
</style>
