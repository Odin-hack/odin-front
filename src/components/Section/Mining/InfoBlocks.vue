<script setup lang="ts">
interface IInfoBlocksProps {
  title: string
}

defineProps<IInfoBlocksProps>();
</script>

<template>
  <div class="InfoBlocks">
    <p class="SectionTitle">
      {{ title }}
    </p>

    <div class="InfoBlocks__wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.InfoBlocks {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
}
</style>
