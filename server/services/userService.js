import User from '../dbs/models/user'
import { response as R } from '../untils'
import redis from 'redis'

export default new ( class {
  /**
   * 
   * @req {
   *  loginType: string,
   *  userName: string,
   *  password: string
   *  uid?: strring
   * } req.body 
   */
  async login (req) {
    if (!req.body.loginType, !req.body.userName, !req.body.password) return R.send('999', null, '缺少相关信息')
     try {
      const { loginType, userName, password } = req.body
      if (loginType === 1) {
        let userInfo = await User.findOne({ userName })
        
        if (!userInfo) {
          return R.send('999', null, '用户名不存在')
        } else if (userInfo.toObject().password === password) {
            if (!req.body.uid) {
          
              req.sessionStore.all((err, sessions) => {
                if (err) {}

                sessions.forEach((item) => {
                  let ar = item.id.split('_uid')
                  if (req.sessionID !== item.id && ar[0] === userName) {
                    req.sessionStore.destroy(item.id, () => {})
                  }
                })

              })
              req.session.token = {loginType, userName, password, uid: req.sessionID}
              return R.send('0', userInfo, '登陆成功')
            } else {
              const res = (err, reslute) => reslute

              req.sessionStore.get(req.body.sid, res)

              return res ? R.send('0', userInfo, '登陆成功') : R.send('1', null, '登陆已失效')
            }
            
        } else {
          return R.send('999', null, '密码错误')
        }
      }
    } catch (error) {
      //console.log(error);
      
       R.send('999', null, error)
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
        return R.send('0', savaRes, '注册成功')
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
   * @params {nicnName: string} params 
   */
  async alreadyNickName(params) {
    try {
      const res = await User.findOne({nickName: params.nickName})

      return res ? R.send('1', null, '用户已存在') : R.send('0', null, '可以使用')
    } catch (error) {
      return R.send('999', null)
    }
  }
  /**
   * 
   * @params {nicnName: string} params 
   */
  async saveBaseInfo(params) {
    if (!params._id) return R.send('999', null, '缺少用户信息')
    try {
      const newUser = await User.findOne({_id: params._id})
      newUser.nickName = params.nickName
      newUser.avatarUrl = params.avatarUrl
      newUser.sex = params.sex
      newUser.nickName = params.nickName
      newUser.sign = params.sign
      newUser.email = params.email
      newUser.website = params.website
      newUser.address = params.address
      newUser.job = params.job
      newUser.company = params.company
      const data = await newUser.save()

      return data ? R.send('0', data) : R.send('1', null, '保存失败')
    } catch (error) {
      return R.send('999', null, error)
    }
  }

})()
