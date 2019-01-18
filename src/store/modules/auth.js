import axios from 'axios'
import router from '@/router/index'

import { Message } from 'element-ui'

const state = {
  token: {}
}

const getters = {
  token (state) {
    return state.token
  }
}

const mutations = {
  initToken (state, payload) {
    state.token = payload
  },
  clearToken (state) {
    state.token = {}
  }
}

const actions = {
  clearToken ({ commit }) {
    commit('clearToken')
  },
  // 登录 -- 存储token，调整到主页
  login ({ commit, state }, payload) {
    axios.post('/api-u/sys/login', payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': ''
      }
    }).then(response => {
      const { token_type, access_token, refresh_token, sessionId } = response.data
      commit('initToken', {
        type: token_type,
        access: access_token,
        refresh: refresh_token,
        sessionId
      })

      axios.defaults.headers.common['Authorization'] = `${token_type} ${access_token}`
      axios.defaults.headers.common['sessionId'] = `${sessionId}`

      this.commit('tab/clearRoutes') // 清除所有的浏览记录

      router.push({ name: 'HomePage' })
    }).catch((error) => {
      if (error.message === 'Network Error') {
        Message.warning('服务器异常，请稍后重试')
      } else {
        Message.warning('帐号与密码不匹配')
      }
    })
  },
  // 登出 -- token设置为空，调整到用户登录页
  logout ({ commit }) {
    axios.get('/api-u/sys/logout').then(response => {
      commit('clearToken') // 清除token相关的数据
      this.commit('tab/clearRoutes') // 清除所有的浏览记录
      this.commit('sidebar/updateActiveMenu', 'demo') // 同步更新侧边栏菜单，全部收起状态

      router.push({ name: 'LoginUsername' })
    }).catch(error => console.log(error))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
