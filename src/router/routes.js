/* ========================================== 登   录 ============================================= */

import LoginLayout from '@/views/login/LoginLayout'
import LoginUsername from '@/views/login/LoginUsername'
const LoginPhone = resolve => require(['@/views/login/LoginPhone'], resolve)

/* ========================================== 主   页 ============================================ */

const HomeLayout = resolve => require(['@/views/HomeLayout'], resolve)
const HomePage = resolve => require(['@/views/HomePage'], resolve)

/* ========================================== 用户信息 ============================================ */

const UserActive = resolve => require(['@/views/useractive/UserActive'], resolve)
const UserActiveInfoUpdate = resolve => require(['@/views/useractive/UserActiveInfoUpdate'], resolve)
const UserActiveAvatarUpdate = resolve => require(['@/views/useractive/UserActiveAvatarUpdate'], resolve)
const UserActivePhoneUpdate = resolve => require(['@/views/useractive/UserActivePhoneUpdate'], resolve)

/* ========================================== 系统设置 ============================================ */

const SystemMenuSetting = resolve => require(['@/views/system/menu-setting'], resolve) // 菜单
const SystemRolesSetting = resolve => require(['@/views/system/roles-setting'], resolve) // 角色
const SystemPermissionsSetting = resolve => require(['@/views/system/permissions-setting'], resolve) // 权限
const SystemGroupSetting = resolve => require(['@/views/system/group-setting'], resolve) // 分组
const SystemUsersSetting = resolve => require(['@/views/system/users-setting'], resolve) // 用户
const SystemLotterySetting = resolve => require(['@/views/system/lottery-setting'], resolve) // 彩票
const SystemBanksSetting = resolve => require(['@/views/system/banks-setting'], resolve) // 银行
const SystemAreaSetting = resolve => require(['@/views/system/area-setting'], resolve) // 地区

/* ========================================== 会员管理 ============================================ */

const UsersManage = resolve => require(['@/views/users/UsersManage'], resolve)
const UsersList = resolve => require(['@/views/users/users-list'], resolve)
const UserBets = resolve => require(['@/views/users/user-bets'], resolve)
const UserBetsStatistics = resolve => require(['@/views/users/UserBetsStatistics'], resolve)
const UserRechargeLogs = resolve => require(['@/views/users/UserRechargeLogs'], resolve)
const UserHttpLogs = resolve => require(['@/views/users/UserHttpLogs'], resolve)
const UsersLogs = resolve => require(['@/views/users/UsersLogs'], resolve)
const UsersAccountCheck = resolve => require(['@/views/users/account-check'], resolve)
const UsersKeyword = resolve => require(['@/views/users/UsersKeyword'], resolve)

/* ========================================== 彩票管理 ============================================ */

const LotteryManage = resolve => require(['@/views/lottery/LotteryManage'], resolve)
const LotteryOpen = resolve => require(['@/views/lottery/lottery-open'], resolve)
const LotteryResults = resolve => require(['@/views/lottery/lottery-results'], resolve)
const LotteryOdds = resolve => require(['@/views/lottery/lottery-odds'], resolve)
const LotteryBets = resolve => require(['@/views/lottery/lottery-bets'], resolve)
const LotteryBillCancel = resolve => require(['@/views/lottery/LotteryBillCancel'], resolve)
const LotteryStatisticsUsers = resolve => require(['@/views/lottery/statistics-users'], resolve)
const LotteryStatisticsBets = resolve => require(['@/views/lottery/statistics-bets'], resolve)
const LotteryStatistics = resolve => require(['@/views/lottery/lottery-statistics'], resolve)
const LotteryKillrate = resolve => require(['@/views/lottery/LotteryKillrate'], resolve)
const LotteryCheckout = resolve => require(['@/views/lottery/LotteryCheckout'], resolve)

/* ========================================== 财务管理 ============================================ */

const FinanceManage = resolve => require(['@/views/finance/FinanceManage'], resolve)
const FinanceBalanceManipulation = resolve => require(['@/views/finance/balance-manipulation'], resolve)
const FinanceDepositForm = resolve => require(['@/views/finance/deposit-form'], resolve)
const FinanceDepositOnline = resolve => require(['@/views/finance/deposit-online'], resolve)
const FinanceWithdrawApply = resolve => require(['@/views/finance/withdraw-apply'], resolve)
const FinanceLimitationTransfer = resolve => require(['@/views/finance/limitation-transfer'], resolve)
const FinanceDepositWithdrawList = resolve => require(['@/views/finance/deposit-withdraw'], resolve)
const FinanceUserAsset = resolve => require(['@/views/finance/user-asset'], resolve)
const FinanceBalanceSheet = resolve => require(['@/views/finance/balance-sheet'], resolve)
const FinanceStatistics = resolve => require(['@/views/finance/FinanceStatistics'], resolve)

