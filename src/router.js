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

import UsersInfo from './views/user/info/UsersInfo'
import UsersList from './views/user/info/users-list'
import UserBets from './views/user/all/UserBets'
import UserBetsStatistics from './views/user/all/UserBetsStatistics'
import UserRechargeLogs from './views/user/all/UserRechargeLogs'
import UserAccountDeposit from './views/user/all/UserAccountDeposit'
import UserHttpLogs from './views/user/all/UserHttpLogs'
import UsersLogs from './views/user/UsersLogs'
import UsersAccountCheck from './views/user/UsersAccountCheck'
import UsersKeyInfo from './views/user/UsersKeyInfo'

/* 系统设置 */
// 菜单
import SystemMenuList from './views/system/SystemMenuList'
import SystemMenuItemCreate from './views/system/SystemMenuItemCreate'
import SystemMenuItemUpdate from './views/system/SystemMenuItemUpdate'
// 角色
import SystemRolesList from './views/system/SystemRolesList'
import SystemRoleCreate from './views/system/SystemRoleCreate'
import SystemRoleUpdate from './views/system/SystemRoleUpdate'
// 权限
import SystemPermissionsList from './views/system/SystemPermissionsList'
import SystemPermissionCreate from './views/system/SystemPermissionCreate'
import SystemPermissionUpdate from './views/system/SystemPermissionUpdate'
// 分组
import SystemGroup from './views/system/group/SystemGroup'
import SystemGroupList from './views/system/group/SystemGroupList'
import SystemGroupCreate from './views/system/group/SystemGroupCreate'
import SystemGroupUpdate from './views/system/group/SystemGroupUpdate'
// 用户
import SystemUsers from './views/system/user/SystemUsers'
import SystemUsersList from './views/system/user/SystemUsersList'
import SystemUserCreate from './views/system/user/SystemUserCreate'
import SystemUserUpdate from './views/system/user/SystemUserUpdate'
// 彩票
import SystemLottery from './views/system/lottery/SystemLottery'
import SystemLotteryList from './views/system/lottery/SystemLotteryList'
import SystemLotteryInfo from './views/system/lottery/SystemLotteryInfo'
import SystemLotteryUpdate from './views/system/lottery/SystemLotteryUpdate'

/* 彩票管理 */
import LotteryUsersInfo from './views/lottery/LotteryUsersInfo'
import LotteryManage from './views/lottery/LotteryManage'
import LotteryOddsEleven from './views/lottery/LotteryOddsEleven'
import LotteryOddsFast3 from './views/lottery/LotteryOddsFast3'
import LotteryResultsEleven from './views/lottery/LotteryResultsEleven'
import LotteryResultsFast3 from './views/lottery/LotteryResultsFast3'
import LotteryOpen from './views/lottery/LotteryOpen'
import LotteryStatistics from './views/lottery/LotteryStatistics'
import LotteryKillrate from './views/lottery/LotteryKillrate'
import LotteryWithdraw from './views/lottery/LotteryWithdraw'
import LotteryBets from './views/lottery/LotteryBets'

/* 财务管理 */
import FinanceManage from './views/finance/FinanceManage'
import FinanceBalanceChange from './views/finance/FinanceBalanceChange'
import FinanceDepositForm from './views/finance/FinanceDepositForm'
import FinanceDepositOnline from './views/finance/FinanceDepositOnline'
import FinanceWithdrawApply from './views/finance/FinanceWithdrawApply'
import FinanceUsersAssets from './views/finance/FinanceUsersAssets'
import FinanceLimitChange from './views/finance/FinanceLimitChange'
import FinanceBalanceSheet from './views/finance/FinanceBalanceSheet'

