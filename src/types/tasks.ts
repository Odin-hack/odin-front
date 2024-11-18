import { TaskActionEnum, TaskAwardTypeEnum, TaskStatusEnum, TaskTypeEnum } from '@/types/enums/task.enum';

export interface ITask {
  actions: TaskActionEnum[]
  awardAmount: number;
  awardType: TaskAwardTypeEnum;
  id: number;
  info: string;
  status: TaskStatusEnum;
  title: TaskTypeEnum;
  type: TaskTypeEnum;
}
