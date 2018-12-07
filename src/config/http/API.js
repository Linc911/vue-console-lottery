import axios from './index'

export default {
  /* ===================================== 公共数据 ======================================= */

  fetchSidebarMenuList: () => axios.get('/api-b/menus/all'), // 页面侧边栏菜单列表

  // 游戏类
  fetchGameClasses: () => axios.get('/api-g/gameconfig/parent'), // 游戏菜单(大类)
  fetchGamesMenu: () => axios.get('/api-g/GameTypeConfig/tree'), // 游戏菜单（细分）

  fetchGamesList: () => axios.get('/api-g/gameconfig'), // 游戏类型/账户类型
  fetchUserId: options => axios.get('/api-u/users-anon/getUserId', options), // 查询会员ID

  /* ===================================== 登   录 ======================================= */

  fetchLogoutInfo: () => axios.get('/api-u/sys/logout'),
  postUserLogin: (data, options) => axios.post('/api-u/sys/login', data, options),

  fetchUserInfo: () => axios.get('/api-u/users/current'),
  putUserInfo: data => axios.put('/api-u/users/me', data),

  /* ===================================== 系统管理 ======================================= */

  fetchSystemMenuList: (options) => axios.get('/api-b/menus/all', options), // 菜单列表
  createSystemMenuItem: (data) => axios.post('/api-b/menus', data), // 创建新菜单
  updateSystemMenuItem: (data) => axios.put('/api-b/menus', data), // 修改菜单配置

  fetchSystemRolesList: (options) => axios.get('/api-u/roles', options), // 角色列表
  createSystemRolesItem: (data) => axios.post('/api-u/roles', data), // 创建新角色
  updateSystemRolesItem: (data) => axios.put('/api-u/roles', data), // 更新角色信息
  deleteSystemRolesItem: (options) => axios.delete('/api-u/roles', options), // 删除角色

  fetchSystePermissionsList: (options) => axios.get('/api-u/permissions', options), // 权限列表
  createSystePermissionsItem: (options) => axios.post('/api-u/permissions', options), // 创建新权限
  updateSystePermissionsItem: (options) => axios.put('/api-u/permissions', options), // 修改权限信息

  fetchUserGroups: (options) => axios.get('/api-u/group/list', options), // 分组列表
  postSystemGroupChange: (data) => axios.post('/api-u/group/save', data), // 创建或修改分组信息
  postUserGroupSetting: (options) => axios.get('/api-u/group/saveRelation', options), // 设置单个会员分组

  fetchSystemUsersList: (options) => axios.get('/api-u/users', options), // 用户列表
  createSystemUsersList: (data) => axios.post('/api-u/users-anon/register', data), // 创建新用户
  updateSystemUsersItem: (data) => axios.post('/api-u/users/update', data), // 更新用户信息

  fetchSystemBanksList: (data) => axios.post('/api-b/bankConfig/list', data), // 银行设置列表
  createSystemBanksItem: (data) => axios.put('/api-b/bankConfig/save', data), // 创建新银行配置

  fetchSystemAreaList: (data) => axios.post('/api-b/area/list', data), // 地区设置列表
  fetchSystemAreaListTree: (data) => axios.post('/api-b/area/tree', data), // 地区设置列表
  updateSystemAreaItem: (data) => axios.put('/api-b/area/save', data), // 创建与修改地区配置
  deleteSystemAreaItem: (options) => axios.delete('/api-b/area/delete', options), // 删除地区

  fetchLotterySettingInfo: (options) => axios.get('/api-g/GameTypeConfig/get', options), // 彩票设置列表
  updateLotterySettingItem: (data) => axios.post('/api-g/GameTypeConfig/save', data), // 修改彩票设置

  /* ===================================== 会员管理 ======================================= */

  fetchUsersList: options => axios.get('/api-u/backend/userList', options), // 全部会员信息列表
  getUserInfo: options => axios.get('/api-u/backend/user', options), // 单个会员信息

  updateUserControlStatus: (options) => axios.get('/api-u/backend/updateControl', options), // 修改会员监控状态

  fetchUserBetsList: data => axios.post('/api-g/getUserBetsInfo', data), // 单个会员全部注单记录

  // 会员抽点
  getUsersRebate: options => axios.get('/api-u/userRelation/get', options),
  updateUsersRebate: (data, options) => axios.post('/api-u/group/save', data, options),

  // 全部会员日志
  fetchUsersLogs: (options) => axios.get('/api-l/logList', options),

  /* ===================================== 彩票管理 ======================================= */

  fetchLotteryResultsEleven: options => axios.get('/api-g/result/1', options),
  fetchLotteryResultsFast3: options => axios.get('/api-g/result/2', options),
  updateLotteryResultEleven: options => axios.get('/api-g/result/1/settlement', options), // 手动修改开奖结果
  updateLotteryResultFast3: options => axios.get('/api-g/result/2/settlement', options),
  cancelLotteryResultEleven: options => axios.get('/api-g/result/1/cancel', options), // 撤单
  cancelLotteryResultFast3: options => axios.get('/api-g/result/2/cancel', options),

  fetchLotteryResultsList: (data) => axios.post('/api-g/result', data), // (新接口)所有开奖记录列表

  fetchLotterOddsList: (data) => axios.post('/api-g/oddsset', data), // 所有赔率列表
  updateLotterOddsItem: (data) => axios.post('/api-g/oddsset/update', data), // 修改单个游戏赔率数据

  /* ===================================== 财务管理 ======================================= */

  fetchFinanceBalanceManipulation: options => axios.get('/api-p/changeUserRecharge/list', options), // 加减款列表
  fetchBalanceChangeItem: options => axios.get('/api-p/changeUserRecharge/info', options), // 加减款每项详情
  saveFinanceBalanceChange: data => axios.post('/api-p/changeUserRecharge/save', data), // 提交加减款表单
  updateDepositFormStatus: options => axios.get('/api-p/changeUserRecharge/audit', options), // 审批加减款操作

  fetchFinanceDepositForm: options => axios.get('/api-p/remitInfo/list', options), // 填单存款管理列表
  updateFinanceDepositFormStatus: options => axios.get('/api-p/remitInfo/audit', options), // 审批填单存款

  fetchFinanceLimitationTransfer: options => axios.get('/api-u/convertRecharge/list', options), // 额度转换管理列表

  fetchFinanceLoanList: options => axios.get('/api-b/dictionary/list', options), // 借贷类型列表
  fetchFinanceLoanType: options => axios.get('/api-b/dictionary/list', options), // 借贷类型列表
  createFinanceLoan: data => axios.post('/api-b/dictionary/save', data), // 创建与更新借贷类型数据
  deleteFinanceLoan: options => axios.get('/api-b/dictionary/delete', options), // 删除借贷类型数据

  fetchFinanceWithdrawApply: options => axios.get('/api-u/withdrawOrder/list', options), // 提款申请管理列表
  fetchFinanceWithdrawApplyItem: options => axios.get('/api-u/withdrawOrder/info', options), // 提款申请管理每项详情
  updateFinanceWithdrawApplyStatus: options => axios.get('/api-u/withdrawOrder/audit', options), // 审批提款申请

  fetchFinanceDepositOnline: options => axios.get('/api-p/UserOrder/list', options), // 在线存款列表

  fetchFinanceSheet: options => axios.get('/api-u/backend/finance/statistics', options), // 会员财务报表
  fetchFinanceStatistics: options => axios.get('/api-p/statistics/finance', options), // 财务统计汇总

  fetchFinanceDepoistLogs: options => axios.get('/api-p/UserOrder/orderAndRecharge', options), // 所有存款记录

  /* ===================================== 返水管理 ======================================= */

  fetchRebateSettingList: options => axios.get('/api-b/rebate/list', options), // 设置返水计划列表
  createRebateSettingList: data => axios.post('/api-b/rebate/save', data), // 会设置返水计划保存
  updateRebateSettingStatus: options => axios.get('/api-b/rebate/status', options), // 设置返水计划修改
  deleteRebateSettingItem: options => axios.delete('/api-b/rebate/delete', options), // 删除设置返水计划

  fetchRebateLogsList: options => axios.get('/api-b/rebateLog/list', options), // 查看返水记录列表
  statistic: options => axios.get('/api-b/rebateLog/statistic', options), // 会员返水信息统计

  /* ===================================== 收款出款 ======================================= */

  fetchTransactionPaymentType: options => axios.get('/api-b/configPayType/list', options), // 支付类型列表
  createTransactionPaymentType: data => axios.post('/api-b/configPayType/save', data), // 创建新支付类型
  updateTransactionPaymentType: data => axios.post('/api-b/configPayType/update', data), // 修改支付类型配置

  fetchTransactionPaymentPort: data => axios.post('/api-b/configPayInterface/list', data), // 支付接口列表
  fetchTransactionPaymentPortType: options => axios.get('/api-b/dictionary/list', options), // 支付接口类型列表
  createTransactionPaymentPort: data => axios.post('/api-b/configPayInterface/save', data), // 创建新支付接口
  updateTransactionPaymentPort: data => axios.post('/api-b/configPayInterface/update', data), // 接口类型列表

  fetchTransactionPortLine: options => axios.get('/api-b/configPayRoute/list', options), // 支付路线类型列表
  createTransactionPortLine: data => axios.post('/api-b/configPayRoute/save', data), // 创建新支付路线（可一对多）
  deleteTransactionPortLine: data => axios.post('/api-b/configPayRoute/deleteMany', data), // 删除路线配置

  fetchTransactionRemittance: data => axios.post('/api-b/configRemit/list', data), // 会员汇款设置列表
  createTransactionRemittance: data => axios.post('/api-b/configRemit/save', data), // 创建新会员汇款设置
  updateTransactionRemittance: data => axios.post('/api-b/configRemit/updateById', data), // 创建新会员汇款设置
  deleteTransactionRemittance: options => axios.get('/api-b/configRemit/delete', options), // 删除会员汇款设置

  fetchRemittanceShortcutType: options => axios.get('/api-b/dictionary/list', options), // 汇款快捷支付设置类型列表
  fetchTransactionRemittanceShortcut: options => axios.get('/api-b/configQuickPay/list', options), // 汇款快捷列表
  createTransactionRemittanceShortcut: data => axios.post('/api-b/configQuickPay/save', data), // 创建新会员汇款设置
  updateTransactionRemittanceShortcut: data => axios.post('/api-b/configQuickPay/save', data), // 创建新会员汇款设置
  // deleteTransactionRemittance: options => axios.get('/api-b/configRemit/delete', options) // 删除会员汇款设置

  /* ===================================== 代理管理 ======================================= */

  fetchAgentPerformanceLinearList: (options) => axios.get('/api-b/findAgentUserPerformanceList'), // 获取代理线条业绩列表

  /* ===================================== 优惠活动 ======================================= */

  fetchActivityList: (options) => axios.get('/api-n/activity', options), // 优惠活动列表
  updateActivityItem: (data) => axios.post('/api-n/activity/save', data), // 创建与修改优惠活动信息
  deleteActivityItem: (options) => axios.delete('/api-n/activity/delete', options), // 删除优惠活动

  /* ===================================== 公告管理 ======================================= */
  fetchNoticeList: (options) => axios.get('/api-n/notice', options), // 公告列表
  updateNoticeItem: (data) => axios.post('/api-n/notice/save', data), // 创建与修改公告信息

  fetchSystemNoticeList: (options) => axios.get('/api-n/sysnotice', options), // 系统公告列表
  updateSystemNoticeItem: (data) => axios.post('/api-n/sysnotice/save', data), // 创建与修改系统公告信息

  fetchSystemMessageList: (options) => axios.get('/api-n/sysmessage', options), // 系统消息列表
  updateSystemMessageItem: (data) => axios.post('/api-n/sysmessage/save', data), // 创建与修改系统消息

  /* ===================================== 公告管理 ======================================= */

  fetchWebsiteStandbyList: (options) => axios.get('/api-b/website', options), // 备用网站列表
  updateWebsiteStandbyItem: (data) => axios.put('/api-b/website/save', data), // 创建与修改备用网站配置
  deleteWebsiteStandbyItem: (options) => axios.delete('/api-b/website/delete', options) // 删除备用网站
}
