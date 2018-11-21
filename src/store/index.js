import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import auth from './modules/auth'
import tab from './modules/tab'
import sidebar from './modules/sidebar'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  modules: {
    auth,
    tab,
    sidebar
  },
  // 处理页面刷新时，Vuex 状态丢失问题
  plugins: [createPersistedState()]
})
