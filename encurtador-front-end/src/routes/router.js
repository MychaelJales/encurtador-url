import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
