import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import todolist from '@/views/todo-list.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/todolist',
    name: 'TodoList',
    component: todolist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
