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
    },
    addRoute ({ commit }, payload) {
      commit('addRoute', payload)
    },
    removeRoute ({ commit, state }, payload) {
      commit('removeRoute', payload)

      if (payload) {
        state.routes[payload - 1].active = true
        router.push(state.routes[payload - 1].path)
      } else {
        !state.routes.length && router.push({ name: 'HomePage' })
      }
    },
    removeLeftRoutes ({ commit, state }, payload) {
      router.push(state.routes[payload].path)
      commit('removeLeftRoutes', payload)
    },
    removeRightRoutes ({ commit, state }, payload) {
      router.push(state.routes[payload].path)
      commit('removeRightRoutes', payload)
    },
    removeOtherRoutes ({ commit, state }, payload) {
      router.push(state.routes[payload].path)
      commit('removeOtherRoutes', payload)
    },
    highlightRoute ({ commit }, paylod) {
      commit('highlightRoute', paylod)
    }
  }
}
