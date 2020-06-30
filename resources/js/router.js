import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Notices from './views/Notices.vue';

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
        component: Notices,
        // children: [
        //   {
        //     path: 'create',
        //     name: 'notice-create',
        //     component: () => import('./views/NoticeForm.vue'),
        //   }
        // ],
      },
      {
        path:'notices/create',
        name: 'notice-create',
        component: () => import('./views/NoticeForm.vue'),
      },
      {
        path:'notices/:notice_id',
        name: 'notice-edit',
        component: () => import('./views/NoticeForm.vue'),
      },
    ],
  }
]

const router = new Router({
  mode: 'history',
  routes: routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
});
export default router;