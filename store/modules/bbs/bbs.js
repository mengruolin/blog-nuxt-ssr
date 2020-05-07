import getters from './getters'
import actions from './actions'

import {
  SET_BBSTABS
} from './mutation-types'

const state = () => ({
  bbsTabs: []
})

const mutations = {
  [SET_BBSTABS] (state, res) {
    state.bbsTabs = res.data
  }
}

export default { state, actions, mutations, getters }
