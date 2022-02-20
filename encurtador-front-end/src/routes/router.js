import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MyUrlsPage from '../pages/MyUrlsPage';
import RankingUrlPage from '../pages/RankingUrlPage'

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
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
  {
    path: '/myurls',
    name: 'MyUrls',
    component: MyUrlsPage,
  },
  {
    path: '/rankingurl',
    name: 'RankingUrl',
    component: RankingUrlPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
