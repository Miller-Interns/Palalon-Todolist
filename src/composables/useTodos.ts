import { ref, computed } from 'vue';
import { TaskStatus } from '@/enums/TaskStatus';
import type { Category } from '@/types/category';
import type { NewTaskMap } from '@/types/new-task-map';

export function useTodos() {
  const categories = ref<Category[]>([]);
  const newCategory = ref<string>('');
  const newTaskMap = ref<NewTaskMap>({});

  const addCategory = () => {
    if (newCategory.value.trim()) {
      categories.value.push({ name: newCategory.value, tasks: [] });
      newCategory.value = '';
    }
  };

  const removeCategory = (categoryName: string) => {
    categories.value = categories.value.filter(
      (category) => category.name !== categoryName
    );
    delete newTaskMap.value[categoryName];
  };

  const addTask = (categoryName: string) => {
    if (newTaskMap.value[categoryName]?.trim()) {
      const category = categories.value.find((c) => c.name === categoryName);
      if (category) {
        category.tasks.push({
          text: newTaskMap.value[categoryName],
          completed: false,
          status: TaskStatus.Pending,
        });
        newTaskMap.value[categoryName] = '';
      }
    }
  };

  const removeTask = (categoryName: string, taskIndex: number) => {
    const category = categories.value.find((c) => c.name === categoryName);
    if (category) {
      category.tasks.splice(taskIndex, 1);
    }
  };

  const editTask = (
    categoryName: string,
    taskIndex: number,
    newText: string
  ) => {
    const category = categories.value.find((c) => c.name === categoryName);
    if (category && newText.trim()) {
      category.tasks[taskIndex].text = newText;
    }
  };

  return {
    categories: computed(() => categories.value),
    newCategory,
    newTaskMap,
    addCategory,
    addTask,
    removeCategory,
    editTask,
    removeTask,
    TaskStatus,
  };
}
