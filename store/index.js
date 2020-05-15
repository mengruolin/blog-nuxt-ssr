import user from './modules/user/user.js'
import bbs from './modules/bbs/bbs.js'
import blog from './modules/blog/blog'

export { state, actions, mutations, getters } from './modules/global/global.js'
export const modules = { user, bbs, blog }
