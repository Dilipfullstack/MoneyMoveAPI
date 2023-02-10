import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    user: null,
    userId: null,
    isUserLoggedIn: false

  },
  getters: {
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    setUserId (state, userId) {
      state.userId = userId
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    setUserId ({ commit }, userId) {
      commit('setUserId', userId)
    }
  },
  modules: {
  }
})
