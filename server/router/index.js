const express = require('express')
const router = express.Router()

router.get('/api/cheshi', (req, res) => {
    res.json({
        code: 0,
        data: [],
        message: '测试一下接口'
    })
})


module.exports = function(app) {
    app.use(router)
}