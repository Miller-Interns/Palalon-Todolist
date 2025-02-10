import { defineStore } from 'pinia';

enum TaskStatus {
  Pending = 'pending',
  Completed = 'completed',
  Editing = 'editing',
}

interface Task {
  text: string;
  completed: boolean;
  status: TaskStatus;
}

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    categories: JSON.parse(
      localStorage.getItem('categories') || '{}'
    ) as Record<string, Task[]>,
    newCategory: '',
    newTask: {} as Record<string, string>,
  }),
  actions: {
    saveToLocalStorage() {
      localStorage.setItem('categories', JSON.stringify(this.categories));
    },
    addCategory() {
      if (this.newCategory.trim() && !this.categories[this.newCategory]) {
        this.categories[this.newCategory] = [];
        this.newCategory = '';
        this.saveToLocalStorage();
      }
    },
    removeCategory(category: string) {
      delete this.categories[category];
      this.saveToLocalStorage();
    },
    addTask(category: string) {
      if (this.newTask[category]?.trim()) {
        this.categories[category].push({
          text: this.newTask[category],
          completed: false,
          status: TaskStatus.Pending,
        });
        this.newTask[category] = '';
        this.saveToLocalStorage();
      }
    },
    removeTask(category: string, index: number) {
      this.categories[category].splice(index, 1);
      this.saveToLocalStorage();
    },
    editTask(category: string, index: number) {
      this.categories[category][index].status = TaskStatus.Editing;
      this.saveToLocalStorage();
    },
    saveEdit(category: string, index: number) {
      this.categories[category][index].status = TaskStatus.Pending;
      this.saveToLocalStorage();
    },
  },
});
