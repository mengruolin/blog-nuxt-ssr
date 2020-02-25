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
  const user = new UserService()
  const logInfo = await user.login(req, res)
  res.json(logInfo)
})

router.get('/logOut', async (req, res) => {
    const user = new UserService()
    const logOutInfo = await user.logOut(req, res)
    res.json(logOutInfo)
})

module.exports = router
