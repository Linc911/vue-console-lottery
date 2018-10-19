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
import UserBetsStatistics from './views/user/UserBetsStatistics'
import VipChangedList from './views/vip/VipChangedList'
import UserAccountDeposit from './views/user/UserAccountDeposit'
import VipLogsList from './views/vip/VipLogsList'

import SystemRolesList from './views/system/SystemRolesList'
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
          component: LoginByUsername,
          meta: { title: '账号登录' }
        },
        {
          path: 'phone',
          component: LoginByPhone,
          meta: { title: '手机登录' }
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
          component: HomeIndex,
          meta: { title: '系统首页' }
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
          meta: { title: '会员列表' }
        },
        {
          path: '/vip/:id/bets',
          component: VipBets,
          meta: { title: '会员个人注单列表' }
        },
        {
          path: '/user/:id/betsStatistics',
          component: UserBetsStatistics,
          meta: { title: '投注历史统计' }
        },
        {
          path: '/vip/:id/changedList',
          component: VipChangedList,
          meta: { title: '会员个人充值列表' }
        },
        {
          path: '/user/:id/depositStatistics',
          component: UserAccountDeposit,
          meta: { title: '存款历史统计' }
        },
        {
          path: '/user/:id/logs',
          component: VipLogsList,
          meta: { title: '会员个人日志列表' }
        },
        // 系统管理
        {
          path: '/system/roles',
          component: SystemRolesList,
          meta: { title: '角色列表' }
        },
        {
          path: '/system/role/create',
          component: SystemRoleCreate,
          meta: { title: '创建新角色' }
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
