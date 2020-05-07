import express from 'express'
import bbsTopicService from '../../services/bbsTopicService'
import serverConfig from '../../server.conf'

const router = express.Router()

router.post('/createTopic', async (req, res) => {
  
  let data = await bbsTopicService.createTopic(req.body)
  
  res.json(data)
  
})

router.get('/getTopics', async (req, res) => {
  
  let data = await bbsTopicService.getTopics(req.query)
  
  res.json(data)
  
})

/**
 * 
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

module.exports = router
