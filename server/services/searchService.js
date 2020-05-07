import user from '../dbs/models/user'
import { response as R } from '../untils'

export default new (class {
  
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
})

