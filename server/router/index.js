const express = require('express')
const router = express.Router()
// import users from '../dbs/modules/users.js'

const User = require('../dbs/modules/user.js')

let num = 0

router.get('/api/cheshi', (req, res) => {
    // let name = req.query.name;
    User.findOne()
        .exec(function(err, data) {
            console.log(data);
            
        })
    

    res.json({
        code: 0,
        data: [],
        message: `这是${num}页${num}`,
    })
})


module.exports = function(app) {
    app.use(router)
}