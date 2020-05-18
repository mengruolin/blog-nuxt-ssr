import { createActions } from '../../untils/helps'
import {
  apiBbsTabs,
  SET_BBSTABS,
  apiGetBbsBrowseListTopics,
  SET_BBSBROWSELISTTOPICS
} from './mutation-types'

const actions = {
  getBbsTabs: createActions('get', apiBbsTabs, SET_BBSTABS),
  // 获取浏览排行前10 bss 帖子
  getBbsBrowseListTopics: createActions('get', apiGetBbsBrowseListTopics, SET_BBSBROWSELISTTOPICS)
}

export default actions
