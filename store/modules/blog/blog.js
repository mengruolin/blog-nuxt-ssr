import getters from './getters'
import actions from './actions'
import {
  SET_BLOGTABS
} from './mutation-types'

const state = () => ({
  blogTabs: []
})

const mutations = {
  [SET_BLOGTABS] (state, res) {
    state.blogTabs = res.data
  }
}

export default { state, actions, mutations, getters }
