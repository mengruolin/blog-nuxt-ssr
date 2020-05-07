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
  const logInfo = await UserService.login(req, res)
  res.json(logInfo)
})

router.post('/register', async (req, res) => {

  const data = await UserService.register(req)
  res.json(data)
})

router.get('/logOut', async (req, res) => {
  //const user = new UserService()
  const logOutInfo = await UserService.logOut(req, res)
  res.json(logOutInfo)
})

module.exports = router
