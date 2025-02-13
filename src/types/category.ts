import type { Task } from '@/types/task';

export interface Category {
  name: string;
  tasks: Task[];
}
