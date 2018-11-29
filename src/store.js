import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, value) {
      state.user = value
    }
  },
  actions: {
    getUser ({ commit }, { username, success, fail } = {}) {
      api.getUser(username, (response) => {
        commit('setUser', response.data)
        if (success) success(response)
      }, fail)
    }
  }
})
