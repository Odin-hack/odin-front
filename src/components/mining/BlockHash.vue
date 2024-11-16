<script setup lang="ts">
import IconCode from '@/components/Icon/Code.vue';

defineProps({
  hash: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="BlockHash">
    <div class="BlockHash__header">
      <p class="BlockHash__header-title">
        Hash
      </p>

      <IconCode size="16" />
    </div>

    <div class="BlockHash__content">
      {{ hash }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.BlockHash {
  position: relative;
  border-radius: 4px;
  padding: 6px 6px 6px 12px;
  background-color: var(--color-dark);

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    border-radius: 4px 0 0 4px;
    background-color: var(--color-primary-white);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;

    &-title {
      font-size: 15px;
      line-height: 20px;
      letter-spacing: -0.23px;
      font-weight: 500;
    }
  }

  &__content {
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.23px;
    word-break: break-all;
    color: var(--color-grey-secondary-light);
  }
}
</style>
