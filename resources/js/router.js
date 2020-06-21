import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('./views/Posts.vue')
  },
]

const router = new Router({
  mode: 'history',
  routes: routes,
  linkActiveClass: 'active'
});
export default router;