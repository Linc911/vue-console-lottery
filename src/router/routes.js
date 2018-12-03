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
const SystemUsersSetting = resolve => require(['@/views/system/users-setting'], resolve) // 用户
const SystemLotterySetting = resolve => require(['@/views/system/lottery-setting'], resolve) // 彩票
const SystemBanksSetting = resolve => require(['@/views/system/banks-setting'], resolve) // 银行
const SystemAreaSetting = resolve => require(['@/views/system/area-setting'], resolve) // 地区
// 权限
const SystemPermissionsList = resolve => require(['@/views/system/SystemPermissionsList'], resolve)
const SystemPermissionCreate = resolve => require(['@/views/system/SystemPermissionCreate'], resolve)
const SystemPermissionUpdate = resolve => require(['@/views/system/SystemPermissionUpdate'], resolve)
// 分组
const SystemGroup = resolve => require(['@/views/system/group/SystemGroup'], resolve)
const SystemGroupList = resolve => require(['@/views/system/group/SystemGroupList'], resolve)
const SystemGroupCreate = resolve => require(['@/views/system/group/SystemGroupCreate'], resolve)
const SystemGroupUpdate = resolve => require(['@/views/system/group/SystemGroupUpdate'], resolve)

/* ========================================== 会员管理 ============================================ */
const UsersManage = resolve => require(['@/views/users/UsersManage'], resolve)
const UsersList = resolve => require(['@/views/users/users-list'], resolve)
const UserBets = resolve => require(['@/views/users/user-bets'], resolve)
const UserBetsStatistics = resolve => require(['@/views/users/UserBetsStatistics'], resolve)
const UserRechargeLogs = resolve => require(['@/views/users/UserRechargeLogs'], resolve)
const UserHttpLogs = resolve => require(['@/views/users/UserHttpLogs'], resolve)
const UsersLogs = resolve => require(['@/views/users/UsersLogs'], resolve)
const UsersAccount = resolve => require(['@/views/users/UsersAccount'], resolve)
const UsersKeyword = resolve => require(['@/views/users/UsersKeyword'], resolve)

/* ========================================== 彩票管理 ============================================ */
const LotteryManage = resolve => require(['@/views/lottery/LotteryManage'], resolve)
const LotteryResults = resolve => require(['@/views/lottery/lottery-results'], resolve)
const LotteryOdds = resolve => require(['@/views/lottery/lottery-odds'], resolve)
const LotteryBets = resolve => require(['@/views/lottery/lottery-bets'], resolve)
const LotteryOpen = resolve => require(['@/views/lottery/LotteryOpen'], resolve)
const LotteryWithdraw = resolve => require(['@/views/lottery/LotteryWithdraw'], resolve)
const LotteryKillrate = resolve => require(['@/views/lottery/LotteryKillrate'], resolve)
const LotteryCheckout = resolve => require(['@/views/lottery/LotteryCheckout'], resolve)
const LotteryStatistics = resolve => require(['@/views/lottery/LotteryStatistics'], resolve)
const LotteryUsersInfo = resolve => require(['@/views/lottery/LotteryUsersInfo'], resolve)

/* ========================================== 财务管理 ============================================ */
const FinanceManage = resolve => require(['@/views/finance/FinanceManage'], resolve)
const FinanceBalanceManipulation = resolve => require(['@/views/finance/balance-manipulation'], resolve)
const FinanceDepositForm = resolve => require(['@/views/finance/deposit-form'], resolve)
const FinanceDepositOnline = resolve => require(['@/views/finance/deposit-online'], resolve)
const FinanceWithdrawApply = resolve => require(['@/views/finance/withdraw-apply'], resolve)
const FinanceLimitationTransfer = resolve => require(['@/views/finance/limitation-transfer'], resolve)
const FinanceDepositWithdrawList = resolve => require(['@/views/finance/deposit-withdraw'], resolve)
const FinanceUsersAssets = resolve => require(['@/views/finance/FinanceUsersAssets'], resolve)
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

/* 收款出款 */
const TransactionManage = resolve => require(['@/views/transaction/TransactionManage'], resolve)
const TransactionPaymentType = resolve => require(['@/views/transaction/payment-type'], resolve)
const TransactionPaymentPort = resolve => require(['@/views/transaction/payment-port'], resolve)
const TransactionPaymentLine = resolve => require(['@/views/transaction/payment-line'], resolve)
const TransactionRemittanceUser = resolve => require(['@/views/transaction/remittance-user'], resolve)
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

