import { createActions } from '../../untils/helps.js'

const actions = {
  async nuxtServerInit ({ dispatch, commit }, { req }) {
    const token = req.session.token
    if (token) {
      try {
        const res = await dispatch('login', token)
        if (res.code === '0') {
          commit('SET_USERINFO', res)
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  test: createActions('getl', '/cheshi')
}

export default actions
