<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore';

// Enum for Task Status
enum TaskStatus {
  Pending = 'pending',
  Completed = 'completed',
  Editing = 'editing',
}

const todoStore = useTodoStore();
</script>

<template>
  <div class="todo-container">
    <h1>To-Do List</h1>
    <div class="input-container">
      <input
        v-model="todoStore.newCategory"
        placeholder="Add a New Category"
        class="task-input"
      />
      <button @click="todoStore.addCategory" class="add-btn">
        Add Category
      </button>
    </div>

    <div
      v-for="(tasks, category) in todoStore.categories"
      :key="category"
      class="category-card"
    >
      <h2>
        {{ category }}
        <button @click="todoStore.removeCategory(category)" class="delete-btn">
          Delete Category
        </button>
      </h2>

      <div class="input-container">
        <input
          v-model="todoStore.newTask[category]"
          placeholder="Add a New Task"
          class="task-input"
        />
        <button @click="todoStore.addTask(category)" class="add-btn">
          Add Task
        </button>
      </div>

      <ul v-if="tasks.length" class="task-list">
        <li v-for="(task, index) in tasks" :key="index" class="task-item">
          <input type="checkbox" v-model="task.completed" class="checkbox" />
          <span
            v-if="task.status !== TaskStatus.Editing"
            :class="{ completed: task.completed }"
            >{{ task.text }}</span
          >
          <input
            v-else
            v-model="task.text"
            class="edit-input"
            @keyup.enter="todoStore.saveEdit(category, index)"
          />

          <div class="task-buttons">
            <button
              v-if="task.status !== TaskStatus.Editing"
              @click="todoStore.editTask(category, index)"
              class="edit-btn"
            >
              Edit
            </button>
            <button
              v-if="task.status === TaskStatus.Editing"
              @click="todoStore.saveEdit(category, index)"
              class="done-btn"
            >
              Done
            </button>
            <button
              @click="todoStore.removeTask(category, index)"
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

.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
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
  font-size: 16px;
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
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
  box-shadow: 0 2px 4px black;
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
  margin-left: 10px;
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
  display: inline-block;
  vertical-align: middle;
  font-family: 'Lexend Giga', serif;
  padding: 6px 10px;
  font-size: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.edit-btn {
  background-color: #ffd700;
  color: black;
}

.edit-btn:hover {
  background-color: #ffc107;
}

.done-btn {
  background-color: #28a745;
  color: white;
}

.done-btn:hover {
  background-color: #218838;
}

.delete-btn {
  font-family: 'Lexend Giga', serif;
  background-color: #ff6347;
  color: white;
}

.delete-btn:hover {
  background-color: #ff4500;
}
</style>
