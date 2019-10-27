const express = require('express')
const router = express.Router()

router.get('/api/cheshi', (req, res) => {
    res.json({
        code: 0,
        data: []
    })
})


module.exports = function(app) {
    app.use(router)
}