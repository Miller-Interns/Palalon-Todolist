<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todoStore';
import TaskItem from '@/components/task-item.vue';

const todoStore = useTodoStore();
const { categories, newCategory, newTask } = storeToRefs(todoStore);
const { removeCategory, addCategory, addTask } = todoStore;
</script>

<template>
  <div class="todo-container">
    <!-- Title -->
    <h1>Todo List</h1>

    <!-- Add Category Section -->
    <div class="add-category">
      <input v-model="newCategory" placeholder="New category" />
      <button class="add-btn" @click="addCategory">Add Category</button>
    </div>

    <div v-for="category in categories" :key="category.name" class="category">
      <h2>{{ category.name }}</h2>

      <ul class="task-list">
        <TaskItem
          v-for="(task, index) in category.tasks"
          :key="index"
          :task="task"
          :taskIndex="index"
          :categoryName="category.name"
        />
      </ul>

      <!-- Task Input & Buttons in One Row -->
      <div class="task-actions">
        <input v-model="newTask[category.name]" placeholder="New task" />
        <button class="add-btn" @click="addTask(category.name)">
          Add Task
        </button>
        <button class="remove-btn" @click="removeCategory(category.name)">
          Remove Category
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  font-family: 'Lexend Giga', serif;
  text-align: center;
  padding: 30px;
  max-width: 800px;
  margin: auto;
}

h1 {
  font-family: 'Lexend Giga', serif;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.task-actions {
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: flex-start;
  max-width: 500px;
  margin: auto;
}

.task-actions input {
  width: 200px;
  flex-shrink: 0;
}

.add-category {
  font-family: 'Lexend Giga', serif;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  max-width: 600px;
  margin: auto;
}

input {
  font-family: 'Lexend Giga', serif;
  padding: 5px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  flex: 1;
}

.add-btn {
  font-family: 'Lexend Giga', serif;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
}

.add-btn:hover {
  background-color: #218838;
}

.remove-btn {
  font-family: 'Lexend Giga', serif;
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
}

.remove-btn:hover {
  background-color: #c82333;
}

.category {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin: 15px auto;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 700px;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 15px;
  color: #333;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.task-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 600px;
  margin: auto;
}

.task-actions input {
  flex-grow: 1;
}
</style>
