import actions from './actions.js'
import getters from './getters.js'
import consts from './consts.js'

const state = () => ({
  disableLoad: false,
  ...consts
})

const mutations = {
  changeDisableLoad (state, type) {
    state.disableLoad = type
  }
}

export { state, actions, mutations, getters }
