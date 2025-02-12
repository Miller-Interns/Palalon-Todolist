import { computed } from 'vue';
import { useTodoStore } from '@/stores/todoStore';
import { TaskStatus } from '@/enums/TaskStatus';

export function useTodos() {
  const todoStore = useTodoStore();

  return {
    categories: computed(() => todoStore.categories),
    newCategory: computed(() => todoStore.newCategory),
    newTask: computed(() => todoStore.newTask),
    addCategory: todoStore.addCategory,
    addTask: todoStore.addTask,
    removeCategory: todoStore.removeCategory,
    editTask: todoStore.editTask,
    saveEdit: todoStore.saveEdit,
    removeTask: todoStore.removeTask,
    TaskStatus,
  };
}
