import { createAjax } from '../untils/helps.js'
import {
  apiCheshi,
  apiSearchUser,
  apiBbsTopics,
  apiOneBbsTopics,
  apiCreateBbsTopic,
  apiCreateBbsReply,
  apiGetBbsReply,
  apiCreateBlogTopic,
  apiOneBlogTopics,
  apiGetBlogTopics
} from './types.js'

export const getTest = createAjax('get', apiCheshi)

export const getOssKey = createAjax('get', '/updata/getToken')

export const getUserInfo = createAjax('get', apiSearchUser)

// 获取 bbs topic 列表
export const getBbsTopics = createAjax('getl', apiBbsTopics)

// 获取 单个 bbs topic 详情
export const getOneBbsTopics = createAjax('getl', apiOneBbsTopics)

// 创建 BBS topic
export const createBbsTopic = createAjax('postl', apiCreateBbsTopic)

// 提交bbs回复
export const createBbsReply = createAjax('postl', apiCreateBbsReply)

// 获取bbs 回复
export const getBbsReply = createAjax('get', apiGetBbsReply)

// 创建 blog topic
export const createBlogTopic = createAjax('postl', apiCreateBlogTopic)

// 获取单个 blog topic 信息
export const getOneBlogTopics = createAjax('get', apiOneBlogTopics)

// 获取 bbs topic 列表
export const getBlogTopics = createAjax('getl', apiGetBlogTopics)
