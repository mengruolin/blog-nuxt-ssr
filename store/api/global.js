import { createAjax } from '../untils/helps.js'
import {
  apiCheshi
} from './types.js'

const getTest = createAjax('get', apiCheshi)

export {
  getTest
}
