import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

import type { ITask } from '@/types/tasks';
import { useAuthStore } from '@/stores/auth';

export const useTasksStore = defineStore('tasksStore', () => {
  const tasks = ref<ITask[]>([]);


  const fetchTasks = async () => {
    const { data, error } = await useApi<ITask[]>('GET', '/v1/api/tasks');

    if (error) return;

    if (data?.length) tasks.value = data;
  };

  const checkTasks = async (id: number) => {
    const { data, error } = await useApi<ITask>('GET', `/v1/api/tasks/check?taskId=${ id }`);

    if (error) return;

    if (data) {
      const taskIndex = tasks.value.findIndex(task => task.id === id);

      if (taskIndex !== -1) {
        tasks.value[taskIndex] = data;
      }

      useAuthStore().addMaxEnergy(data.awardAmount);
    }
  };

  return {
    fetchTasks,
    checkTasks,
    tasks,
  };
});
