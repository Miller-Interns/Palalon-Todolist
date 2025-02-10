export interface Task {
  text: string;
  completed: boolean;
  isEditing: boolean;
}

export type CategoryTasks = Record<string, Task[]>;

export interface NewTaskMap {
  [category: string]: string;
}
