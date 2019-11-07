// action构造函数
// import http from './http.js'
// import env from './env'
import http from './http'

export default function createActions (methods, url, mutations, init) {
  // url = `/test`
  return function (parmase) {
    // console.log()
    return http[methods](url, parmase)
  }
}
