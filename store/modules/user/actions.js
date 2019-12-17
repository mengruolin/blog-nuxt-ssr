import { createActions } from '../../untils/helps'
import {
  apiLogin
} from './mutation-types'

const actions = {
  login: createActions('postl', apiLogin)
}

export default actions
