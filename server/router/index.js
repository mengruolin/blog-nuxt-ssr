import express from 'express'
import UserService from '../services/userService'

const router = express.Router()

router.get('/api/cheshi', (req, res) => {

  res.json({
    code: 0,
    data: [],
    message: `hh`
  })
})

router.post('/api/login', async (req, res) => {
  const user = new UserService()
  const logInfo = await user.login(req, res)
  res.json(logInfo)
})

router.get('/api/logOut', async (req, res) => {
    const user = new UserService()
    const logOutInfo = await user.logOut(req, res)
    res.json(logOutInfo)
})

export default function (app) {
  app.use(router)
}
