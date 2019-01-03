import router from '@/router/index'

export default {
  namespaced: true,

  state: {
    routes: []
  },
  getters: {
    routes (state) {
      return state.routes
    },
    getPreviousRoutePath: (state) => (index) => state.routes[index - 1].path
  },
  mutations: {
    /* 浏览记录栏 */
    initRoutesStatus (state) {
      state.routes.forEach(route => (route.active = false))
    },
    clearRoutes (state) {
      state.routes = []
    },
    addRoute (state, payload) {
      state.routes.push(payload)
    },
    removeRoute (state, payload) {
      state.routes.splice(payload, 1)
    },
    removeLeftRoutes (state, payload) {
      state.routes = state.routes.slice(payload)
    },
    removeRightRoutes (state, payload) {
      state.routes = state.routes.slice(0, payload + 1)
    },
    removeOtherRoutes (state, payload) {
      state.routes = state.routes.splice(payload, 1)
    },
    highlightRoute (state, payload) {
      if (typeof payload === 'number') {
        state.routes[payload - 1].active = true
      } else {
        state.routes.forEach((route) => {
          if (route.path === payload) {
            route.active = true
          } else {
            route.active = false
          }
        })
      }
    }
  },
  actions: {
    initRoutesStatus ({ commit }) {
      commit('initRoutesStatus')
    },
    clearRoutes ({ commit }) {
      commit('clearRoutes')
      router.push({ name: 'HomePage' })
      this.commit('sidebar/updateActiveMenu', 'demo') // 同步更新侧边栏菜单，全部收起状态
    },
    addRoute ({ commit }, payload) {
      commit('addRoute', payload)
    },
    removeRoute ({ commit, state }, payload) {
      if (payload) {
        // 如果当前删除的是active标签
        if (state.routes[payload].active) {
          state.routes[payload - 1].active = true // 前一个标签高亮状态
          router.push(state.routes[payload - 1].path) // 调整路由
          // 同步更新侧边栏菜单
          this.commit('sidebar/updateActiveMenu', state.routes[payload - 1].name)
        }
      } else {
        // 如果删除的是最后一个浏览记录导航菜单
        if (state.routes.length === 1) router.push({ name: 'HomePage' }) // 回到首页
        this.commit('sidebar/updateActiveMenu', 'demo') // 同步更新侧边栏菜单，全部收起状态
      }

      commit('removeRoute', payload) // 删除该导航菜单
    },
    removeLeftRoutes ({ commit, state }, payload) {
      router.push(state.routes[payload].path)

      commit('removeLeftRoutes', payload)
      this.commit('sidebar/updateActiveMenu', state.routes[payload].name)
    },
    removeRightRoutes ({ commit, state }, payload) {
      router.push(state.routes[payload].path)

      commit('removeRightRoutes', payload)
      this.commit('sidebar/updateActiveMenu', state.routes[payload].name)
    },
    removeOtherRoutes ({ commit, state }, payload) {
      router.push(state.routes[payload].path)

      commit('removeOtherRoutes', payload)
      this.commit('sidebar/updateActiveMenu', state.routes[payload].name)
    },
    highlightRoute ({ commit }, paylod) {
      commit('highlightRoute', paylod)
    }
  }
}
