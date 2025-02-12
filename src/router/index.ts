import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ToDoList from '@/views/todo-list.vue';
import { RouteName } from '@/enums/RouteName';

const routes = [
  {
    path: '/',
    name: RouteName.HOME,
    component: HomeView,
  },
  {
    path: '/todolist',
    name: RouteName.TODOLISTVIEW,
    component: ToDoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
