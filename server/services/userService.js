const user = require('../dbs/models/user')


const verifySuccess = (message) => {
  return {
    code: '0',
    message
  }
}
const verifyFail = (message) => {
  return {
    code: '999',
    message
  }
}
export default class UserService {
  
  login(req, res) {
    if (req.session.token) {

    } else {
      const { loginType, userName, password } = req.body
      if (loginType === 1) {
        user.findOne({userName}).select('password').exec((err, doc) => {
          if (err) {
          }
          
          let logInfo = verifyFail('用户名不存在')
          return {
            code: '999',
            message: '用户名不存在'
          }
          // if (!doc) {
          //   return verifyFail('用户名不存在')
          // } else {
          //   if (doc.password === password) {
          //     req.session.token = userName
          //     return verifySuccess('登陆成功')
          //   } else {
          //     return verifyFail('密码错误')
          //   }
          // }
          
        })
      }
      
    }
  }
}