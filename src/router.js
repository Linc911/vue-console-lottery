import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './views/NotFound'

import TheLogin from './views/login/TheLogin'
import LoginByUsername from './views/login/LoginByUsername'
import LoginByPhone from './views/login/LoginByPhone'

import TheHome from './views/TheHome'

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
      component: TheHome
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
