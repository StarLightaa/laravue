import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const routes = [
  {
    path:'/',
    component: Home,
    children: [
      {
          path:'',
          name:'dashboard',
          component: () => import('./views/Dashboard.vue')
      },
      {
          path:'posts',
          name: 'posts',
          component: () => import('./views/Posts.vue')
      },
      {
        path:'notices',
        name: 'notices',
        component: () => import('./views/Notices.vue')
      },
    ],
  }
]

const router = new Router({
  mode: 'history',
  routes: routes,
  linkActiveClass: 'active'
});
export default router;