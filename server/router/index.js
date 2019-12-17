import express from 'express'
import UserService from '../services/userService'

const router = express.Router()

router.get('/api/cheshi', (req, res) => {

    console.log(req.session.token);
    
    res.json({
        code: 0,
        data: [],
        message: `hh`,
    })
})

router.post('/api/login', async (req, res) => {
    const user = new UserService()
    let logInfo = await user.login(req, res)
    console.log(logInfo);
    
    res.json(logInfo)
})

export default function(app) {
    app.use(router)
}