// 常规配置
const FinanceSetting = resolve => require(['@/views/finance/setting/FinanceSetting'], resolve)
const FinanceSettingList = resolve => require(['@/views/finance/setting/FinanceSettingList'], resolve)
const FinanceSettingLoan = resolve => require(['@/views/finance/setting/loan'], resolve)

/* ========================================== 返水管理 ============================================ */

const RebateManage = resolve => require(['@/views/rebate/RebateManage'], resolve)
const RebateList = resolve => require(['@/views/rebate/rebate-list'], resolve)
const RebateSetting = resolve => require(['@/views/rebate/rebate-setting'], resolve)

/* ========================================== 收款出款 ============================================ */

const TransactionManage = resolve => require(['@/views/transaction/TransactionManage'], resolve)
const TransactionPaymentType = resolve => require(['@/views/transaction/payment-type'], resolve)
const TransactionPaymentPort = resolve => require(['@/views/transaction/payment-port'], resolve)
const TransactionPaymentLine = resolve => require(['@/views/transaction/payment-line'], resolve)
const TransactionRemittanceUser = resolve => require(['@/views/transaction/remittance-user'], resolve)
const TransactionWithdrawType = resolve => require(['@/views/transaction/withdraw-type'], resolve)
const TransactionWithdrawAccount = resolve => require(['@/views/transaction/withdraw-account'], resolve)
const TransactionRemittanceShortcut = resolve => require(['@/views/transaction/remittance-shortcut'], resolve)

/* ========================================== 代理管理 ============================================ */

const AgentManage = resolve => require(['@/views/agent/AgentManage'], resolve)
const AgentList = resolve => require(['@/views/agent/AgentList'], resolve)
const AgentCreate = resolve => require(['@/views/agent/AgentCreate'], resolve)
const AgentInvitationCode = resolve => require(['@/views/agent/AgentInvitationCode'], resolve)
const AgentAchievementUsers = resolve => require(['@/views/agent/AgentAchievementUsers'], resolve)
const AgentPerformanceLinear = resolve => require(['@/views/agent/performance-linear'], resolve)
const AgentInterestGames = resolve => require(['@/views/agent/AgentInterestGames'], resolve)
const AgentInterestDivision = resolve => require(['@/views/agent/AgentInterestDivision'], resolve)
const AgentInterestUsersDivision = resolve => require(['@/views/agent/AgentInterestUsersDivision'], resolve)

/* ========================================== 优惠活动 ============================================ */

const ActivityManage = resolve => require(['@/views/activity/ActivityManage'], resolve)
const ActivityList = resolve => require(['@/views/activity/activity-list'], resolve)

/* ========================================== 网站管理 ============================================ */

const WebsiteManage = resolve => require(['@/views/website/WebsiteManage'], resolve)
const WebsiteStandby = resolve => require(['@/views/website/website-standby'], resolve)
const WebsiteRegistryUser = resolve => require(['@/views/website/registry-user'], resolve)
const WebsiteImagePhone = resolve => require(['@/views/website/image-phone'], resolve)
const WebsiteMenuSetting = resolve => require(['@/views/website/menu-setting'], resolve)
const WebsiteFeedbackManagement = resolve => require(['@/views/website/feedback-management'], resolve)

/* ========================================== 公告管理 ============================================ */

const NoticeManage = resolve => require(['@/views/notice/NoticeManage'], resolve)
const NoticeList = resolve => require(['@/views/notice/notice-list'], resolve)
const NoticeSystemNotice = resolve => require(['@/views/notice/system-notice'], resolve)
const NoticeSystemMessage = resolve => require(['@/views/notice/system-message'], resolve)
const NoticeTypeSetting = resolve => require(['@/views/notice/type-setting'], resolve)

/* ========================================== 体育管理 ============================================ */

const SportManage = resolve => require(['@/views/sport/SportManage'], resolve)
const SportThreeBets = resolve => require(['@/views/sport/SportThreeBets'], resolve)
const SportThreeTransfer = resolve => require(['@/views/sport/SportThreeTransfer'], resolve)
const SportStatistics = resolve => require(['@/views/sport/SportStatistics'], resolve)

/* ========================================== 其   他 ============================================ */

