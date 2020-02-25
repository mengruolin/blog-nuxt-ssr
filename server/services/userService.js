import user from '../dbs/models/user'
import { response as R } from '../untils'

export default class UserService {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async login (req, res) {
    
    if (req.session.token) {
      console.log(req.session.token);
      
    } else {
      const { loginType, userName, password } = req.body
      if (loginType === 1) {
        let userInfo = await user.findOne({ userName }).exec()

        if (!userInfo) {
          return R.send('999', null, '用户名不存在')
        } else if (userInfo.toObject().password === password) {
          req.session.token = {loginType, userName, password}
          return R.send('0', userInfo, '登陆成功')
        } else {
          return R.send('999', null, '密码错误')
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
    return R.send('0', null, '退出成功')
  }
}
