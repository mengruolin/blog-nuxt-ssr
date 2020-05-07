import user from './modules/user/user.js'
import bbs from './modules/bbs/bbs.js'

export { state, actions, mutations, getters } from './modules/global/global.js'
export const modules = { user, bbs }
