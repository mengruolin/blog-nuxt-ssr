// action构造函数
// import http from './http.js'
// import env from './env'
import http from './http'

export default function createActions (methods, url, mutations, init) {
  // url = `/test`
  return async function ({ commit }, params) {
    // console.log(params)
    const res = await http.getl(url, params)
    return res.data
  }
}
