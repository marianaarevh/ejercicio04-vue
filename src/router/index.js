import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArticleListView from '../views/ArticleListView.vue';
import ArticleDetailsView from '../views/ArticleDetailsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/articles', component: ArticleListView },
  {
    path: '/articles/:id',
    name: 'articleDetails',
    component: ArticleDetailsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
