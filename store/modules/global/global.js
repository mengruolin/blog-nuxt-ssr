import actions from './actions.js'
import getters from './getters.js'

const state = () => ({
  disableLoad: false
})

const mutations = {
  changeDisableLoad (state, type) {
    state.disableLoad = type
  }
}

export { state, actions, mutations, getters }
