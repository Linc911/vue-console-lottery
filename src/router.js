import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './views/NotFound'

import TheHome from './views/TheHome'
import HomeIndex from './views/HomeIndex'

import TheLogin from './views/login/TheLogin'
import LoginByUsername from './views/login/LoginByUsername'
import LoginByPhone from './views/login/LoginByPhone'

import UserInfo from './views/user/UserInfo'
import UserAvatar from './views/user/UserAvatar'
import UserPhone from './views/user/UserPhone'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '',
      redirect: '/login/username'
    },
    // 登录模块
    {
      path: '/login',
      name: 'login',
      redirect: '/login/username',
      component: TheLogin,
      children: [
        {
          path: 'username',
          component: LoginByUsername
        },
        {
          path: 'phone',
          component: LoginByPhone
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/index',
      component: TheHome,
      children: [
        {
          path: '/home/index',
          component: HomeIndex
        },
        // 用户中心设置模块
        {
          path: '/user/info',
          component: UserInfo
        },
        {
          path: '/user/avatar',
          component: UserAvatar
        },
        {
          path: '/user/phone',
          component: UserPhone
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
