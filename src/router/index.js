import Vue from 'vue'
import VueRouter from 'vue-router'

import { getToken } from '@/utils/storage'

// 导入异步组件
const register = () => import('@/views/register.vue')
const login = () => import('@/views/login.vue')
const detail = () => import('@/views/detail.vue')
const layout = () => import('@/views/layout.vue')
const article = () => import('@/views/article.vue')
const collect = () => import('@/views/collect.vue')
const like = () => import('@/views/like.vue')
const user = () => import('@/views/user.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/detail/:id',
    component: detail
  },
  {
    path: '/layout',
    component: layout,
    children: [
      {
        path: '/',
        redirect: '/article'
      },
      {
        path: '/article',
        component: article
      },
      {
        path: '/collect',
        component: collect
      },
      {
        path: '/like',
        component: like
      },
      {
        path: '/user',
        component: user
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路由导航守卫
const arr = ['/login', '/register']
router.beforeEach((to, from, next) => {
  if (getToken() || arr.includes(to.path)) {
    next()
  } else {
    next('/login')
  }
})

export default router
