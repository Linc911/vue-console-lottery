import axios from 'axios'
import _ from 'lodash'

const state = {
  menu: [],
  activeMenu: ''
}

const getters = {
  menu: (state) => state.menu,
  activeMenu: (state) => state.activeMenu
}

const mutations = {
  refreshMenu: (state, payload) => (state.menu = payload),
  // payload 传入的是菜单的中文名称，不是id
  updateActiveMenu: (state, payload) => (state.activeMenu = payload)
}

const actions = {
  refreshMenu: ({ commit }) => {
    axios.get('/api-b/menus/all').then(response => {
      const menu = _.groupBy(response.data, 'parentId')
      commit('refreshMenu', menu)
    }).catch(error => console.log(error))
  },
  updateActiveMenu: ({ commit }, payload) => commit('updateActiveMenu', payload)
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
