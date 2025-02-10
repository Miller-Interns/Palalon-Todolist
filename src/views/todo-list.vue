<script setup lang="ts">
import ToDoList from '@/components/ToDoList.vue';
</script>

<template>
  <div class="app-container">
    <div class="todo-container">
      <ToDoList />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.navbar {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.nav-link {
  text-decoration: none;
  padding: 10px 15px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  color: black;
  font-weight: bold;
  transition: 0.3s;
}

.nav-link:hover {
  background-color: black;
  color: white;
}

.todo-container {
  margin-top: 50px;
  width: 100%;
  max-width: 400px;
  padding: 5px 10px;
  color: black;
}
</style>
