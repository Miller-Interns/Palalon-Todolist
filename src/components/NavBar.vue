<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/todolist">Go to App</router-link>
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
