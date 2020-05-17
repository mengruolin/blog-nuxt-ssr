import express from 'express'
import blogTopicService from '../../services/blogTopicService'
import blogReplyService from '../../services/blogReplyService'
import serverConfig from '../../server.conf'

const router = express.Router()

/**
 * 创建blog 问题
 */
router.post('/createTopic', async (req, res) => {
  let data = await blogTopicService.createTopic(req.body)
  res.json(data)
})
/**
 * 查询blog列表
*/
router.get('/getTopics', async (req, res) => {
  let data = await blogTopicService.getTopics(req.query)
  res.json(data)
})

/**
 * 查询单个博客内容
*/
router.get('/getOneTopics', async (req, res) => {
  let data = await blogTopicService.getOneTopics(req.query._id)
  res.json(data)
})
/**
 * blog 标签
 */
router.get('/getBlogTabs', async (req, res) => {
  res.json({
    code: '0',
    data: serverConfig.blogTabs
  })
})
/**
 * 创建blog回复
 */
router.post('/createReply', async (req, res) => {
  let data = await blogReplyService.createReply(req.body)
  res.json(data)
})
/**
 * 查询blog回复
 */
router.get('/getReply', async (req, res) => {
  let data = await blogReplyService.getReply(req.query)
  res.json(data)
})
// /**
//  * 查询浏览榜blog列表
//  */
// router.get('/getBrowseListTopics', async (req, res) => {
//   let data = await blogTopicService.getBrowseListTopics()
//   res.json(data)
// })

/**
 * 
 */
router.get('/getGoodListTopics', async (req, res) => {
  let data = await blogTopicService.getGoodListTopics()
  res.json(data)
})

module.exports = router