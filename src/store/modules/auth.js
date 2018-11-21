import axios from 'axios'
import router from '@/router'

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
      const { token_type, access_token, refresh_token } = response.data
      commit('initToken', {
        type: token_type,
        access: access_token,
        refresh: refresh_token
      })

      axios.defaults.headers.common['Authorization'] = `${token_type} ${access_token}`

      router.push({ name: 'HomePage' })
    }).catch(error => console.log(error))
  },
  // 登出 -- token设置为空，调整到用户登录页
  logout ({ commit, dispatch, state }) {
    axios.get('/api-u/sys/logout').then(response => {
      commit('clearToken')
      dispatch('auth/tab/clearRoutes')
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
