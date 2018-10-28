import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './views/NotFound'

import HomeLayout from './views/HomeLayout'
import HomePage from './views/HomePage'

import LoginLayout from './views/login/LoginLayout'
import LoginUsername from './views/login/LoginUsername'
import LoginPhone from './views/login/LoginPhone'

import UserActive from './views/useractive/UserActive'
import UserActiveInfoUpdate from './views/useractive/UserActiveInfoUpdate'
import UserActiveAvatarUpdate from './views/useractive/UserActiveAvatarUpdate'
import UserActivePhoneUpdate from './views/useractive/UserActivePhoneUpdate'

import UsersList from './views/user/all/UsersList'
import UserBets from './views/user/all/UserBets'
import UserBetsStatistics from './views/user/all/UserBetsStatistics'
import UserRechargeLogs from './views/user/all/UserRechargeLogs'
import UserAccountDeposit from './views/user/all/UserAccountDeposit'
import UserHttpLogs from './views/user/all/UserHttpLogs'
import UsersLogs from './views/user/UsersLogs'
import UsersGroup from './views/user/UsersGroup'
import UsersGroupCreate from './views/user/UsersGroupCreate'
import UsersGroupUpdate from './views/user/UsersGroupUpdate'
import UsersAccountCheck from './views/user/UsersAccountCheck'

import SystemMenuList from './views/system/SystemMenuList'
import SystemMenuItemCreate from './views/system/SystemMenuItemCreate'
import SystemMenuItemUpdate from './views/system/SystemMenuItemUpdate'
import SystemRolesList from './views/system/SystemRolesList'
import SystemRoleCreate from './views/system/SystemRoleCreate'
import SystemRoleUpdate from './views/system/SystemRoleUpdate'
import SystemPermissionsList from './views/system/SystemPermissionsList'
import SystemPermissionCreate from './views/system/SystemPermissionCreate'
import SystemPermissionUpdate from './views/system/SystemPermissionUpdate'

import AdminUsers from './views/admin/AdminUsers'
import AdminUserCreate from './views/admin/AdminUserCreate'
import AdminUserUpdate from './views/admin/AdminUserUpdate'

import LotteryManage from './views/lottery/LotteryManage'
// import LotteryOdds from './views/lottery/LotteryOdds'
import LotteryOddsEleven from './views/lottery/LotteryOddsEleven'
import LotteryOddsFast3 from './views/lottery/LotteryOddsFast3'
import LotteryResultsEleven from './views/lottery/LotteryResultsEleven'
import LotteryResultsFast3 from './views/lottery/LotteryResultsFast3'

import GamesList from './views/others/GamesList'
import GamePreview from './views/others/GamePreview'
import GameUpdate from './views/others/GameUpdate'

