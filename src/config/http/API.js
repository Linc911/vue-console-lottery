import axios from './index'

export default {
  /* 公共数据 */
  fetchGamesMenu: () => axios.get('/api-g/GameTypeConfig/tree'), // 彩票游戏菜单
  fetchGamesList: () => axios.get('/api-g/gameconfig'), // 游戏类型/账户类型
  fetchUserId: options => axios.get('/api-u/users-anon/getUserId', options), // 查询会员ID

  /* 登录 */
  postUserLogin: (data, options) => axios.post('/api-u/sys/login', data, options),
  fetchLogoutInfo: () => axios.get('/api-u/sys/logout'),

  fetchUserInfo: () => axios.get('/api-u/users/current'),
  putUserInfo: data => axios.put('/api-u/users/me', data),

  /* 系统管理 */
  // 会员分组
  fetchUserGroups: options => axios.get('/api-u/group/list', options), // 全部列表
  fetchSystemGroupItem: options => axios.get('/api-u/group/info', options), // 单个详情
  postSystemGroupChange: data => axios.post('/api-u/group/save', data), // 创建或修改单个分组
  postUserGroupSetting: options => axios.get('/api-u/group/saveRelation', options), // 设置单个会员分组

  // 彩票设置
  fetchLotterySettingInfo: options => axios.get('/api-g/GameTypeConfig/get', options),

  /* 会员管理 */
  // 会员信息
  fetchUsersList: options => axios.get('/api-u/backend/userList', options), // 全部会员信息列表
  getUserInfo: options => axios.get('/api-u/backend/user', options), // 单个会员信息

  // 会员抽点
  getUsersRebate: options => axios.get('/api-u/userRelation/get', options),
  updateUsersRebate: (data, options) => axios.post('/api-u/group/save', data, options),

  // 修改会员监控状态
  updateUserControlStatus: (data, options) => axios.post('/api-u/backend/updateControl', data, options),

  // 全部会员日志
  fetchUsersLogs: (options) => axios.get('/api-l/logList', options),

  /* 彩票管理 */
  // 开奖结果
  fetchLotteryResultsEleven: options => axios.get('/api-g/result/1', options),
  fetchLotteryResultsFast3: options => axios.get('/api-g/result/2', options),

  updateLotteryResultEleven: options => axios.get('/api-g/result/1/settlement', options), // 手动修改开奖结果
  updateLotteryResultFast3: options => axios.get('/api-g/result/2/settlement', options),

  cancelLotteryResultEleven: options => axios.get('/api-g/result/1/cancel', options), // 撤单
  cancelLotteryResultFast3: options => axios.get('/api-g/result/2/cancel', options),
  // 赔率设置
  fetchLotteryOddsEleven: options => axios.get('/api-g/oddsset/1', options), // 赔率11选5列表
  fetchLotteryOddsFast3: options => axios.get('/api-g/oddsset/2', options), // 赔率快3列表
  postLotteryOddsEleven: data => axios.post('/api-g/oddsset/1/save', data), // 修改单个11选5的赔率
  postLotteryOddsFast3: data => axios.post('/api-g/oddsset/2/save', data), // 修改单个快3的赔率

  /* 财务管理 */
  fetchBalanceChangeList: options => axios.get('/api-p/remitInfo/list', options), // 填单存款管理列表
  fetchBalanceChangeItem: options => axios.get('/api-p/changeUserRecharge/info', options), // 加减款每项详情
  saveFinanceBalanceChange: data => axios.post('/api-p/changeUserRecharge/save', data), // 提交加减款表单（数据更新到填单存款管理列表中）
  updateDepositFormStatus: options => axios.get('/api-p/changeUserRecharge/audit', options), // 审批加减款操作

  createFinanceLimitChange: data => axios.post('/api-u/convertRecharge/add', data), // 额度转换管理列表
  fetchFinanceLimitChange: options => axios.get('/api-u/convertRecharge/list', options), // 额度转换每项详情
  updateFinanceLimitChangeStatus: options => axios.get('/api-u/convertRecharge/audit', options), // 审批额度转换状态

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

  // 会员返水
  rebateList: options => axios.get('/api-b/rebate/list', options), // 会员返水设置列表
  rebateSave: data => axios.post('/api-b/rebate/save', data), // 会员返水设置保存
  rebateStatus: options => axios.get('/api-b/rebate/status', options), // 会员返水设置修改状态
  rebateLogList: options => axios.get('/api-b/rebateLog/list', options), // 会员返水信息列表
  statistic: options => axios.get('/api-b/rebateLog/statistic', options), // 会员返水信息统计

  /* 收款出款 */
  fetchTransactionPaymentType: options => axios.get('/api-b/configPayType/list', options), // 支付类型列表
  createTransactionPaymentType: data => axios.post('/api-b/configPayType/save', data), // 创建新支付类型
  updateTransactionPaymentType: data => axios.post('/api-b/configPayType/update', data), // 修改支付类型配置

  fetchTransactionPaymentPort: data => axios.post('/api-b/configPayInterface/list', data), // 支付接口列表
  createTransactionPaymentPort: data => axios.post('/api-b/configPayInterface/save', data), // 支付接口列表
  fetchTransactionPortType: options => axios.get('/api-b/dictionary/list', options), // 接口类型列表

  fetchTransactionPortLine: options => axios.get('/api-b/configPayRoute/list', options), // 支付路线类型列表
  createTransactionPortLine: data => axios.post('/api-b/configPayRoute/save', data), // 创建新支付路线（可一对多）
  deleteTransactionPortLine: data => axios.post('/api-b/configPayRoute/deleteMany', data) // 删除路线配置
}
