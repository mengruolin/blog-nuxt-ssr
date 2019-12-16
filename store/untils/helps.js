import http from './http'

/*
*@ params {methods, url, mutations, init}
*   methods: http's methods
*   url: request url
*   mutations?: commit mutations
*   init?: is init
*
*@  return {promise}
*   params?: request body
*/
export const createActions = (methods, url, mutations, init) => {
  // url = `/test`
  return async function ({ commit }, params) {
    // console.log(params)
    const res = await http.getl(url, params)
    return res.data
  }
}

/*
* @params {methods, url}
*   methods: http's methods
*   url: request url
* @retunr {promise}
*   params?: request body
*/
export const createAjax = (methods, url) => async (params) => {
  const res = await http[methods](url, params)
  return res.data
}
