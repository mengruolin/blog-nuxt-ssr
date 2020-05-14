import { createAjax } from '../untils/helps.js'
import {
  apiCheshi,
  apiSearchUser,
  apiBbsTopics,
  apiOneBbsTopics,
  apiCreateTopic,
  apiCreateBbsReply,
  apiGetBbsReply,
  apiGetBrowseListTopics
} from './types.js'

export const getTest = createAjax('get', apiCheshi)

export const getOssKey = createAjax('get', '/updata/getToken')

export const getUserInfo = createAjax('get', apiSearchUser)

export const getBbsTopics = createAjax('getl', apiBbsTopics)

export const getOneBbsTopics = createAjax('getl', apiOneBbsTopics)

export const createTopic = createAjax('postl', apiCreateTopic)

// 提交bbs回复
export const createBbsReply = createAjax('postl', apiCreateBbsReply)

// 获取bbs 回复
export const getBbsReply = createAjax('get', apiGetBbsReply)

//
export const getBrowseListTopics = createAjax('get', apiGetBrowseListTopics)
