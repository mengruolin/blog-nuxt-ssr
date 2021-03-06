import express from 'express'
import UserService from '../../services/userService'

const router = express.Router()

router.get('/cheshi', (req, res) => {

  res.json({
    code: 0,
    data: [],
    message: `hh`
  })
})

router.post('/login', async (req, res) => {
  //const user = new UserService()
  const logInfo = await UserService.login(req)
  //console.log('api' + logInfo);
  
  res.json(logInfo)
})

router.post('/register', async (req, res) => {

  const data = await UserService.register(req)
  res.json(data)
})

/**
 * 
 */
router.get('/logOut', async (req, res) => {
  //const user = new UserService()
  const logOutInfo = await UserService.logOut(req, res)
  res.json(logOutInfo)
})
/**
 * 
 */
router.get('/alreadyNickName', async (req, res) => {
  const data = await UserService.alreadyNickName(req.query)
  res.json(data)
})
/**
 * 保存用户基本信息
 */
router.post('/saveBaseInfo', async (req, res) => {
  const data = await UserService.saveBaseInfo(req.body)
  delete data.password
  res.json(data)
})

module.exports = router
