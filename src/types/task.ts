import { TaskStatus } from '@/types/task-status';

export interface Task {
  text: string;
  completed: boolean;
  status: TaskStatus;
}
