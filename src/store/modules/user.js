import { ADD_USERS_GROUP, INIT_USERS_GROUP } from '../mutation-types'

const userManage = {
  state: {
    usersGroup: [],
    gamesList: []
  },
  getters: {
  },
  mutations: {
    [ADD_USERS_GROUP] (state, group) {
      state.usersGroup = group
    },
    [INIT_USERS_GROUP] (state, group) {
      state.userGroup = []
    }
  },
  actions: {
    addUsersGoup ({ commit }, group) {
      commit('ADD_USERS_GROUP', group)
    },
    deleteUsersGroup ({ commit }) {
      commit('INIT_USERS_GROUP')
    }
  }
}

export default userManage
