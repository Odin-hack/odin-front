<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: null,
  },

  tag: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="InfoBlocks">
    <p class="SectionTitle">
      {{ title }}

      <span
        v-if="tag"
        class="InfoBlocks__tag"
      >
        {{ tag }}
      </span>
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

  &__tag {
    color: var(--color-primary-red);
    text-transform: lowercase;
  }

  &__header {
    display: flex;
    gap: 16px;
    align-items: center;
  }
}
</style>
