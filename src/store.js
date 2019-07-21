import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  add () {
    state.count++
  }
}

const actions = {
  change: ({commit}) => {
    commit('add')
  }
}

export default new Vuex.Store({
  state, mutations, actions
})
