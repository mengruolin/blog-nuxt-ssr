const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const serverConf = require('../../server.conf')

const user = new Schema({
  userName: String,//用户名
  password: String,//密码
  avatarUrl: {type: String, default: serverConf.defaultAvatar},//头像地址
  createTime: {type: Date, default: Date.now},//创建时间
  nickName: String,//昵称
  sex: {type: String, default: 'man'},//性别
  address: {type: String, default: '中国'},//地址
  job: {type: String, default: '无'},//工作
  sign: {type: String, default: '这个人很懒，什么都没有留下。'},//签名
  website: {type: String, default: ''},//个人网站
  email: {type: String, default: ''},//邮箱
  fame_count: {type: Number, default: 0},//声望值
  epithet: {type: String, default: '无'},//称号
  company: {type: String, default: '无'}//公司
})

const User = mongoose.model('User', user)

module.exports = User
