import getters from './getters'
import actions from './actions'
import { HANDLE_LOGOUT } from './mutation-types'

const state = () => ({
  userInfo: {}
})

const mutations = {
  [HANDLE_LOGOUT] (state, data) {
    console.log(data)
    console.log(window)
  }
}

export default { state, actions, mutations, getters }