/* 代理管理 */
import AgentManage from './views/agent/AgentManage'
import AgentList from './views/agent/AgentList'
import AgentCreate from './views/agent/AgentCreate'
import AgentInvitationCode from './views/agent/AgentInvitationCode'
import AgentAchievementUsers from './views/agent/AgentAchievementUsers'
import AgentAchievementLinear from './views/agent/AgentAchievementLinear'
import AgentInterestGames from './views/agent/AgentInterestGames'
import AgentInterestDivision from './views/agent/AgentInterestDivision'
import AgentInterestUsersDivision from './views/agent/AgentInterestUsersDivision'

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
          meta: { title: '手机登录', keepAlive: true }
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
        // 会员信息
        {
          name: 'UserInfo',
          path: '/users/info',
          redirect: '/users/list',
          component: UsersInfo,
          children: [
            {
              name: 'UsersList',
              path: '/users/list',
              component: UsersList,
              meta: { title: '全部会员信息列表' }
            }
          ]
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
        // 会员账户核查
        {
          name: 'UsersAccountCheck',
          path: '/users/account/check',
          component: UsersAccountCheck,
          meta: { title: '会员账户核查' }
        },
        // 会员关键信息修改
        {
          name: 'UsersKeyInfo',
          path: '/users/keyinfo',
          component: UsersKeyInfo,
          meta: { title: '会员关键信息修改', keepAlive: true }
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
        // 系统管理 - 分组模块
        {
          name: 'SystemGroup',
          path: '/system/group',
          redirect: '/system/group/list',
          component: SystemGroup,
          children: [
            {
              name: 'SystemGroupList',
              path: 'list',
              component: SystemGroupList,
              meta: { title: '会员分组列表' }
            },
            {
              name: 'SystemGroupCreate',
              path: 'create',
              component: SystemGroupCreate,
              meta: { title: '创建会员新分组', keepAlive: true }
            },
            {
              name: 'SystemGroupUpdate',
              path: ':groupId/update',
              component: SystemGroupUpdate,
              meta: { title: '修改会员分组' }
            }
          ]
        },
        // 系统管理 - 用户模块
        {
          name: 'SystemUsers',
          path: '/system/users',
          redirect: '/system/users/list',
          component: SystemUsers,
          children: [
            {
              name: 'SystemUsersList',
              path: 'list',
              component: SystemUsersList,
              meta: { title: '全部用户信息列表' }
            },
            {
              name: 'SystemUserCreate',
              path: '/system/user/create',
              component: SystemUserCreate,
              meta: { title: '创建新用户', keepAlive: true }
            },
            {
              name: 'SystemUserUpdate',
              path: ':id/update',
              component: SystemUserUpdate,
              meta: { title: '修改用户信息' }
            }
          ]
        },
        // 系统管理 - 彩票设置模块
        {
          name: 'SystemLottery',
          path: '/system/lottery',
          redirect: '/system/lottery/list',
          component: SystemLottery,
          children: [
            {
              name: 'SystemLotteryList',
              path: 'list',
              component: SystemLotteryList,
              meta: { title: '彩票种类列表', keepAlive: true }
            },
            {
              name: 'SystemLotteryInfo',
              path: ':gameId',
              component: SystemLotteryInfo,
              meta: { title: '游戏配置详情' }
            },
            {
              name: 'SystemLotteryUpdate',
              path: ':gameId/update',
              component: SystemLotteryUpdate,
              meta: { title: '修改游戏配置' }
            }
          ]
        },
        /* 彩票管理模块 */
        // 彩票会员报表
        {
          name: 'LotteryUsersInfo',
          path: '/lottery/users/info',
          component: LotteryUsersInfo,
          meta: { title: '彩票会员报表', keepAlive: true }
        },
        {
          name: 'LotteryStatistics',
          path: '/lottery/statistics',
          component: LotteryStatistics,
          meta: { title: '彩票总报表', keepAlive: true }
        },
        {
          name: 'LotteryKillrate',
          path: '/lottery/killrate',
          component: LotteryKillrate,
          meta: { title: '彩票杀率配置', keepAlive: true }
        },
        {
          name: 'LotteryWithdraw',
          path: '/lottery/withdraw',
          component: LotteryWithdraw,
          meta: { title: '彩票未结撤单', keepAlive: true }
        },
        {
          name: 'LotteryBets',
          path: '/lottery/bets',
          component: LotteryBets,
          meta: { title: '彩票注单', keepAlive: true }
        },
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
            },
            // 彩票开盘
            {
              name: 'LotteryOpen',
              path: '/lottery/open/eleven/:gameId',
              component: LotteryOpen,
              meta: { title: '彩票开奖', keepAlive: true }
            }
          ]
        },
        /* 财务管理 */
        {
          name: 'FinanceManage',
          path: '/finance',
          redirect: '/finance/blalance/sheet',
          component: FinanceManage,
          children: [
            {
              name: 'FinanceBalanceChange',
              path: 'balance/change',
              component: FinanceBalanceChange,
              meta: { title: '加减款操作', keepAlive: true }
            },
            {
              name: 'FinanceDepositForm',
              path: 'deposit/form',
              component: FinanceDepositForm,
              meta: { title: '填单存款管理', keepAlive: true }
            },
            {
              name: 'FinanceDepositOnline',
              path: 'deposit/online',
              component: FinanceDepositOnline,
              meta: { title: '在线存款管理', keepAlive: true }
            },
            {
              name: 'FinanceWithdrawApply',
              path: 'withdraw/apply',
              component: FinanceWithdrawApply,
              meta: { title: '提款申请管理', keepAlive: true }
            },
            {
              name: 'FinanceUsersAssets',
              path: 'users/assets',
              component: FinanceUsersAssets,
              meta: { title: '会员资金管理', keepAlive: true }
            },
            {
              name: 'FinanceLimitChange',
              path: 'limit/change',
              component: FinanceLimitChange,
              meta: { title: '额度转换管理', keepAlive: true }
            },
            {
              name: 'FinanceBalanceSheet',
              path: 'balance/sheet',
              component: FinanceBalanceSheet,
              meta: { title: '会员财务报表', keepAlive: true }
            }
          ]
        },
        /* 代理管理 */
        {
          name: 'AgentManage',
          path: '/agent',
          redirect: '/agent/list',
          component: AgentManage,
          children: [
            {
              name: 'AgentList',
              path: 'list',
              component: AgentList,
              meta: { title: '代理会员列表' }
            },
            {
              name: 'AgentCreate',
              path: 'create',
              component: AgentCreate,
              meta: { title: '创建代理会员' }
            },
            {
              name: 'AgentInvitationCode',
              path: 'invitationcode',
              component: AgentInvitationCode,
              meta: { title: '邀请号码管理' }
            },
            {
              name: 'AgentAchievementUsers',
              path: 'achievement/users',
              component: AgentAchievementUsers,
              meta: { title: '代理个人业绩' }
            },
            {
              name: 'AgentAchievementLinear',
              path: 'achievement/linear',
              component: AgentAchievementLinear,
              meta: { title: '代理线条业绩' }
            },
            {
              name: 'AgentInterestGames',
              path: 'interest/games',
              component: AgentInterestGames,
              meta: { title: '游戏分润基数' }
            },
            {
              name: 'AgentInterestDivision',
              path: 'interest/division',
              component: AgentInterestDivision,
              meta: { title: '代理一键分润' }
            },
            {
              name: 'AgentInterestUsersDivision',
              path: 'interest/usersdivision',
              component: AgentInterestUsersDivision,
              meta: { title: '会员一键分润' }
            }
          ]
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
