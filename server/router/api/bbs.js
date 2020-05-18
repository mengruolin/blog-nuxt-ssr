import express from 'express'
import bbsTopicService from '../../services/bbsTopicService'
import bbsReplyService from '../../services/bbsReplyService'
import serverConfig from '../../server.conf'

const router = express.Router()

/**
 * 创建bbs 问题
 */
router.post('/createTopic', async (req, res) => {
  let data = await bbsTopicService.createTopic(req.body)
  res.json(data)
})
/**
 * 查询bbs列表
*/
router.get('/getTopics', async (req, res) => {
  let data = await bbsTopicService.getTopics(req.query)
  res.json(data)
})
/**
 * 查询单个文章标题内容
*/
router.get('/getOneTopics', async (req, res) => {
  let data = await bbsTopicService.getOneTopics(req.query._id)
  res.json(data)
})
/**
 * bbs 标签
 */
router.get('/getBbsTabs', async (req, res) => {
  res.json({
    code: '0',
    data: serverConfig.bbsTabs
  })
})
/**
 * 创建bbs回复
 */
router.post('/createReply', async (req, res) => {
  let data = await bbsReplyService.createReply(req.body)
  res.json(data)
})
/**
 * 查询bbs回复
 */
router.get('/getReply', async (req, res) => {
  let data = await bbsReplyService.getReply(req.query)
  res.json(data)
})
/**
 * 
 */
router.get('/getBrowseListTopics', async (req, res) => {
  let data = await bbsTopicService.getBrowseListTopics()
  res.json(data)
})


module.exports = router
