import axios from './index'

export default {
  /* 公共数据 */
  fetchGamesMenu: () => axios.get('/api-g/GameTypeConfig/tree'), // 游戏菜单

  /* 登录模块 */
  postUserLogin: (data, options) => axios.post('/api-u/sys/login', data, options),
  fetchLogoutInfo: () => axios.get('/api-u/sys/logout'),

  fetchUserInfo: () => axios.get('/api-u/users/current'),
  putUserInfo: data => axios.put('/api-u/users/me', data),

  /* 会员管理模块 */
  // 会员分组
  fetchUsersGroupList: options => axios.get('/api-u/group/list', options),
  fetchUsersGroupLItem: options => axios.get('/api-u/group/info', options),
  postUsersGroupCreate: (data, options) => axios.post('/api-u/group/save', data, options),

  // 会员抽点
  fetchUsersRebate: options => axios.get('/api-u/userRelation/get', options),
  updateUsersRebate: (data, options) => axios.post('/api-u/group/save', data, options),

  // 修改会员监控状态
  updateUserControlStatus: (data, options) => axios.post('/api-u/backend/updateControl', data, options),

  // 全部会员日志
  fetchUsersLogs: (options) => axios.get('/api-l/logList', options),

  /* 彩票管理模块 */
  // 开奖结果
  fetchLotteryResultsEleven: options => axios.get('/api-g/result/1', options),
  fetchLotteryResultsFast3: options => axios.get('/api-g/result/2', options),

  // 赔率设置
  fetchLotteryOddsEleven: options => axios.get('/api-g/oddsset/1', options), // 赔率11选5列表
  fetchLotteryOddsFast3: options => axios.get('/api-g/oddsset/2', options), // 赔率快3列表
  postLotteryOddsEleven: data => axios.post('/api-g/oddsset/1/save', data), // 修改单个11选5的赔率
  postLotteryOddsFast3: data => axios.post('/api-g/oddsset/2/save', data) // 修改单个快3的赔率
}
