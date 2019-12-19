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
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async login (req, res) {
    if (req.session.token) {

    } else {
      const { loginType, userName, password } = req.body
      if (loginType === 1) {
        let userInfo = await user.findOne({ userName }).exec()

        if (!userInfo) {
          return verifyFail('用户名不存在')
        } else if (userInfo.toObject().password === password) {
          req.session.userInfo = userInfo
          return verifySuccess('登陆成功')
        } else {
          return verifyFail('密码错误')
        }
      }
    }
  }

  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async logOut (req, res) {
    req.session.userInfo && req.session.destroy()
    return verifySuccess('退出成功')
  }
}
