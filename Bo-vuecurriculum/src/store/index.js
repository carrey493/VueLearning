import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

const myState = {
  user: {
    name: 'Bo',
    address: '910',
  },
}
const myMutations = {
  [types.UPDATEUESR](state, data) {
    state.user = data
  },
}
const myActions = {
  [types.UPDATEUESR]({ commit }, data) {
    setTimeout(() => {
      commit(types.UPDATEUESR, data)
    }, 2000)
  },
}

export default new Vuex.Store({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {},
})
