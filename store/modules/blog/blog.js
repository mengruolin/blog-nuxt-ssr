import getters from './getters'
import actions from './actions'
import {
  SET_BLOGTABS,
  SET_BLOGGOODLISTTOPICS
} from './mutation-types'

const state = () => ({
  blogTabs: [],
  blogGoodListTopics: []
})

const mutations = {
  [SET_BLOGTABS] (state, res) {
    state.blogTabs = res.data
  },
  [SET_BLOGGOODLISTTOPICS] (state, res) {
    state.blogGoodListTopics = res.data
  }
}

export default { state, actions, mutations, getters }
