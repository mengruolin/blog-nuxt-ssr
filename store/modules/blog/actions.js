import { createActions } from '../../untils/helps'
import { SET_USERINFO } from '../global/mutation-types'
import {
  apiLogin,
  apiLogOut,
  apiRegister
} from './mutation-types'

const actions = {
  login: createActions('postl', apiLogin, SET_USERINFO),
  register: createActions('postl', apiRegister, SET_USERINFO),
  logOut: createActions('getl', apiLogOut)
}

export default actions
