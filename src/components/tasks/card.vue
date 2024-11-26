<script setup lang="ts">
import type { PropType } from 'vue';
import { computed, ref } from 'vue';
import type { ITask } from '@/types/tasks';

import UITag from '@/components/UI/Tag.vue';
import Button from '@/components/UI/Button.vue';
import Spinner from '@/components/UI/Spinner.vue';
import Drawer from '@/components/Drawer.vue';
import IconCheck from '@/components/Icon/Check.vue';
import IconTelegram from '@/components/Icon/Telegram.vue';
import IconInvite from '@/components/Icon/Invite.vue';
import IconChevronRight from '@/components/Icon/ChevronRight.vue';

import { TaskActionEnum, TaskStatusEnum, TaskTypeEnum } from '@/types/enums/task.enum';
import { ButtonThemeEnum } from '@/types/enums/button.enum';

import WebApp from '@twa-dev/sdk';
import { useTasksStore } from '@/stores/tasks';


const props = defineProps({
  task: {
    type: Object as PropType<ITask>,
    required: true,
  },
});

const image = computed(() => {
  return {
    [TaskActionEnum.JOIN]: IconTelegram,
    [TaskActionEnum.INVITE]: IconInvite,
  }[props.task?.type.toUpperCase()];
});

const isCheckedProgress = ref(false);
const visible = ref(false);
const isCopied = ref(false);

const openTaskModal = () => visible.value = true;

const handleTaskEvent = (action: TaskActionEnum) => {


  const type = props.task?.type.toUpperCase();
  const actionUpper = action.toUpperCase();

  actionUpper !== TaskActionEnum.COPY && (visible.value = false);
  if (actionUpper === TaskActionEnum.CHECK) {
    return handleActionClick();
  }

  if (type === TaskTypeEnum.INVITE) {
    const link  = props.task?.data?.find((item) => item.key === TaskActionEnum.INVITE.toLowerCase());

    if (actionUpper === TaskActionEnum.COPY) {
      navigator.clipboard.writeText(link.value || '');

      isCopied.value = true;

      setTimeout(() => {
        isCopied.value = false;
        visible.value = false;
      }, 500);

      return;
    }

    return WebApp?.openTelegramLink(link.value || '');
  }

  if (type === TaskTypeEnum.JOIN) {
    const url = props.task?.data?.find((item) => item.key === type.toLowerCase())?.value;

    return WebApp?.openTelegramLink(url || '');
  }
};

const isCompleted = computed(() => props.task.status.toUpperCase() === TaskStatusEnum.COMPLETED);

const handleActionClick = async () => {
  isCheckedProgress.value = true;

  await useTasksStore().checkTasks(props.task?.id);

  setTimeout(() => isCheckedProgress.value = false, 15000);
};
</script>


<template>
  <div
    class="task"
    @click="!isCompleted && openTaskModal()"
  >
    <div
      class="task__wrapper"
    >
      <div class="task__image">
        <div
          v-if="!image"
          class="task__image-box"
        />

        <component
          :is="image"
          v-else
          size="40"
        />
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
      <IconChevronRight
        v-if="!isCheckedProgress && !isCompleted"
      />

      <Spinner
        v-if="isCheckedProgress && !isCompleted"
      />

      <IconCheck
        v-if="isCompleted"
      />
    </div>

    <Drawer v-model:visible="visible">
      <template #title>
        <p class="task__drawer-title">
          {{ task.title }}
        </p>
      </template>

      <template #content>
        <div class="task__drawer-info">
          <p>{{ task.info }}</p>

          <div class="task__drawer-actions">
            <Button
              v-for="(action, index) in task.actions"
              :key="action"
              :theme="index === 0 ? ButtonThemeEnum.PRIMARY : ButtonThemeEnum.SECONDARY"
              @click="handleTaskEvent(action)"
            >
              <p
                v-if="action.toUpperCase() !== TaskActionEnum.COPY || action.toUpperCase() === TaskActionEnum.COPY && !isCopied"
              >
                {{ action.toUpperCase() }}
              </p>

              <IconCheck
                v-if="action.toUpperCase() === TaskActionEnum.COPY && isCopied"
              />
            </Button>
          </div>
        </div>
      </template>
    </Drawer>
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
  cursor: pointer;

  &__drawer {
    &-info {
      padding: 16px 16px 24px 16px;
    }

    &-actions {
      display: flex;
      gap: 16px;
      padding: 24px 0 12px 0;
    }
  }

  &__wrapper {
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
      font-weight: 300;
    }
  }

  &__actions {
    position: relative;
  }
}
</style>
