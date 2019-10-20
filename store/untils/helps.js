// action构造函数
// import http from './http.js'
import env from './env.js'

export default function createActions (methods, url, mutations, init) {
  url = `${env.baseApi}/url`
  return function () {
    console.log('eee:' + url)
  }
}
