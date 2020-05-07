import { createActions } from '../../untils/helps'
import {
  apiBbsTabs,
  SET_BBSTABS
} from './mutation-types'

const actions = {
  getBbsTabs: createActions('get', apiBbsTabs, SET_BBSTABS)
}

export default actions