const NotFound = resolve => require(['@/views/NotFound'], resolve)

const routes = [
  {
    name: 'NotFound',
    path: '*',
    component: NotFound,
    meta: { title: '404页面', keepAlive: true }
  },
  {
    path: '',
    redirect: '/login/username'
  },
  /* ========================================== 登录模块 ============================================ */
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
  /* ========================================== 主页 ============================================ */
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
        meta: { title: '系统首页', keepAlive: true }
      },
      /* ========================================== 头像下拉框 ============================================ */
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
      /* ========================================== 系统管理 ============================================ */
      {
        name: 'SystemMenuSetting',
        path: '/system/menu',
        component: SystemMenuSetting,
        meta: {
          title: '菜单',
          breadcrumb: [
            { name: '系统设置' },
            { name: '菜单' }
          ]
        }
      },
      {
        name: 'SystemRolesSetting',
        path: '/system/roles',
        component: SystemRolesSetting,
        meta: {
          title: '角色',
          breadcrumb: [
            { name: '系统设置' },
            { name: '角色' }
          ]
        }
      },
      {
        name: 'SystemPermissionsSetting',
        path: '/system/permissions',
        component: SystemPermissionsSetting,
        meta: {
          title: '权限',
          breadcrumb: [
            { name: '系统设置' },
            { name: '权限' }
          ]
        }
      },
      {
        name: 'SystemGroupSetting',
        path: '/system/group',
        component: SystemGroupSetting,
        meta: {
          title: '分组',
          breadcrumb: [
            { name: '系统设置' },
            { name: '分组' }
          ]
        }
      },
      {
        name: 'SystemUsersSetting',
        path: '/system/users',
        component: SystemUsersSetting,
        meta: {
          title: '用户',
          breadcrumb: [
            { name: '系统设置' },
            { name: '用户' }
          ]
        }
      },
      {
        name: 'SystemLotterySetting',
        path: '/system/lottery',
        component: SystemLotterySetting,
        meta: {
          title: '彩票',
          breadcrumb: [
            { name: '系统设置' },
            { name: '彩票' }
          ]
        }
      },
      {
        name: 'SystemAreaSetting',
        path: '/system/area',
        component: SystemAreaSetting,
        meta: {
          title: '地区',
          breadcrumb: [
            { name: '系统设置' },
            { name: '地区' }
          ]
        }
      },
      {
        name: 'SystemBanksSetting',
        path: '/system/bank',
        component: SystemBanksSetting,
        meta: {
          title: '银行',
          breadcrumb: [
            { name: '系统设置' },
            { name: '银行' }
          ]
        }
      },
      /* ========================================== 会员管理 ============================================ */
      {
        name: 'UsersManage',
        path: '/users',
        redirect: '/users/list',
        component: UsersManage,
        children: [
          {
            name: 'UsersList',
            path: 'list',
            component: UsersList,
            meta: {
              title: '会员信息管理',
              breadcrumb: [
                { name: '会员管理' },
                { name: '会员信息管理' }
              ]
            }
          },
          {
            name: 'UsersLogs',
            path: 'logs',
            component: UsersLogs,
            meta: {
              title: '会员日志记录',
              breadcrumb: [
                { name: '会员管理' },
                { name: '会员日志记录' }
              ]
            }
          },
          {
            name: 'UsersAccountCheck',
            path: 'account/check',
            component: UsersAccountCheck,
            meta: {
              title: '会员账户核查',
              breadcrumb: [
                { name: '会员管理' },
                { name: '会员账户核查' }
              ]
            }
          },
          {
            name: 'UsersKeyword',
            path: 'keyword',
            component: UsersKeyword,
            meta: { title: '会员关键信息修改', keepAlive: true }
          }
        ]
      },
      {
        name: 'UserBets',
        path: '/users/:id/bets',
        component: UserBets,
        meta: {
          title: '会员个人注单列表',
          breadcrumb: [
            { name: '会员管理' },
            { name: '会员信息管理', path: '/users/list' },
            { name: '会员个人注单列表' }
          ]
        }
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
        path: '/users/:id/httpLogs',
        component: UserHttpLogs,
        meta: { title: '会员个人HTTP请求日志列表' }
      },
      /* ========================================== 彩票管理 ============================================ */
      {
        name: 'LotteryManage',
        path: '/lottery',
        direct: '/lottery/open',
        component: LotteryManage,
        children: [
          {
            name: 'LotteryOpen',
            path: 'open',
            component: LotteryOpen,
            meta: {
              title: '彩票开盘配置',
              breadcrumb: [
                { name: '彩票管理' },
                { name: '彩票开盘配置' }
              ]
            }
          },
          {
            name: 'LotteryResults',
            path: 'results',
            component: LotteryResults,
            meta: {
              title: '彩票开奖记录',
              breadcrumb: [
                { name: '彩票管理' },
                { name: '彩票开奖记录' }
              ]
            }
          },
          {
            name: 'lotteryOdds',
            path: 'odds',
            component: LotteryOdds,
            meta: {
              title: '彩票赔率设置',
              breadcrumb: [
                { name: '彩票管理' },
                { name: '彩票赔率设置' }
              ]
            }
          },
          {
            name: 'LotteryBillCancel',
            path: 'bill/cancel',
            component: LotteryBillCancel,
            meta: {
              title: '彩票未结撤单',
              breadcrumb: [
                { name: '彩票管理' },
                { name: '彩票未结撤单' }
              ]
            }
          },
          {
            name: 'LotteryStatisticsUsers',
            path: 'statistics/users',
            component: LotteryStatisticsUsers,
            meta: {
              title: '彩票会员报表',
              breadcrumb: [
                { name: '彩票管理' },
                { name: '彩票会员报表' }
              ]
            }
          },
          {
            name: 'LotteryStatisticsBets',
            path: 'statistics/bets',
            component: LotteryStatisticsBets,
            meta: {
              title: '彩票注单报表',
              breadcrumb: [
                { name: '彩票管理' },
                { name: '彩票注单报表' }
              ]
            }
          },
          {
            name: 'LotteryStatistics',
            path: 'statistics',
            component: LotteryStatistics,
            meta: {
              title: '彩票总报表',
              breadcrumb: [
                { name: '彩票管理' },
                { name: '彩票总报表' }
              ]
            }
          }
        ]
      },
      {
        name: 'LotteryKillrate',
        path: '/lottery/killrate',
        component: LotteryKillrate,
        meta: { title: '彩票杀率配置', keepAlive: true }
      },
      {
        name: 'LotteryCheckout',
        path: '/lottery/checkout',
        component: LotteryCheckout,
        meta: { title: '彩票开奖校对', keepAlive: true }
      },
      {
        name: 'LotteryBets',
        path: '/lottery/bets',
        component: LotteryBets,
        meta: {
          title: '客户注单查询',
          breadcrumb: [
            { name: '彩票管理' },
            { name: '客户注单查询' }
          ]
        }
      },
      /* ========================================== 财务管理 ============================================ */
      {
        name: 'FinanceManage',
        path: '/finance',
        redirect: '/finance/blalance/sheet',
        component: FinanceManage,
        children: [
          {
            name: 'FinanceBalanceManipulation',
            path: 'balance/manipulation',
            component: FinanceBalanceManipulation,
            meta: {
              title: '操作 - 给客户加减款',
              breadcrumb: [
                { name: '财务管理' },
                { name: '操作 - 给客户加减款' }
              ]
            }
          },
          {
            name: 'FinanceDepositForm',
            path: 'deposit/form',
            component: FinanceDepositForm,
            meta: {
              title: '存款 - 客户汇款管理',
              breadcrumb: [
                { name: '财务管理' },
                { name: '存款 - 客户汇款管理' }
              ]
            }
          },
          {
            name: 'FinanceDepositOnline',
            path: 'deposit/online',
            component: FinanceDepositOnline,
            meta: {
              title: '存款 - 客户在线存款',
              breadcrumb: [
                { name: '财务管理' },
                { name: '存款 - 客户在线存款' }
              ]
            }
          },
          {
            name: 'FinanceWithdrawApply',
            path: 'withdraw/apply',
            component: FinanceWithdrawApply,
            meta: {
              title: '提款 - 客户提款审批',
              breadcrumb: [
                { name: '财务管理' },
                { name: '提款 - 客户提款审批' }
              ]
            }
          },
          {
            name: 'FinanceLimitationTransfer',
            path: 'limitation/transfer',
            component: FinanceLimitationTransfer,
            meta: {
              title: '额度转换记录查询',
              breadcrumb: [
                { name: '财务管理' },
                { name: '额度转换记录查询' }
              ]
            }
          },
          {
            name: 'FinanceUserAsset',
            path: 'user/asset',
            component: FinanceUserAsset,
            meta: {
              title: '会员资金管理',
              breadcrumb: [
                { name: '财务管理' },
                { name: '会员资金管理' }
              ]
            }
          },
          {
            name: 'FinanceDepositWithdrawList',
            path: 'depositwithdraw/list',
            component: FinanceDepositWithdrawList,
            meta: {
              title: '存/取款记录查询',
              breadcrumb: [
                { name: '财务管理' },
                { name: '存/取款记录查询' }
              ]
            }
          },
          {
            name: 'FinanceBalanceSheet',
            path: 'balance/sheet',
            component: FinanceBalanceSheet,
            meta: {
              title: '会员财务报表',
              breadcrumb: [
                { name: '财务管理' },
                { name: '会员财务报表' }
              ]
            }
          },
          {
            name: 'FinanceStatistics',
            path: 'statistics',
            component: FinanceStatistics,
            meta: {
              title: '平台收支汇总',
              breadcrumb: [
                { name: '财务管理' },
                { name: '平台收支汇总' }
              ]
            }
          },
          {
            name: 'FinanceSetting',
            path: 'setting',
            redirect: 'setting/list',
            component: FinanceSetting,
            children: [
              {
                name: 'FinanceSettingList',
                path: 'list',
                component: FinanceSettingList,
                meta: {
                  title: '常规配置列表',
                  breadcrumb: [
                    { name: '财务管理' },
                    { name: '常规配置列表' }
                  ],
                  keepAlive: true
                }
              },
              {
                name: 'FinanceSettingLoan',
                path: 'loan',
                component: FinanceSettingLoan,
                meta: {
                  title: '借贷类型列表',
                  breadcrumb: [
                    { name: '财务管理' },
                    { name: '常规配置列表', path: '/finance/setting/list' },
                    { name: '借贷类型列表' }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* ========================================== 收款出款 ============================================ */
      {
        name: 'TransactionManage',
        path: '/transaction',
        redirect: '/transaction/payment/type',
        component: TransactionManage,
        children: [
          {
            name: 'TransactionPaymentType',
            path: 'payment/type',
            component: TransactionPaymentType,
            meta: {
              title: '支付类型配置',
              breadcrumb: [
                { name: '收款出款' },
                { name: '支付类型配置' }
              ]
            }
          },
          {
            name: 'TransactionPaymentPort',
            path: 'payment/port',
            component: TransactionPaymentPort,
            meta: {
              title: '支付接口配置',
              breadcrumb: [
                { name: '收款出款' },
                { name: '支付接口配置' }
              ]
            }
          },
          {
            name: 'TransactionPaymentLine',
            path: 'payment/line',
            component: TransactionPaymentLine,
            meta: {
              title: '支付路线配置',
              breadcrumb: [
                { name: '收款出款' },
                { name: '支付路线配置' }
              ]
            }
          },
          {
            name: 'TransactionRemittanceUser',
            path: 'remittance/user',
            component: TransactionRemittanceUser,
            meta: {
              title: '会员汇款设置',
              breadcrumb: [
                { name: '收款出款' },
                { name: '会员汇款设置' }
              ]
            }
          },
          {
            name: 'TransactionWithdrawType',
            path: 'withdraw/type',
            component: TransactionWithdrawType,
            meta: {
              title: '出款商户类型',
              breadcrumb: [
                { name: '收款出款' },
                { name: '出款商户类型' }
              ]
            }
          },
          {
            name: 'TransactionWithdrawAccount',
            path: 'withdraw/account',
            component: TransactionWithdrawAccount,
            meta: {
              title: '出款商户配置',
              breadcrumb: [
                { name: '收款出款' },
                { name: '出款商户配置' }
              ]
            }
          },
          {
            name: 'TransactionRemittanceShortcut',
            path: 'remittance/shortcut',
            component: TransactionRemittanceShortcut,
            meta: {
              title: '汇款捷径配置',
              breadcrumb: [
                { name: '收款出款' },
                { name: '汇款快捷设置' }
              ]
            }
          }
        ]
      },
      /* ========================================== 返水管理 ============================================ */
      {
        name: 'RebateManage',
        path: '/rebate',
        redirect: '/rebate/list',
        component: RebateManage,
        children: [
          {
            name: 'RebateSetting',
            path: 'setting',
            component: RebateSetting,
            meta: {
              title: '设置返水计划',
              breadcrumb: [
                { name: '返水管理' },
                { name: '设置返水计划' }
              ]
            }
          },
          {
            name: 'RebateList',
            path: 'list',
            component: RebateList,
            meta: {
              title: '查看返水记录',
              breadcrumb: [
                { name: '返水管理' },
                { name: '查看返水记录' }
              ]
            }
          }
        ]
      },
      /* ========================================== 代理管理 ============================================ */
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
            path: 'performance/users',
            component: AgentAchievementUsers,
            meta: { title: '代理个人业绩' }
          },
          {
            name: 'AgentPerformanceLinear',
            path: 'performance/linear',
            component: AgentPerformanceLinear,
            meta: {
              title: '代理线条业绩',
              breadcrumb: [
                { name: '代理管理' },
                { name: '代理线条业绩' }
              ]
            }
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
      /* ========================================== 优惠活动 ============================================ */
      {
        name: 'ActivityManage',
        path: '/activity',
        redirect: '/activity/list',
        component: ActivityManage,
        children: [
          {
            name: 'ActivityList',
            path: 'list',
            component: ActivityList,
            meta: {
              title: '图片管理',
              breadcrumb: [
                { name: '优惠活动' },
                { name: '图片管理' }
              ]
            }
          }
        ]
      },
      /* ========================================== 网站管理 ============================================ */
      {
        name: 'WebsiteManage',
        path: '/website',
        redirect: '/website/standby',
        component: WebsiteManage,
        children: [
          {
            name: 'WebsiteStandby',
            path: 'standby',
            component: WebsiteStandby,
            meta: {
              title: '备用网站管理',
              breadcrumb: [
                { name: '网站管理' },
                { name: '备用网站管理' }
              ]
            }
          },
          {
            name: 'WebsiteRegistryUser',
            path: 'registry',
            component: WebsiteRegistryUser,
            meta: {
              title: '会员注册配置',
              breadcrumb: [
                { name: '网站管理' },
                { name: '会员注册配置' }
              ]
            }
          },
          {
            name: 'WebsiteImagePhone',
            path: 'image',
            component: WebsiteImagePhone,
            meta: {
              title: '手机首页图片',
              breadcrumb: [
                { name: '网站管理' },
                { name: '手机首页图片' }
              ]
            }
          },
          {
            name: 'WebsiteMenuSetting',
            path: 'menu',
            component: WebsiteMenuSetting,
            meta: {
              title: '网站菜单配置',
              breadcrumb: [
                { name: '网站管理' },
                { name: '网站菜单配置' }
              ]
            }
          },
          {
            name: 'WebsiteFeedbackManagement',
            path: 'feedback',
            component: WebsiteFeedbackManagement,
            meta: {
              title: '问题反馈管理',
              breadcrumb: [
                { name: '网站管理' },
                { name: '问题反馈管理' }
              ]
            }
          }
        ]
      },
      /* ========================================== 体育管理 ============================================ */
      {
        name: 'SportManage',
        path: '/sport',
        redirect: '/sport/statistics',
        component: SportManage,
        children: [
          {
            name: 'SportThreeBets',
            path: 'three/bets',
            component: SportThreeBets,
            meta: { title: '三昇体育注单列表' }
          },
          {
            name: 'SportThreeTransfer',
            path: 'three/transfer',
            component: SportThreeTransfer,
            meta: { title: '三昇额度转换列表' }
          },
          {
            name: 'SportStatistics',
            path: 'statistics',
            component: SportStatistics,
            meta: { title: '体育总报表' }
          }
        ]
      },
      /* ========================================== 公告管理 ============================================ */
      {
        name: 'NoticeManage',
        path: '/notice',
        redirect: '/notice/list',
        component: NoticeManage,
        children: [
          {
            name: 'NoticeList',
            path: 'list',
            component: NoticeList,
            meta: {
              title: '公告',
              breadcrumb: [
                { name: '公告管理' },
                { name: '公告' }
              ]
            }
          },
          {
            name: 'NoticeSystemNotice',
            path: 'system/notice',
            component: NoticeSystemNotice,
            meta: {
              title: '系统公告',
              breadcrumb: [
                { name: '公告管理' },
                { name: '系统公告' }
              ]
            }
          },
          {
            name: 'NoticeSystemMessage',
            path: 'system/message',
            component: NoticeSystemMessage,
            meta: {
              title: '系统消息',
              breadcrumb: [
                { name: '公告管理' },
                { name: '系统消息' }
              ]
            }
          },
          {
            name: 'NoticeTypeSetting',
            path: 'setting/type',
            component: NoticeTypeSetting,
            meta: {
              title: '公告类型配置',
              breadcrumb: [
                { name: '公告管理' },
                { name: '公告类型配置' }
              ]
            }
          }
        ]
      }
    ]
  }
]

export default routes
