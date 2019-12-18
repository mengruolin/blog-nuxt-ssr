import { createActions } from '../../untils/helps'
import {
  apiLogin,
  apiLogOut
} from './mutation-types'

const actions = {
  login: createActions('postl', apiLogin),
  logOut: createActions('getl', apiLogOut)
}

export default actions
