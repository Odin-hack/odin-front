<script setup lang="ts">
defineProps({
  disabled: Boolean,
});

const isActiveLocal = defineModel('modelValue', {
  type: Boolean,
  default: false,
});
</script>

<template>
  <button
    class="Switch"
    :class="isActiveLocal && 'Switch--active'"
    :disabled
    @click="isActiveLocal = !isActiveLocal"
  />
</template>

<style scoped lang="scss">
.Switch {
  position: relative;
  width: 51px;
  height: 31px;
  border-radius: 100px;
  background-color: var(--color-dark);
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s ease;

  &:before {
    position: absolute;
    top: 2px;
    left: 2px;
    content: '';
    width: 27px;
    height: 27px;
    background-color: var(--color-primary-white);
    border-radius: 50%;
    transition: left 0.3s ease, background-color 0.3s ease;
  }

  &:disabled {
    opacity: 0.4;
  }

  &--active {
    background-color: var(--color-primary-blue);

    &:before {
      left: 22px;
      background-color: var(--color-primary-white);
    }
  }
}
</style>
