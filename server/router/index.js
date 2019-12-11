const express = require('express')
const router = express.Router()
let num = 0

router.get('/api/cheshi', (req, res) => {
    let name = req.query.name;

    res.json({
        code: 0,
        data: [],
        message: `这是${name}页${num}`,
    })
})


module.exports = function(app) {
    app.use(router)
}