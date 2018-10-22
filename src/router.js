import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './views/NotFound'

import TheHome from './views/TheHome'
import HomeIndex from './views/HomeIndex'

import TheLogin from './views/login/TheLogin'
import LoginByUsername from './views/login/LoginByUsername'
import LoginByPhone from './views/login/LoginByPhone'

import UserUpdateInfo from './views/user/individual/UserUpdateInfo'
import UserUpdateAvatar from './views/user/individual/UserUpdateAvatar'
import UserUpdatePhone from './views/user/individual/UserUpdatePhone'

import UsersList from './views/user/all/UsersList'
import UserBets from './views/user/all/UserBets'
import UserBetsStatistics from './views/user/all/UserBetsStatistics'
import UserRechargeLogs from './views/user/all/UserRechargeLogs'
import UserAccountDeposit from './views/user/all/UserAccountDeposit'
import UserHttpLogs from './views/user/all/UserHttpLogs'

import SystemRolesList from './views/system/SystemRolesList'
import SystemRoleCreate from './views/system/SystemRoleCreate'
import SystemRoleUpdate from './views/system/SystemRoleUpdate'

Vue.use(Router)

const router = new Router({
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
    // 主页
    {
      name: 'home',
      path: '/index',
      redirect: '/home',
      component: TheHome,
      children: [
        {
          path: '/home',
          component: HomeIndex,
          meta: { title: '系统首页' }
        },
        // 登录用户模块
        {
          path: '/user/update/info',
          component: UserUpdateInfo,
          meta: { title: '修改登录用户信息' }
        },
        {
          path: '/user/update/avatar',
          component: UserUpdateAvatar,
          meta: { title: '上传登录用户头像' }
        },
        {
          path: '/user/update/phone',
          component: UserUpdatePhone,
          meta: { title: '修改登录用户绑定手机' }
        },
        // 全部用户信息模块
        {
          path: '/users/list',
          component: UsersList,
          meta: { title: '全部会员列表' }
        },
        {
          path: '/users/:id/bets',
          component: UserBets,
          meta: { title: '会员个人注单列表' }
        },
        {
          path: '/users/:id/betsStatistics',
          component: UserBetsStatistics,
          meta: { title: '投注历史统计' }
        },
        {
          path: '/users/:id/rechargeLogs',
          component: UserRechargeLogs,
          meta: { title: '会员个人充值记录' }
        },
        {
          path: '/users/:id/depositStatistics',
          component: UserAccountDeposit,
          meta: { title: '存款历史统计' }
        },
        {
          path: '/users/:id/httpLogs',
          component: UserHttpLogs,
          meta: { title: '会员个人HTTP请求日志列表' }
        },
        /* 系统管理 */
        // 系统管理 - 角色模块
        {
          path: '/system/roles',
          component: SystemRolesList,
          meta: { title: '角色列表' }
        },
        {
          path: '/system/role/create',
          component: SystemRoleCreate,
          meta: { title: '创建新角色' }
        },
        {
          path: '/system/role/:id/update',
          component: SystemRoleUpdate,
          meta: { title: '修改角色信息' }
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

// 路由配置
router.beforeEach((to, from, next) => {
  // 每次跳转路由，修改页签标题
  document.title = to.meta.title

  const tokenExisted = !!localStorage.getItem('access_token')

  if (to.path === '/login/username' || to.path === '/login/phone') {
    // 当访问的地址是登录模块且access_token存在时
    // 用户必须通过点击退出登录，才能跳转到登记模块界面，否则默认跳转到主页面
    if (tokenExisted) {
      next('/home')
    } else {
      next()
    }
  } else {
    // 当访问的地址不是登录模块且access_token不存在时
    // 用户无法访问内部页面，默认跳转到用户账号登录页面
    if (tokenExisted) {
      next()
    } else {
      next('/login/username')
    }
  }
})

export default router
