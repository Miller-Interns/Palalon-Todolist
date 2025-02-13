import { TaskStatus } from '@/enums/TaskStatus';
export interface Task {
  text: string;
  completed: boolean;
  status: TaskStatus;
}

export interface Category {
  name: string;
  tasks: Task[];
}

// Define a NewTaskMap interface with a string index signature:
export interface NewTaskMap {
  [categoryName: string]: string;
}
