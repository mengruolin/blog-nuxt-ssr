import { createActions } from '../../untils/helps'
import { SET_USERINFO } from '../global/mutation-types'
import {
  apiLogin,
  apiLogOut,
  apiRegister,
  HANDLE_LOGOUT
} from './mutation-types'

const actions = {
  login: createActions('postl', apiLogin, SET_USERINFO),
  register: createActions('postl', apiRegister, SET_USERINFO),
  logOut: createActions('getl', apiLogOut, HANDLE_LOGOUT)
}

export default actions
