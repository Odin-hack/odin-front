import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

import type { ITask } from '@/types/tasks';

export const useTasksStore = defineStore('tasksStore', () => {
  const tasks = ref<ITask[]>([]);

  const fetchTasks = async () => {
    const { data, error } = await useApi<ITask[]>('GET', '/v1/api/tasks');

    if (error) return;

    if (data?.length) tasks.value = data;
  };

  return {
    fetchTasks,
    tasks,
  };
});