/* 优惠活动 */
/* ========================================== 优惠活动 ============================================ */
const PromotionManage = resolve => require(['@/views/promotion/PromotionManage'], resolve)
const PromotionList = resolve => require(['@/views/promotion/PromotionList'], resolve)
const PromotionCreate = resolve => require(['@/views/promotion/PromotionCreate'], resolve)

/* ========================================== 体育管理 ============================================ */
const SportManage = resolve => require(['@/views/sport/SportManage'], resolve)
const SportThreeBets = resolve => require(['@/views/sport/SportThreeBets'], resolve)
const SportThreeTransfer = resolve => require(['@/views/sport/SportThreeTransfer'], resolve)
const SportStatistics = resolve => require(['@/views/sport/SportStatistics'], resolve)

/* ========================================== 公告管理 ============================================ */
const NoticeManage = resolve => require(['@/views/notice/NoticeManage'], resolve)
const NoticePublish = resolve => require(['@/views/notice/NoticePublish'], resolve)
const NoticePublishedList = resolve => require(['@/views/notice/NoticePublishedList'], resolve)
const NoticeSystemNotifications = resolve => require(['@/views/notice/NoticeSystemNotifications'], resolve)
const NoticeSystemMessages = resolve => require(['@/views/notice/NoticeSystemMessages'], resolve)
const NoticeFeedbackUsers = resolve => require(['@/views/notice/NoticeFeedbackUsers'], resolve)
const NoticeFeedbackSuggestions = resolve => require(['@/views/notice/NoticeFeedbackSuggestions'], resolve)

/* ========================================== 其   他 ============================================ */
const ValidationCodeLogs = resolve => require(['@/views/others/ValidationCodeLogs'], resolve)

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
        meta: { title: '系统首页', keepAlive: true }
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
      /* ========================================== 会员管理 ============================================ */
      // 会员信息
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
            name: 'UsersAccount',
            path: 'account',
            component: UsersAccount,
            meta: { title: '会员账户核查' }
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
      // {
      //   path: '/users/:id/depositStatistics',
      //   component: UserAccountDeposit,
      //   meta: { title: '存款历史统计' }
      // },
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
              title: '彩票开盘记录',
              breadcrumb: [
                { name: '彩票管理' },
                { name: '彩票开盘记录' }
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
          // 赔率设置
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
          }
        ]
      },
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
        name: 'LotteryCheckout',
        path: '/lottery/checkout',
        component: LotteryCheckout,
        meta: { title: '彩票开奖校对', keepAlive: true }
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
            name: 'FinanceUsersAssets',
            path: 'users/assets',
            component: FinanceUsersAssets,
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
          // {
          //   name: 'Commercial',
          //   path: 'commercial',
          //   component: Commercial,
          //   meta: { title: '出款商户配置' }
          // },
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
            path: 'achievement/users',
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
        name: 'PromotionManage',
        path: '/promotion',
        redirect: '/promotion/list',
        component: PromotionManage,
        children: [
          {
            name: 'PromotionList',
            path: 'list',
            component: PromotionList,
            meta: { title: '优惠活动图片管理' }
          },
          {
            name: 'PromotionCreate',
            path: 'create',
            component: PromotionCreate,
            meta: { title: '优惠活动图片管理', keepAlive: true }
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
        redirect: '/notice/published/list',
        component: NoticeManage,
        children: [
          {
            name: 'NoticePublish',
            path: 'publish',
            component: NoticePublish,
            meta: { title: '发布公告' }
          },
          {
            name: 'NoticePublishedList',
            path: 'published/list',
            component: NoticePublishedList,
            meta: { title: '已发公告列表' }
          },
          {
            name: 'NoticeSystemNotifications',
            path: 'system/notifications',
            component: NoticeSystemNotifications,
            meta: { title: '系统公告' }
          },
          {
            name: 'NoticeSystemMessages',
            path: 'system/messages',
            component: NoticeSystemMessages,
            meta: { title: '系统消息' }
          },
          {
            name: 'NoticeFeedbackUsers',
            path: 'feedback/users',
            component: NoticeFeedbackUsers,
            meta: { title: '会员反馈' }
          },
          {
            name: 'NoticeFeedbackSuggestions',
            path: 'feedback/suggestions',
            component: NoticeFeedbackSuggestions,
            meta: { title: '意见反馈' }
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
]

export default routes
