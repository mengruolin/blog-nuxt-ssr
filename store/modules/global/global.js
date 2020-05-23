import actions from './actions.js'
import getters from './getters.js'
import consts from './consts.js'
import {
  SET_USERINFO
} from './mutation-types'

const state = () => ({
  disableLoad: false,
  hiddenHeader: true,
  userInfo: null,
  ...consts
})

const mutations = {
  [SET_USERINFO] (state, res) {
    // console.log(res)

    state.userInfo = res.data
  },
  changeDisableLoad (state, type) {
    state.disableLoad = type
  },
  handleHiddenHeader (state, type) {
    state.hiddenHeader = type
  }
}

export { state, actions, mutations, getters }
