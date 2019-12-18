import actions from './actions.js'
import getters from './getters.js'
import consts from './consts.js'

const state = () => ({
  disableLoad: false,
  hiddenHeader: true,
  userInfo: null,
  ...consts
})

const mutations = {
  setUserInfo (state, data) {
    state.userInfo = data
  },
  changeDisableLoad (state, type) {
    state.disableLoad = type
  },
  handleHiddenHeader (state, type) {
    state.hiddenHeader = type
  }
}

export { state, actions, mutations, getters }
