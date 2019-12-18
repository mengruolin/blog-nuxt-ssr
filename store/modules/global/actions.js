import { createActions } from '../../untils/helps.js'

const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session.userInfo) {
      commit('setUserInfo', req.session.userInfo)
    }
  },
  test: createActions('getl', '/cheshi')
}

export default actions
