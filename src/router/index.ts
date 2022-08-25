import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "layout-home" */ '@/views/home/index.vue'),
      },
      {
        path: '/analysis',
        name: 'analysis',
        component: () => import(/* webpackChunkName: "analysis" */ '@/views/analysis/index.vue'),
      },
      {
        path: '/datasync',
        name: 'datasync',
        component: () => import(/* webpackChunkName: "datasync" */ '@/views/datasync/index.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router