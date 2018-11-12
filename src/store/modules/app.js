import axios from 'axios'
import router from '@/router'

import {
  INIT_TOKEN,
  CLEAR_TOKEN,
  FETCH_USER,
  INIT_HISTORY_ROUTES_STATUS,
  ADD_HISTORY_ROUTES,
  REMOVE_HISTORY_ROUTES,
  CLEAR_HISTORY_ROUTES,
  HIGHLIGHT_HISTORY_ROUTES
} from '../mutation-types'

const app = {
  state: {
    user: {},
    historyRoutes: [],
    token: null
  },
  getters: {
    nickname (state) {
      return state.user.nickname
    }
  },
  mutations: {
    /* token */
    [INIT_TOKEN] (state, data) {
      state.token = data
    },
    [CLEAR_TOKEN] (state) {
      state.token = null
    },
    /*  */
    [FETCH_USER] (state, user) {
      state.user = user
    },
    /* 浏览记录栏 */
    [INIT_HISTORY_ROUTES_STATUS] (state) {
      state.historyRoutes.forEach(route => (route.active = false))
    },
    [ADD_HISTORY_ROUTES] (state, route) {
      state.historyRoutes.push(route)
    },
    [REMOVE_HISTORY_ROUTES] (state, index) {
      state.historyRoutes.splice(index, 1)
    },
    [CLEAR_HISTORY_ROUTES] (state) {
      state.historyRoutes = []
    },
    [HIGHLIGHT_HISTORY_ROUTES] (state, path) {
      state.historyRoutes.forEach(route => {
        if (route.path === path) {
          route.active = true
        } else {
          route.active = false
        }
      })
    }
  },
  actions: {
    /* token */
    // 登录 -- 存储token，调整到主页
    login ({ commit, state }, data) {
      axios.post('/api-u/sys/login', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Authorization': ''
        }
      }).then(response => {
        const { token_type, access_token, refresh_token } = response.data
        commit('INIT_TOKEN', {
          type: token_type,
          access: access_token,
          refresh: refresh_token
        })

        axios.defaults.headers.common['Authorization'] = `${token_type} ${access_token}`

        router.push({ name: 'HomePage' })
      }).catch(error => console.log(error))
    },
    // 登出 -- token设置为空，调整到用户登录页
    logout ({ commit, state }) {
      axios.get('/api-u/sys/logout').then(response => {
        commit('CLEAR_TOKEN')
        commit('CLEAR_HISTORY_ROUTES')

        router.push({ name: 'LoginUsername' })
      }).catch(error => console.log(error))
    },
    /*  */
    fetchUser ({ commit }, user) {
      commit('FETCH_USER', user)
    },
    /* 浏览记录栏 */
    initHistoryRoutesStatus ({ commit }) {
      commit('INIT_HISTORY_ROUTES_STATUS')
    },
    addHistoryRoutes ({ commit }, route) {
      commit('ADD_HISTORY_ROUTES', route)
    },
    removeHistoryRoutes ({ commit }, index) {
      commit('REMOVE_HISTORY_ROUTES', index)
    },
    highlightHistoryRoutes ({ commit }, index) {
      commit('HIGHLIGHT_HISTORY_ROUTES', index)
    }
  }
}

export default app
