import express from 'express'
import SearchService from '../../services/searchService'

const router = express.Router()

router.get('/userInfo', async (req, res) => {
  
  let data = await SearchService.userInfo(req.query)
  delete data.password
  res.json(data)
  
})

module.exports = router