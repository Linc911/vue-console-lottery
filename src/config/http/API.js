import axios from './index'

export default {
  /* 会员管理 */
  // 会员分组
  fetchUsersGroupList: options => axios.get('/api-u/group/list', options),
  fetchUsersGroupLItem: options => axios.get('/api-u/group/info', options),
  postUsersGroupCreate: (data, options) => axios.post('/api-u/group/save', data, options),

  // 会员抽点
  fetchUsersRebate: options => axios.get('/api-u/userRelation/get', options),
  updateUsersRebate: (data, options) => axios.post('/api-u/group/save', data, options),

  // 修改会员监控状态
  updateUserControlStatus: (data, options) => axios.post('/api-u/backend/updateControl', data, options)
}
