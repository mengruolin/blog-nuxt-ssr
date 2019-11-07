import axios from 'axios'
// import QS from 'qs'
import { Loading } from 'element-ui'
import env from './env'

let loadingInstance = null

axios.defaults.timeout = 10000
axios.defaults.baseURL = env.baseURL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use((config) => {
  // Do something before request is sent
  console.log(config)
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  // Do something before response is sent
  loadingInstance && loadingInstance.close()

  return response
}, (error) => {
  // Do something with response error
  return Promise.reject(error)
})

const get = (url, parmase) => {
  return axios.get(url, { parmase })
}

const getl = (url, parmase) => {
  loadingInstance = Loading.service({ fullscreen: true })
  return axios.get(url, { parmase })
}

const post = (url, parmase) => {
  return axios.post(url, parmase)
}

const postl = (url, parmase) => {
  loadingInstance = Loading.service({ fullscreen: true })
  return axios.post(url, parmase)
}

export default {
  get,
  getl,
  post,
  postl
}
