import { createActions } from '../../untils/helps'

import {
  apiBlogTabs,
  SET_BLOGTABS,
  apiGetGoodListTopics,
  SET_BLOGGOODLISTTOPICS
} from './mutation-types'

const actions = {
  getBlogTabs: createActions('get', apiBlogTabs, SET_BLOGTABS),
  getBlogGoodListTopics: createActions('get', apiGetGoodListTopics, SET_BLOGGOODLISTTOPICS)
}

export default actions
