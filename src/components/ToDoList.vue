<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todoStore';
import { TaskStatus } from '@/enums/TaskStatus';

const todoStore = useTodoStore();

const { categories, newCategory, newTask } = storeToRefs(todoStore);

const removeCategory = todoStore.removeCategory;
const addCategory = todoStore.addCategory;
const addTask = todoStore.addTask;
const editTask = todoStore.editTask;
const saveEdit = todoStore.saveEdit;
const removeTask = todoStore.removeTask;
</script>

<template>
  <div class="todo-container">
    <h1 class="title">To-Do List</h1>

    <div class="input-wrapper">
      <div class="input-container">
        <input
          v-model="newCategory"
          placeholder="Add a New Category"
          class="category-input"
        />
        <button @click="addCategory" class="add-btn">Add Category</button>
      </div>
    </div>

    <div
      v-for="category in categories"
      :key="category.name"
      class="category-card"
    >
      <h2 class="category-title">
        {{ category.name }}
        <button @click="removeCategory(category.name)" class="delete-btn">
          Delete Category
        </button>
      </h2>

      <div class="input-wrapper">
        <div class="input-container">
          <input
            v-model="newTask[category.name]"
            placeholder="Add a New Task"
            class="task-input"
          />
          <button @click="addTask(category.name)" class="add-btn">
            Add Task
          </button>
        </div>
      </div>

      <ul v-if="category.tasks" class="task-list">
        <li
          v-for="(task, index) in category.tasks"
          :key="index"
          class="task-item"
        >
          <input type="checkbox" v-model="task.completed" class="checkbox" />
          <span
            v-if="task.status !== TaskStatus.Editing"
            :class="{ completed: task.completed }"
          >
            {{ task.text }}
          </span>
          <input
            v-else
            v-model="task.text"
            class="edit-input"
            @keyup.enter="saveEdit(category.name, index)"
          />
          <div class="task-buttons">
            <button
              v-if="task.status !== TaskStatus.Editing"
              @click="editTask(category.name, index)"
              class="edit-btn"
            >
              Edit
            </button>
            <button
              v-if="task.status === TaskStatus.Editing"
              @click="saveEdit(category.name, index)"
              class="done-btn"
            >
              Done
            </button>
            <button
              @click="removeTask(category.name, index)"
              class="delete-btn"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  font-family: 'Lexend Giga', serif;
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px black;
  text-align: center;
}

.title {
  font-family: 'Lexend Giga', serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.input-wrapper {
  background: #f1f1f1;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.input-container {
  display: flex;
  gap: 10px;
}

.task-input {
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 2px solid white;
  border-radius: 10px;
  outline: none;
}

.add-btn {
  font-family: 'Lexend Giga', serif;
  padding: 8px 12px;
  font-size: 14px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.add-btn:hover {
  background-color: darkgreen;
}

.category-card {
  font-family: 'Poppins', sans-serif;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
  box-shadow: 0 2px 4px black;
}

.category-title {
  font-family: 'Lexend Giga', serif;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 10px;
  box-shadow: 0 2px 4px black;
}

.checkbox {
  transform: scale(1.2);
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.task-buttons {
  display: flex;
  gap: 5px;
}

.edit-btn,
.done-btn,
.delete-btn {
  font-family: 'Lexend Giga', serif;
  padding: 6px 10px;
  font-size: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.edit-btn {
  background-color: #ffd700;
  color: black;
}

.delete-btn {
  background-color: #ff6347;
  color: white;
}

.delete-btn:hover {
  background-color: #ff4500;
}
</style>
