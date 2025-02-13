import { defineStore } from 'pinia';
import { TaskStatus } from '@/enums/TaskStatus';
import type { Category, NewTaskMap } from '@/types/type';

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    categories: JSON.parse(
      localStorage.getItem('categories') || '[]'
    ) as Category[],
    newCategory: '',

    newTask: {} as NewTaskMap,
  }),
  actions: {
    saveToLocalStorage() {
      localStorage.setItem('categories', JSON.stringify(this.categories));
    },
    addCategory() {
      const trimmed = this.newCategory.trim();
      if (trimmed && !this.categories.find((cat) => cat.name === trimmed)) {
        this.categories.push({ name: trimmed, tasks: [] });
        this.newCategory = '';
        this.saveToLocalStorage();
      }
    },
    removeCategory(categoryName: string) {
      this.categories = this.categories.filter(
        (cat) => cat.name !== categoryName
      );
      this.saveToLocalStorage();
    },
    addTask(categoryName: string) {
      const taskText = this.newTask[categoryName]?.trim();
      if (taskText) {
        const cat = this.categories.find((cat) => cat.name === categoryName);
        if (cat) {
          cat.tasks.push({
            text: taskText,
            completed: false,
            status: TaskStatus.Pending,
          });
          this.newTask[categoryName] = '';
          this.saveToLocalStorage();
        }
      }
    },
    removeTask(categoryName: string, index: number) {
      const cat = this.categories.find((cat) => cat.name === categoryName);
      if (cat) {
        cat.tasks.splice(index, 1);
        this.saveToLocalStorage();
      }
    },
    editTask(categoryName: string, index: number) {
      const cat = this.categories.find((cat) => cat.name === categoryName);
      if (cat) {
        cat.tasks[index].status = TaskStatus.Editing;
        this.saveToLocalStorage();
      }
    },
    saveEdit(categoryName: string, index: number) {
      const cat = this.categories.find((cat) => cat.name === categoryName);
      if (cat) {
        cat.tasks[index].status = TaskStatus.Pending;
        this.saveToLocalStorage();
      }
    },
  },
});
