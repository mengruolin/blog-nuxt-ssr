import getters from './getters'
import actions from './actions'

import {
  SET_BBSTABS,
  SET_BBSBROWSELISTTOPICS
} from './mutation-types'

const state = () => ({
  bbsTabs: [],
  bbsBrowseListTopicsList: []
})

const mutations = {
  [SET_BBSTABS] (state, res) {
    state.bbsTabs = res.data
  },
  [SET_BBSBROWSELISTTOPICS] (state, res) {
    state.bbsBrowseListTopicsList = res.data
  }
}

export default { state, actions, mutations, getters }
