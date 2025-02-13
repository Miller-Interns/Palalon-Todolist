<script setup lang="ts">
import { RouteName } from '@/enums/RouteName';
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar">
    <RouterLink :to="{ name: RouteName.HOME }">Home</RouterLink>
    <RouterLink :to="{ name: RouteName.TODOLISTVIEW }">Go to App</RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  font-family: 'Lexend Giga', serif;
  font-optical-sizing: auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: black;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 12px;
  border: 2px solid white;
  border-radius: 5px;
}

.navbar a:hover {
  background-color: white;
  color: black;
}
</style>
