import User from '../dbs/models/user'
import { response as R } from '../untils'

export default new ( class {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async login (req, res) {
    
    if (req.session.token) {
      //console.log(req.session.token);
      
    } else {
      const { loginType, userName, password } = req.body
      if (loginType === 1) {
        let userInfo = await User.findOne({ userName })
        
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

  async register (req) {
    let { userName, password, authcode } = req.body
    
    let isUser = await User.findOne({ userName })

    if (isUser) {
      return R.send('999', null, '用户名已存在')
    } else {
      let newUser = new User({userName, password, nickName: userName})
      let savaRes = await newUser.save()

      if (savaRes) {
        let loginType = 1
        req.session.token = {loginType, userName, password}
        return R.send('0', null, '注册成功')
      } else {
        return R.send('999', null, '注册失败')
      }
    }


  }


  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async logOut (req, res) {
    //console.log(res.session);
    req.session.destroy()
    //req.session.userInfo && req.session.destroy()
    return R.send('0', null, '退出成功')
  }

  /**
   * 
   */

  async userInfo (params) {
    try {
      
      let res = await user.findOne(params).exec()
      
      return res ? R.send('0', res) : R.send('0', null)
  
    } catch (err) {
      return R.send('999', err)
    }
   
    // if (res.userName) {
    //   return R.send('0', res)
    // } else {
    //   return R.send('0', {})
    // }
  }
})()
