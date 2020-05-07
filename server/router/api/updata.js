import express from 'express'
import { getOssKey } from '../../plugins/oss'

const router = express.Router()

router.get('/getToken', getOssKey)

module.exports = router