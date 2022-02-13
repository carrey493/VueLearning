import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import axios from '@/axios/MyAxios'
import { updateRoutes } from '@/router/index'

Vue.use(Vuex)

const myState = {
  user: {
    name: 'Bo',
    address: '910',
  },
  homeworks: [],
  homework: { name: null, deadline: null },
  exception: {
    message: null,
  },
  isLogin: false,
}
const myMutations = {
  [types.UPDATEUESR](state, data) {
    state.user = data
  },
  [types.LIST_HOMEWORKS](state, data) {
    state.homeworks = data
  },
  [types.GET_HOMEWORK](state, data) {
    state.homework = data
  },
  [types.GET_EXCEPTION](state, data) {
    state.exception = data
  },
}
const myActions = {
  [types.UPDATEUESR]({ commit }, data) {
    setTimeout(() => {
      commit(types.UPDATEUESR, data)
    }, 2000)
  },
  async [types.LIST_HOMEWORKS]({ commit }, data) {
    let resp = await axios.get('homeworks')
    commit(types.LIST_HOMEWORKS, resp.data.homeworks)
  },
  /* async [types.GET_HOMEWORK]({ commit }, data) {
    let resp = await axios.get(`homework/${data.hid}`)
    commit(types.GET_HOMEWORK, resp.data.homework)
  }, */
  async [types.GET_HOMEWORK]({ commit }, data) {
    let resp = await axios.get(`homework/${data.hid}`)
    // commit(types.GET_HOMEWORK, resp.data.homework)
    return Promise.resolve(resp.data.homework)
  },
  async [types.LOGIN]({ commit }, data) {
    let resp = await axios.post('login', data)
    if (resp != null) {
      sessionStorage.setItem('Authorization', resp.headers['Authorization'])
      sessionStorage.setItem('role', resp.data.role)
      updateRoutes()
      commit(types.LOGIN, true)
    }
  },
  async index({ commit }, data) {
    let resp = await axios.get('index', data)
    commit('name', resp.data.name)
  },
}

export default new Vuex.Store({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {},
})

if (sessionStorage.getItem('Authorization') != null) {
  myState.isLogin = true
}
