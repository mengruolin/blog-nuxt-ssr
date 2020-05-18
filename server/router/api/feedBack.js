import express from 'express'
import feedbackService from '../../services/feedbackService'

const router = express.Router()

/**
 * 创建blog回复
 */
router.post('/createFeedBack', async (req, res) => {
  let data = await feedbackService.createFeedBack(req.body)
  res.json(data)
})

module.exports = router
