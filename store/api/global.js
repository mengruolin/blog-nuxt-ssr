import { createAjax } from '../untils/helps.js'
import {
  apiCheshi
} from './types.js'

export const getTest = createAjax('get', apiCheshi)

export const getOssKey = createAjax('get', '/updata/getToken')
