<template>
  <div class="home-container">
    <div class="content">
      <h1>Carlo Joseph S. Palalon</h1>
      <p>Date Started: January 28, 2025</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
* {
  font-family: 'Lexend Giga', serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: bold;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: black;
}

.navbar {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.navlink {
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
</style>
