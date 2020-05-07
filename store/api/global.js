import { createAjax } from '../untils/helps.js'
import {
  apiCheshi,
  apiSearchUser,
  apiBbsTopics,
  apiOneBbsTopics,
  apiCreateTopic
} from './types.js'

export const getTest = createAjax('get', apiCheshi)

export const getOssKey = createAjax('get', '/updata/getToken')

export const getUserInfo = createAjax('get', apiSearchUser)

export const getBbsTopics = createAjax('getl', apiBbsTopics)

export const getOneBbsTopics = createAjax('getl', apiOneBbsTopics)

export const createTopic = createAjax('postl', apiCreateTopic)
