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

import { TaskActionEnum, TaskStatusEnum, TaskTypeEnum } from '@/types/enums/task.enum';
import { ButtonThemeEnum } from '@/types/enums/button.enum';

import WebApp from '@twa-dev/sdk';
import { useAuthStore } from '@/stores/auth';


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

const openTaskModal = () => visible.value = true;

const { user } = useAuthStore();

const handleTaskEvent = (action: TaskActionEnum) => {
  visible.value = true;

  const type = props.task?.type.toUpperCase();
  const actionLower = action.toUpperCase();

  if (type === TaskTypeEnum.INVITE) {
    if (actionLower === TaskActionEnum.COPY) {
      return navigator.clipboard.writeText(`https://t.me/share/url?url=${ user?.info?.refLink }`);
    }

    return WebApp?.openTelegramLink(`https://t.me/share/url?url=${ user?.info?.refLink }`);
  }

  if (type === TaskTypeEnum.JOIN) {
    const url = props.task?.data?.find((item) => item.key === type.toLowerCase())?.value;
    
    return WebApp?.openTelegramLink(url || '');
  }
};

const handleActionClick = () => {
  isCheckedProgress.value = true;

  setTimeout(() => isCheckedProgress.value = false, 15000);
};
</script>


<template>
  <div
    class="task"
  >
    <div
      class="task__wrapper"
      @click="openTaskModal"
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
      <Button
        v-if="task.status.toUpperCase() !== TaskStatusEnum.COMPLETED && !isCheckedProgress && task.actions?.includes(TaskActionEnum.CHECK?.toLowerCase())"
        :theme="ButtonThemeEnum.PRIMARY"
        small
        rounded
        @click="handleActionClick"
      >
        Check
      </Button>

      <Spinner v-if="isCheckedProgress && task.status.toUpperCase() !== TaskStatusEnum.COMPLETED" />

      <IconCheck
        v-if="task.status.toUpperCase() === TaskStatusEnum.COMPLETED"
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
              v-for="(action, index) in task.actions.filter((action) => action !== 'check')"
              :key="action"
              :theme="index === 0 ? ButtonThemeEnum.PRIMARY : ButtonThemeEnum.SECONDARY"
              @click="handleTaskEvent(action)"
            >
              {{ action.toUpperCase() }}
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
