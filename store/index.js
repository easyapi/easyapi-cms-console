import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    user
  },
  state: {
    serviceName: ''
  },
  mutations: {
    SET_SERVICE_NAME: (state, name) => {
      state.serviceName = name
    }
  },
  actions: {},
  getters
})

export default store
