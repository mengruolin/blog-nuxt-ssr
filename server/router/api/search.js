import express from 'express'
import SearchService from '../../services/searchService'

const router = express.Router()
/**
 * 查询用户信息
 */
router.get('/userInfo', async (req, res) => {
  let data = await SearchService.userInfo(req.query)
  delete data.password
  res.json(data)
  
})
/**
 * 首页查询
 */
router.get('/search', async (req, res) => {
  let data = await SearchService.search(req.query)
  res.json(data)
})
/**
 * 查询用户发布的问答
 */
router.get('/searchUserBbs', async (req, res) => {
  let data = await SearchService.searchUserBbs(req.query)
  res.json(data)
})
 /**
 * 查询用户发布的博客
 */
router.get('/searchUserBlog', async (req, res) => {
  let data = await SearchService.searchUserBlog(req.query)
  res.json(data)
})

module.exports = router