import { FETCH_USER } from '../mutation-types'

const app = {
  state: {
    user: {}
  },
  getters: {
    nickname (state) {
      return state.user.nickname
    }
  },
  mutations: {
    [FETCH_USER] (state, user) {
      state.user = user
    }
  },
  actions: {
    fetchUser ({ commit }, user) {
      commit('FETCH_USER', user)
    }
  }
}

export default app
