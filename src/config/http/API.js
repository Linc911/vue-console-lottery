import axios from './index'

export default {
  /* ===================================== 公共数据 ======================================= */

  fetchPublicUserGroup: (options) => axios.get('/api-u/group/list', options), // 会员分组

  fetchPublicUsersBasic: (options) => axios.get('/api-u/users/basic', options), // 会员列表(简单数据)
  fetchPublicUsers: (options) => axios.get('/api-u/backend/userList', options), // 会员列表

  fetchSidebarMenuList: (options) => axios.get('/api-b/menus/all', options), // 页面侧边栏菜单列表（仅一层结构）
  fetchSidebarMenu: (options) => axios.get('/api-b/menus/me', options), // 页面侧边栏菜单列表（层级结构）

  fetchGameClasses: (options) => axios.get('/api-g/gameconfig/parent', options), // 游戏菜单(大类)
  fetchGamesMenu: (options) => axios.get('/api-g/GameTypeConfig/tree', options), // 游戏菜单（细分）

  fetchGamesList: (options) => axios.get('/api-g/gameconfig', options), // 游戏类型/账户类型
  fetchUserId: (options) => axios.get('/api-u/users-anon/getUserId', options), // 查询会员ID

  fetchLotterBetsList: (data) => axios.get('/api-g/userBet/page', data), // 注单列表(不包含港彩)
  fetchSixBetsList: (data) => axios.get('/api-g/markSix/userBet', data), // 港彩注单列表
  fetchLotterBetDetail: (data) => axios.get('/api-g/userBet/detail', data), // 单个注单详情

  /* ===================================== 后台主页 ======================================= */

  fetchKeyData: (options) => axios.get('/api-b/index/statistic', options), // 关键数据统计

  /* ===================================== 登   录 ======================================= */
  fetchLogoutInfo: (options) => axios.get('/api-u/sys/logout', options),
  postUserLogin: (data, options) => axios.post('/api-u/sys/login', data, options),

  fetchUserInfo: (options) => axios.get('/api-u/users/current', options),
  putUserInfo: (data) => axios.put('/api-u/users/me', data),

  /* ===================================== 系统管理 ======================================= */

  createSystemMenuItem: (data) => axios.post('/api-b/menus', data), // 创建新菜单
  updateSystemMenuItem: (data) => axios.put('/api-b/menus', data), // 修改菜单配置

  fetchSystemRolesList: (options) => axios.get('/api-u/roles', options), // 角色列表
  createSystemRolesItem: (data) => axios.post('/api-u/roles', data), // 创建新角色
  updateSystemRolesItem: (data) => axios.put('/api-u/roles', data), // 更新角色信息
  deleteSystemRolesItem: (options) => axios.delete('/api-u/roles', options), // 删除角色

  fetchRolePermissionsList: (options) => axios.get('/api-u/roles/permissions', options), // 角色权限列表
  updateRolePermissionsList: (data) => axios.post('/api-u/roles/permissions', data), // 分配角色的权限

  fetchRoleMenuList: (options) => axios.get('/api-b/menus/tree', options), // 获取角色菜单
  updateRoleMenuList: (data) => axios.post('/api-b/menus/toRole', data), // 分配角色菜单

  fetchSystePermissionsList: (options) => axios.get('/api-u/permissions', options), // 权限列表
  createSystePermissionsItem: (options) => axios.post('/api-u/permissions', options), // 创建新权限
  updateSystePermissionsItem: (options) => axios.put('/api-u/permissions', options), // 修改权限信息
  deleteSystePermissionsItem: (options) => axios.delete('/api-u/permissions', options), // 删除权限

  fetchUserGroups: (options) => axios.get('/api-u/group/list', options), // 分组列表
  postSystemGroupItem: (data) => axios.post('/api-u/group/save', data), // 创建或修改分组信息
  deleteSystemGroupItem: (options) => axios.delete('/api-u/group/delete', options), // 删除分组

  fetchSystemUsersList: (options) => axios.get('/api-u/users', options), // 用户列表
  createSystemUsersList: (data) => axios.post('/api-u/users-anon/register', data), // 创建新用户
  updateSystemUsersItem: (data) => axios.post('/api-u/users/update', data), // 更新用户信息
  deleteSystemUsersItem: (options) => axios.delete('/api-u/users/delete', options), // 删除分组
  updateSystemUsersItemRole: (data) => axios.post('/api-u/users/roles', data), // 更新用户的角色类型

  fetchSystemBanksList: (data) => axios.post('/api-b/bankConfig/list', data), // 银行设置列表
  createSystemBanksItem: (data) => axios.put('/api-b/bankConfig/save', data), // 创建新银行配置
  deleteSystemBanksItem: (options) => axios.delete('/api-b/bankConfig/delete', options), // 删除银行

  fetchSystemAreaList: (data) => axios.post('/api-b/area/list', data), // 地区设置列表
  fetchSystemAreaListTree: (data) => axios.post('/api-b/area/tree', data), // 地区设置列表
  updateSystemAreaItem: (data) => axios.put('/api-b/area/save', data), // 创建与修改地区配置
  deleteSystemAreaItem: (options) => axios.delete('/api-b/area/delete', options), // 删除地区

  /* ===================================== 会员管理 ======================================= */

  fetchUsersList: (options) => axios.get('/api-u/backend/userList', options), // 全部会员信息列表
  getUserInfo: (options) => axios.get('/api-u/backend/user', options), // 单个会员信息
  updateUserListStatus: (data) => axios.put('/api-u/backend/updateControl', data), // 修改会员监控状态
  postUserGroupSetting: (data) => axios.put('/api-u/group/saveRelation', data), // 设置单个会员分组
  fetchUserBetsList: (data) => axios.post('/api-g/getUserBetsInfo', data), // 单个会员全部注单记录
  getUsersRebate: (options) => axios.get('/api-u/userRelation/get', options), // 会员抽点
  updateUsersRebate: (data, options) => axios.post('/api-u/group/save', data, options),

  fetchUsersAccountCheck: (options) => axios.get('/api-p/capitalLog/user', options), // 会员账户核查

  fetchUsersLogsList: (options) => axios.get('/api-l/logList', options), // 会员日志列表

  /* ===================================== 自营彩票管理 ======================================= */

  fetchLotterySettingInfo: (options) => axios.get('/api-g/GameTypeConfig/get', options), // 彩票设置列表(彩票开盘配置)
  updateLotterySettingItem: (data) => axios.post('/api-g/GameTypeConfig/save', data), // 修改彩票设置(彩票开盘配置)

  fetchLotteryResultsList: (options) => axios.get('/api-g/result', options), // 开奖记录列表
  updateLotteryBillCancel: (data) => axios.post('/api-g/result/cancel', data), // 彩票未结撤单
  updateLotteryResultManual: (data) => axios.post('/api-g/result/settlement', data), // 彩票手动开奖

  fetchLotterOddsList: (data) => axios.post('/api-g/oddsset', data), // 彩票赔率列表
  updateLotterOddsItem: (data) => axios.post('/api-g/oddsset/update', data), // 修改彩票赔率数据

  fetchLotterStatisticsUsers: (options) => axios.get('/api-g/userBets/userReportForm', options), // 彩票会员报表

  fetchLotterStatisticsBets: (options) => axios.get('/api-g/userBets/betReportForm', options), // 彩票注单报表

  fetchLotterStatistics: (options) => axios.get('/api-g/userBets/totalReportForm', options), // 彩票总报表

  fetchLotteryRulesList: (options) => axios.get('/api-b/gameExplain', options), // 游戏说明列表
  updateLotteryRulesItem: (data) => axios.put('/api-b/gameExplain', data), // 创建与更新游戏说明
  deleteLotteryRulesItem: (data) => axios.delete('/api-b/gameExplain', data), // 删除游戏说明

  /* ===================================== 港彩管理 ======================================= */

  fetchSixRulesList: (options) => axios.get('/api-g/markSix/result', options), // 港彩开奖记录列表
  // 港彩手动开奖：设置开奖结果和结算状态改变都在这个接口； 修改结算状态时，不传 balls 参数
  updateSixResultManual: (options) => axios.post('/api-g/markSix/settlement', options),

  createSixOfficalItem: (data) => axios.put('/api-g/markSix/result', data), // 创建香港六合彩彩期
  updateSixOfficalItem: (data) => axios.post('/api-g/markSix/result', data), // 修改香港六合彩信息
  deleteSixOfficalItem: (data) => axios.delete('/api-g/markSix/result', data), // 删除香港六合彩彩期

  fetchSixOddsList: (options) => axios.get('/api-g/markSix/oddsSet', options), // 港彩赔率列表
  updateSixOddsItem: (data) => axios.put('/api-g/markSix/updateOddsSet', data), // 修改港彩赔率

  fetchSixSettingList: (options) => axios.get('/api-g/markSix/config', options), // 港彩基础配置列表
  updateSixSettingItem: (data) => axios.put('/api-g/markSix/updateConfig', data), // 修改港彩基础配置

  /* ===================================== 财务管理 ======================================= */

  fetchFinanceBalanceManipulation: (options) => axios.get('/api-p/changeUserRecharge/list', options), // 加减款列表
  fetchBalanceChangeItem: (options) => axios.get('/api-p/changeUserRecharge/info', options), // 加减款每项详情
  saveFinanceBalanceChange: (data) => axios.post('/api-p/changeUserRecharge/save', data), // 提交加减款表单
  updateDepositFormStatus: (data) => axios.put('/api-p/changeUserRecharge/audit', data), // 审批加减款操作

  fetchFinanceDepositForm: (options) => axios.get('/api-p/remitInfo/list', options), // 填单存款管理列表
  updateFinanceDepositFormStatus: (data) => axios.put('/api-p/remitInfo/audit', data), // 审批填单存款

  fetchFinanceLimitationTransfer: (options) => axios.get('/api-u/convertRecharge/list', options), // 额度转换管理列表

  fetchFinanceLoanList: (options) => axios.get('/api-b/dictionary/list', options), // 借贷类型列表
  fetchFinanceLoanType: (options) => axios.get('/api-b/dictionary/list', options), // 借贷类型列表
  createFinanceLoan: (data) => axios.post('/api-b/dictionary/save', data), // 创建与更新借贷类型数据
  deleteFinanceLoan: (options) => axios.get('/api-b/dictionary/delete', options), // 删除借贷类型数据

  fetchFinanceWithdrawApply: (options) => axios.get('/api-u/withdrawOrder/list', options), // 提款申请管理列表
  fetchFinanceWithdrawApplyItem: (options) => axios.get('/api-u/withdrawOrder/info', options), // 提款申请管理每项详情
  updateFinanceWithdrawApplyStatus: (data) => axios.put('/api-u/withdrawOrder/audit', data), // 审批提款申请

  fetchFinanceDepositOnline: (options) => axios.get('/api-p/UserOrder/list', options), // 在线存款列表

  fetchFinanceUserAssetList: (options) => axios.get('/api-p/capitalLog', options), // 会员资金列表
  updateFinanceUserAssetStatus: (options) => axios.post('/api-p/capitalLog/retrieve', options), // 回收会员资金操作

  fetchFinanceSheet: (options) => axios.get('/api-u/backend/finance/statistics', options), // 会员财务报表
  fetchFinanceStatistics: (options) => axios.get('/api-p/statistics/finance', options), // 财务统计汇总

  fetchFinanceDepoistLogs: (options) => axios.get('/api-p/UserOrder/orderAndRecharge', options), // 所有存款记录

  /* ===================================== 返水管理 ======================================= */

  fetchRebateSettingList: (options) => axios.get('/api-b/rebate/list', options), // 设置返水计划列表
  updateRebateSettingList: (data) => axios.post('/api-b/rebate/save', data), // 会设置返水计划保存
  deleteRebateSettingItem: (options) => axios.delete('/api-b/rebate/delete', options), // 删除设置返水计划

  fetchRebateLogsList: (options) => axios.get('/api-b/rebateLog/list', options), // 查看返水记录列表
  statistic: (options) => axios.get('/api-b/rebateLog/statistic', options), // 会员返水信息统计

  /* ===================================== 收款出款 ======================================= */

  fetchTransactionPaymentType: (options) => axios.get('/api-b/configPayType/list', options), // 支付类型列表
  createTransactionPaymentType: (data) => axios.post('/api-b/configPayType/save', data), // 创建新支付类型
  updateTransactionPaymentType: (data) => axios.post('/api-b/configPayType/update', data), // 修改支付类型配置
  deleteTransactionPaymentType: (options) => axios.delete('/api-b/configPayType/delete', options), // 删除支付类型

  fetchTransactionPaymentPort: (data) => axios.get('/api-b/configPayInterface/list', data), // 支付接口列表
  fetchTransactionPaymentPortType: (options) => axios.get('/api-b/dictionary/list', options), // 支付接口类型列表
  createTransactionPaymentPort: (data) => axios.post('/api-b/configPayInterface/save', data), // 创建新支付接口
  updateTransactionPaymentPort: (data) => axios.post('/api-b/configPayInterface/update', data), // 修改接口类型列表
  deleteTransactionPaymentPort: (options) => axios.delete('/api-b/configPayInterface/delete', options), // 删除接口类型

  fetchTransactionPortLine: (options) => axios.get('/api-b/configPayRoute/list', options), // 支付路线类型列表
  createTransactionPortLine: (data) => axios.post('/api-b/configPayRoute/save', data), // 创建新支付路线（可一对多）
  deleteTransactionPortLine: (options) => axios.delete('/api-b/configPayRoute/deleteMany', options), // 删除路线配置

  fetchTransactionRemittance: (options) => axios.get('/api-b/configRemit/list', options), // 会员汇款设置列表
  createTransactionRemittance: (data) => axios.post('/api-b/configRemit/save', data), // 创建新会员汇款设置
  updateTransactionRemittance: (data) => axios.post('/api-b/configRemit/updateById', data), // 创建新会员汇款设置
  deleteTransactionRemittance: (options) => axios.delete('/api-b/configRemit/delete', options), // 删除会员汇款设置

  fetchWithdrawAccountTypeList: (options) => axios.get('/api-b/dictionary/list', options), // 出款商户类型列表
  updateWithdrawAccountTypeItem: (data) => axios.put('/api-b/dictionary/save', data), // 创建与修改出款商户类型
  deleteWithdrawAccountTypeItem: (data) => axios.delete('/api-b/dictionary/delete', data), // 删除出款商户类型

  fetchWithdrawAccountList: (options) => axios.get('/api-b/paymentMerchant', options), // 出款商户配置列表
  updateWithdrawAccountItem: (data) => axios.put('/api-b/paymentMerchant/save', data), // 创建与修改出款商户配置
  deleteWithdrawAccountItem: (data) => axios.delete('/api-b/paymentMerchant/delete', data), // 删除出款商户配置

  fetchRemittanceShortcutType: (options) => axios.get('/api-b/dictionary/list', options), // 汇款快捷支付设置类型列表
  fetchTransactionRemittanceShortcut: (options) => axios.get('/api-b/configQuickPay/list', options), // 汇款快捷列表
  createTransactionRemittanceShortcut: (data) => axios.post('/api-b/configQuickPay/save', data), // 创建新会员汇款设置
  updateTransactionRemittanceShortcut: (data) => axios.post('/api-b/configQuickPay/save', data), // 创建新会员汇款设置
  deleteTransactionRemittanceShortcut: (options) => axios.get('/api-b/configRemit/delete', options), // 删除会员汇款设置

  /* ===================================== 代理管理 ======================================= */

  createAgentUserAccount: (data) => axios.put('/api-p/agent/create', data), // 创建代理会员

  fetchAgentAccountList: (options) => axios.get('/api-p/agent', options), // 代理会员列表
  updateAgentSeniorLevel: (data) => axios.put('/api-p/agent/updateParent', data), // 修改上级分润
  fetchAgentAccountInterest: (options) => axios.get('/api-p/agent/rate', options), // 获取会员分润比例
  updateAgentAccountInterest: (data) => axios.put('/api-p/agent/rate', data), // 修改会员分润比例

  fetchAgentInvitationCode: (options) => axios.get('/api-u/userRelation', options), // 邀请码列表
  deleteAgentInvitationCodeItem: (options) => axios.delete('/api-u/userRelation/delete', options), // 删除邀请码

  fetchAgentPerformanceList: (options) => axios.get('/api-p/agent/statistics', options), // 代理线条业绩列表/代理个人业绩

  fetchAgentInterestGame: (options) => axios.get('/api-b/dictionary/list', options), // 游戏分润基数列表
  updateInterestGame: (data) => axios.put('/api-b/dictionary/batchSave', data), // 保存游戏分润基数

  fetchAgentInterestSetting: (options) => axios.get('/api-p/commisionConfig', options), // 会员分润设置列表
  updateAgentInterestSettingItem: (data) => axios.put('/api-p/commisionConfig/save', data), // 创建与修改会员分润设置
  deleteAgentInterestSettingItem: (options) => axios.delete('/api-p/commisionConfig/delete', options), // 删除会员分润设置

  /* ===================================== 优惠活动 ======================================= */

  fetchActivityList: (options) => axios.get('/api-n/activity', options), // 优惠活动列表
  updateActivityItem: (data) => axios.post('/api-n/activity/save', data), // 创建与修改优惠活动信息
  deleteActivityItem: (options) => axios.delete('/api-n/activity/delete', options), // 删除优惠活动

  /* ===================================== 公告管理 ======================================= */
  fetchNoticeList: (options) => axios.get('/api-n/notice', options), // 公告列表
  updateNoticeItem: (data) => axios.post('/api-n/notice/save', data), // 创建与修改公告
  deleteNoticeItem: (data) => axios.delete('/api-n/notice/delete', data), // 删除公告

  fetchSystemNoticeList: (options) => axios.get('/api-n/sysnotice', options), // 系统公告列表
  updateSystemNoticeItem: (data) => axios.post('/api-n/sysnotice/save', data), // 创建与修改系统公告
  deleteSystemNoticeItem: (data) => axios.delete('/api-n/sysnotice/delete', data), // 删除系统公告

  fetchSystemMessageList: (options) => axios.get('/api-n/sysmessage', options), // 系统消息列表
  updateSystemMessageItem: (data) => axios.post('/api-n/sysmessage/save', data), // 创建与修改系统消息
  deleteSystemMessageItem: (data) => axios.delete('/api-n/sysmessage/delete', data), // 删除系统消息

  fetchNoticeSettingTypeList: (options) => axios.get('/api-b/dictionary/list', options), // 公告类型列表
  updateNoticeSettingTypeItem: (data) => axios.post('/api-b/dictionary/save', data), // 创建与修改公告类型
  deleteNoticeSettingTypeItem: (data) => axios.delete('/api-b/dictionary/delete', data), // 删除公告类型

  /* ===================================== 网站管理 ======================================= */

  fetchWebsiteStandbyList: (options) => axios.get('/api-b/website', options), // 备用网站列表
  updateWebsiteStandbyItem: (data) => axios.put('/api-b/website/save', data), // 创建与修改备用网站配置
  deleteWebsiteStandbyItem: (options) => axios.delete('/api-b/website/delete', options), // 删除备用网站

  fetchWebsiteRegistryUserList: (options) => axios.get('/api-b/dictionary/list', options), // 会员注册配置列表
  updateWebsiteRegistryUserItem: (data) => axios.put('/api-b/dictionary/save', data), // 创建与修改会员注册配置
  deleteWebsiteRegistryUserItem: (options) => axios.delete('/api-b/dictionary/delete', options), // 删除会员注册配置

  fetchWebsiteImagePhoneList: (options) => axios.get('/api-b/cover', options), // 手机首页图片列表
  updateWebsiteImagePhoneItem: (data) => axios.put('/api-b/cover/save', data), // 创建与修改手机首页图片
  deleteWebsiteImagePhoneItem: (options) => axios.delete('/api-b/cover/delete', options), // 删除手机首页图片

  fetchWebsiteMenuList: (options) => axios.get('/api-b/webMenu', options), // 网站菜单管理列表
  updateWebsiteMenuItem: (data) => axios.put('/api-b/webMenu/save', data), // 创建与修改网站菜单管理
  deleteWebsiteMenuItem: (options) => axios.delete('/api-b/webMenu/delete', options), // 删除网站菜单管理

  fetchWebsiteFeedbackList: (options) => axios.get('/api-b/feedback', options), // 问题反馈管理列表
  updateWebsiteFeedbackItem: (data) => axios.put('/api-b/feedback/save', data), // 创建与修改问题反馈管理
  deleteWebsiteFeedbackItem: (options) => axios.delete('/api-b/feedback/delete', options) // 删除问题反馈管理
}
