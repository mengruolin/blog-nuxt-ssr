const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const user = new Schema({
  userName: String,
  password: String,
  avatarUrl: {type: String, default: 'https://blog-sso-1254604265.cos.ap-chengdu.myqcloud.com/image/ckN-343242777.jpg'},
  createTime: {type: Date, default: Date.now},
  nickName: String
})

const User = mongoose.model('User', user)

module.exports = User
