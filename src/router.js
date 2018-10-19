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

import VipInfoManage from './views/vip/VipInfoManage'
import VipsList from './views/vip/VipsList'
import VipBets from './views/vip/VipBets'
import VipChangedList from './views/vip/VipChangedList'

import SystemRoles from './views/system/SystemRoles'
import SystemRoleCreate from './views/system/SystemRoleCreate'

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
        },
        // 会员管理模块
        {
          path: '/vip/info/manage',
          component: VipInfoManage
        },
        {
          path: '/vip/list',
          component: VipsList,
          meta: { title: '会员信息管理 - 会员列表' }
        },
        {
          path: '/vip/:id/bets',
          component: VipBets,
          meta: { title: '会员信息管理 - 会员个人注单列表' }
        },
        {
          path: '/vip/:id/changedList',
          component: VipChangedList,
          meta: { title: '会员信息管理 - 会员个人充值列表' }
        },
        // 系统管理
        {
          path: '/system/role',
          component: SystemRoles,
          meta: { title: '系统设置 - 角色列表' }
        },
        {
          path: '/system/role/create',
          component: SystemRoleCreate,
          meta: { title: '系统设置 - 创建新角色' }
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
