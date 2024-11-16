<script lang="ts" setup>
import { useScrollLocker } from '@/composables/useScrollLocker';
import { ref, watch } from 'vue';
import { useIsMounted } from '@/composables/useIsMounted';

import Button from '@/components/UI/Button.vue';
import IconClose from '@/components/Icon/Close.vue';


const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },

  title: {
    type: String,
    default: '',
  },

  noPadding: Boolean,
  allowScroll: Boolean,
  applyBtn: Boolean,
  hideHeader: Boolean,
});
const emit = defineEmits(['update:visible']);

const { lockScroll, unlock } = useScrollLocker();

const isVisible = ref(false);

watch(() => props.visible, (val) => isVisible.value = val, { immediate: true });
watch(isVisible, (val) => emit('update:visible', val));

const isMounted = useIsMounted();

watch([isVisible, isMounted], ([visible, mounted]) => {
  if (mounted) {
    visible ? lockScroll() : unlock();
  } else {
    return unlock();
  }
}, { immediate: true });

const open = () => isVisible.value = true;
const close = () => isVisible.value = false;

defineExpose({
  isVisible,
  open,
  close,
});
</script>

<template>
  <teleport to="body">
    <transition name="Drawer--transition">
      <div
        v-if="isVisible"
        class="Drawer"
        v-bind="$attrs"
      >
        <div
          class="Drawer__overlay"
          @click="close()"
        />
        <div class="Drawer__content">
          <div
            v-if="!hideHeader"
            class="Drawer__header"
          >
            <slot name="title">
              <div class="Drawer__title">
                {{ title }}
              </div>
            </slot>

            <slot
              name="close"
              v-bind="{ isVisible, open, close }"
            >
              <button
                type="button"
                class="Drawer__close"
                @click="close()"
              >
                <IconClose
                  size="12"
                  class="Drawer__close-icon"
                />
              </button>
            </slot>
          </div>

          <div
            :class="{
              'Drawer__body': true,
              'Drawer__body--no-padding': noPadding,
              'Drawer__body--scroll-y': allowScroll,
            }"
          >
            <slot name="content" />
          </div>

          <div
            v-if="applyBtn"
            class="Drawer__apply"
          >
            <Button>
              Apply
            </Button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.Drawer {
  $this: &;

  --transition: .4s ease;
  --header-height: 56px;
  --content-max-height: 60vh;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;

  transition: var(--transition);

  &--transition {
    &-enter-active,
    &-leave-active {
      #{ $this } {
        &__overlay {
          opacity: 1;
        }

        &__content {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    &-enter-from,
    &-leave-to {
      #{ $this } {
        &__overlay {
          opacity: 0;
        }

        &__content {
          opacity: 0;
          transform: translateY(100px);
        }
      }
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    transition: var(--transition);
  }

  &__content {
    position: relative;
    width: 100%;
    max-width: 100%;
    z-index: 1;
    background-color: var(--color-primary-grey);
    border-radius: 16px 16px 0 0;
    transition: var(--transition);
  }

  &__header {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--header-height);
    padding: 0 20px;
  }

  &__title {
    color: var(--color-secondary-800);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__close {
    position: absolute;
    z-index: 1;
    right: 20px;
    top: 16px;
    height: 28px;
    width: 28px;
    transition: .1s;
    cursor: pointer;
    background-color: rgb(255 255 255 / 8%);
    border-radius: 50%;

    &-icon {
      color: var(--color-primary-white);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }

  &__body {
    max-height: var(--content-max-height);

    &--no-padding {
      padding: 0;
    }

    &--scroll-y {
      overflow-y: scroll;
    }
  }

  &__apply {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 16px;

    &-btn {
      width: 100%;
    }
  }
}
</style>
