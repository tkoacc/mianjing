import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import register from '@/views/register.vue'
import login from '@/views/login.vue'
import detail from '@/views/detail.vue'
import layout from '@/views/layout.vue'
import article from '@/views/article.vue'
import collect from '@/views/collect.vue'
import like from '@/views/like.vue'
import user from '@/views/user.vue'

import { getToken } from '@/utils/storage'

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
    path: '/detail',
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
  console.log(to)
  console.log(from)
})

export default router