import ValidationCodeLogs from './views/others/ValidationCodeLogs'

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
      name: 'LoginLayout',
      path: '/login',
      redirect: '/login/username',
      component: LoginLayout,
      children: [
        {
          name: 'LoginUsername',
          path: 'username',
          component: LoginUsername,
          meta: { title: '账号登录', keepAlive: true }
        },
        {
          name: 'LoginPhone',
          path: 'phone',
          component: LoginPhone,
          meta: { title: '手机登录', keeAlive: true }
        }
      ]
    },
    // 主页
    {
      name: 'HomeLayout',
      path: '/homelayout',
      redirect: '/home',
      component: HomeLayout,
      children: [
        {
          name: 'HomePage',
          path: '/home',
          component: HomePage,
          meta: { title: '系统首页' }
        },
        /* 登录用户模块 */
        {
          name: 'UserActive',
          path: '/useractive',
          redirect: '/useractive/info/update',
          component: UserActive,
          children: [
            {
              name: 'UserActiveInfoUpdate',
              path: 'info/update',
              component: UserActiveInfoUpdate,
              meta: { title: '修改登录用户信息', keepAlive: true }
            },
            {
              name: 'UserActiveAvatarUpdate',
              path: 'avatar/update',
              component: UserActiveAvatarUpdate,
              meta: { title: '上传登录用户头像', keepAlive: true }
            },
            {
              name: 'UserActivePhoneUpdate',
              path: 'phone/update',
              component: UserActivePhoneUpdate,
              meta: { title: '修改登录用户绑定手机', keepAlive: true }
            }
          ]
        },
        /* 会员管理模块 */
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
        // 会员日志
        {
          name: 'UsersLogs',
          path: '/users/logs',
          component: UsersLogs,
          meta: { title: '全部会员日志记录' }
        },
        // 会员分组
        {
          name: 'usersGroup',
          path: '/users/group',
          component: UsersGroup,
          meta: { title: '会员分组列表' }
        },
        {
          name: 'usersGroupCreate',
          path: '/users/group/:id',
          component: UsersGroupCreate,
          meta: { title: '单个会员分组详情' }
        },
        {
          name: 'usersGroupUpdate',
          path: '/users/group/:id/update',
          component: UsersGroupUpdate,
          meta: { title: '修改单个会员分组' }
        },
        // 会员账户核查
        {
          name: 'UsersAccountCheck',
          path: '/users/account/check',
          component: UsersAccountCheck,
          meta: { title: '会员账户核查' }
        },
        /* 系统管理 */
        // 系统管理 - 侧边栏菜单模块
        {
          path: '/system/menu',
          component: SystemMenuList,
          meta: { title: '侧边栏菜单列表' }
        },
        {
          path: '/system/menu/create',
          component: SystemMenuItemCreate,
          meta: { title: '创建菜单新栏目' }
        },
        {
          path: '/system/menu/:id/update',
          component: SystemMenuItemUpdate,
          meta: { title: '修改菜单配置' }
        },
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
        },
        // 系统管理 - 权限模块
        {
          path: '/system/permissions',
          component: SystemPermissionsList,
          meta: { title: '权限列表' }
        },
        {
          path: '/system/permission/create',
          component: SystemPermissionCreate,
          meta: { title: '创建新权限' }
        },
        {
          path: '/system/permission/:id/update',
          component: SystemPermissionUpdate,
          meta: { title: '修改权限' }
        },
        /* 用户管理 */
        {
          path: '/admin/users',
          component: AdminUsers,
          meta: { title: '全部用户信息列表' }
        },
        {
          path: '/admin/user/create',
          component: AdminUserCreate,
          meta: { title: '创建新用户' }
        },
        {
          path: '/admin/user/:id/update',
          component: AdminUserUpdate,
          meta: { title: '修改用户信息' }
        },
        /* 彩票管理模块 */
        {
          name: 'LotteryManage',
          path: '/lottery',
          redirect: '/lottery/results/eleven/3',
          component: LotteryManage,
          children: [
            // 开奖结果
            {
              name: 'LotteryResultsEleven',
              path: 'results/eleven/:gameId',
              component: LotteryResultsEleven,
              meta: { title: '11选5开奖结果' }
            },
            {
              name: 'LotteryResultsFast3',
              path: 'results/fast3/:gameId',
              component: LotteryResultsFast3,
              meta: { title: '快3开奖结果' }
            },
            // 赔率设置
            {
              name: 'lotteryOddsEleven',
              path: '/lottery/odds/eleven/:gameId',
              component: LotteryOddsEleven,
              meta: { title: '11选5赔率设置', keepAlive: true }
            },
            {
              path: '/lottery/odds/fast3/:gameId',
              component: LotteryOddsFast3,
              meta: { title: '快3赔率设置', keepAlive: true }
            }
          ]
        },
        /* 游戏设置 */
        {
          path: '/games/list',
          component: GamesList,
          meta: { title: '游戏列表' }
        },
        {
          path: '/game/:id',
          component: GamePreview,
          meta: { title: '游戏配置详情' }
        },
        {
          path: '/game/:id/update',
          component: GameUpdate,
          meta: { title: '修改游戏配置' }
        },
        /* 短信验证码日志 */
        {
          path: '/validationCode/logs',
          component: ValidationCodeLogs,
          meta: { title: '短信验证码日志' }
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
