import axios from 'axios'
import _ from 'lodash'

const state = {
  menu: []
}

const getters = {
  menu (state) {
    return state.menu
  }
}

const mutations = {
  refreshMenu (state, payload) {
    state.menu = payload
  }
}

const actions = {
  refreshMenu ({ commit }) {
    axios.get('/api-b/menus/all').then(response => {
      const menu = _.groupBy(response.data, 'parentId')
      commit('refreshMenu', menu)
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
