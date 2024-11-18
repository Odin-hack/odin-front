<script setup lang="ts">
import { computed, ref } from 'vue';

import type { PropType }  from 'vue';
import type { ITask } from '@/types/tasks';

import UITag from '@/components/UI/Tag.vue';
import Button from '@/components/UI/Button.vue';
import Spinner from '@/components/UI/Spinner.vue';

import { TaskActionEnum, TaskStatusEnum, TaskTypeEnum } from '@/types/enums/task.enum';
import { ButtonThemeEnum } from '@/types/enums/button.enum';
import WebApp from '@twa-dev/sdk';


const props = defineProps({
  task: {
    type: Object as PropType<ITask>,
    required: true,
  },
});

const image = computed(() => {
  return {
    [TaskActionEnum.JOIN]: 'telegram',
    [TaskActionEnum.INVITE]: 'invite',
  }[props.task?.type.toUpperCase()];
});

const isCheckedProgress = ref(false);


const handleTaskEvent = () => {
  const type = props.task?.type.toUpperCase();

  if ([TaskTypeEnum.INVITE, TaskTypeEnum.JOIN].includes(type)) {
    return WebApp?.openTelegramLink(type === TaskTypeEnum.INVITE ? 'https://t.me/share/url?url=' : 'https://t.me/HAXcommunity');
  }
};

const handleActionClick = () => {
  isCheckedProgress.value = true;
};
</script>


<template>
  <div
    class="task"
  >
    <div
      class="task__wrapper"
      @click="handleTaskEvent"
    >
      <div class="task__image">
        <div
          v-if="!image"
          class="task__image-box"
        />

        <img
          v-else
          :src="`src/public/img/tasks/${ image }.svg`"
          :alt="image"
        >
      </div>

      <div class="task__content">
        <div class="task__content-title">
          {{ task.title }}

          <UITag
            :type="task.awardType"
            :amount="task.awardAmount"
          />
        </div>

        <div class="task__content-info">
          {{ task.info }}
        </div>
      </div>
    </div>

    <div class="task__actions">
      <Button
        v-if="task.status.toUpperCase() !== TaskStatusEnum.COMPLETED && !isCheckedProgress"
        :theme="ButtonThemeEnum.PRIMARY"
        small
        rounded
        @click="handleActionClick"
      >
        Check
      </Button>

      <Spinner v-if="isCheckedProgress" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.task {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 12px 0;
  position: relative;
  width: 100%;

  &__wrapper {
    cursor: pointer;
    display: flex;
    gap: 16px;
    align-items: center;
  }


  &__image {
    width: 40px;
    height: 40px;

    &-box {
      width: 100%;
      height: 100%;
      background-color: var(--color-grey-medium);
      border-radius: 8px;
    }
  }

  &__content {
    &-title {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      gap: 8px;
    }

    &-info {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }

  &__actions {
    position: relative;
  }
}
</style>
