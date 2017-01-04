import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  test: 123,
  response: {},
  testArray: [1, 2, 3]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: []
})
