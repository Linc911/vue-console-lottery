import axios from './index'

export default {
  /* 公共数据 */
  fetchGamesMenu: () => axios.get('/api-g/GameTypeConfig/tree'), // 彩票游戏菜单
  fetchGamesList: () => axios.get('/api-g/gameconfig'), // 游戏菜单

  /* 登录 */
  postUserLogin: (data, options) => axios.post('/api-u/sys/login', data, options),
  fetchLogoutInfo: () => axios.get('/api-u/sys/logout'),

  fetchUserInfo: () => axios.get('/api-u/users/current'),
  putUserInfo: data => axios.put('/api-u/users/me', data),

  /* 系统管理 */
  // 会员分组
  getSystemGroup: options => axios.get('/api-u/group/list', options), // 全部列表
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

  // 赔率设置
  fetchLotteryOddsEleven: options => axios.get('/api-g/oddsset/1', options), // 赔率11选5列表
  fetchLotteryOddsFast3: options => axios.get('/api-g/oddsset/2', options), // 赔率快3列表
  postLotteryOddsEleven: data => axios.post('/api-g/oddsset/1/save', data), // 修改单个11选5的赔率
  postLotteryOddsFast3: data => axios.post('/api-g/oddsset/2/save', data), // 修改单个快3的赔率

  /* 财务管理 */
  fetchFinanceSheet: options => axios.get('/api-u/backend/finance/statistics', options), // 会员财务报表
  fetchBalanceChangeList: options => axios.get('/api-b/changeUserRecharge/list', options), // 全部加减款数据（填单存款管理）
  saveFinanceBalanceChange: data => axios.post('/api-b/changeUserRecharge/save', data), // 提交加减款表单（数据更新到填单存款管理列表中）
  fetchBalanceChangeItem: options => axios.get('/api-m/changeUserRecharge/info', options), // 全部单条加减款详情
  updateDepositFormStatus: options => axios.get('/api-b/changeUserRecharge/audit', options), // 审批加减款操作

  createFinanceLimitChange: data => axios.post('/api-u/convertRecharge/add', data), // 额度转换管理列表
  fetchFinanceLimitChange: options => axios.get('/api-u/convertRecharge/list', options), // 额度转换每项详情
  updateFinanceLimitChangeStatus: options => axios.get('/api-u/convertRecharge/audit', options), // 审批额度转换状态

  fetchFinanceLoanList: options => axios.get('/api-b/dictionary/list', options), // 借贷类型列表
  createFinanceLoan: data => axios.post('/api-b/dictionary/save', data), // 创建与更新借贷类型数据
  deleteFinanceLoan: options => axios.get('/api-b/dictionary/delete', options), // 删除借贷类型数据

  // 会员返水
  rebateList: options => axios.get('/api-b/rebate/list', options), // 会员返水设置列表
  rebateSave: data => axios.post('/api-b/rebate/save', data), // 会员返水设置保存
  rebateStatus: options => axios.get('/api-b/rebate/status', options), // 会员返水设置修改状态
  rebateLogList: options => axios.get('/api-b/rebateLog/list', options) //会员返水信息列表
}
