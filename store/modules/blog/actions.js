import { createActions } from '../../untils/helps'

import {
  apiBlogTabs,
  SET_BLOGTABS
} from './mutation-types'

const actions = {
  getBlogTabs: createActions('get', apiBlogTabs, SET_BLOGTABS)
}

export default actions
