import {
  FETCH_USER,
  INIT_HISTORY_ROUTES_STATUS,
  ADD_HISTORY_ROUTES,
  REMOVE_HISTORY_ROUTES,
  HIGHLIGHT_HISTORY_ROUTES
} from '../mutation-types'

const app = {
  state: {
    user: {},
    historyRoutes: []
  },
  getters: {
    nickname (state) {
      return state.user.nickname
    }
  },
  mutations: {
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
