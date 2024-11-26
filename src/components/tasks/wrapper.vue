<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';

import type { ITask } from '@/types/tasks';

import TasksCard from '@/components/tasks/card.vue';
import { type TaskAwardTypeEnum, TaskStatusEnum } from '@/types/enums/task.enum';


const props = defineProps({
  tasks: {
    type: Array as PropType<ITask[]>,
    required: true,
    default: () => [],
  },

  onlyTypes: {
    type: Array as PropType<TaskAwardTypeEnum[]>,
    default: () => [],
  },
});

const tasks = computed(() => {
  if (props.onlyTypes.length) {
    return props.tasks?.filter((task) => {
      props.onlyTypes?.includes(task?.awardType);
    });
  }

  return props.tasks;
});

const total = computed(() => tasks.value?.length);
const current = computed(() => tasks.value?.filter((task) => task?.status.toUpperCase() === TaskStatusEnum.COMPLETED).length);
</script>

<template>
  <div class="Tasks">
    <div class="Tasks__header">
      <h3>
        Tasks
      </h3>

      <p>{{ current }}/{{ total }}</p>
    </div>

    <div class="Tasks__wrapper">
      <TasksCard
        v-for="(task, index) in tasks"
        :key="index"
        :task
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.Tasks {
  .Tasks__header  {
    margin: 24px 16px 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: var(--color-grey-secondary);
    }
  }

  &__wrapper {
    position: relative;
    width: 100%;
    padding: 12px 16px;
    background-color: var(--color-grey-darken);
    border-radius: 12px;
  }
}
</style>
