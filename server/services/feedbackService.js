import feedBack from '../dbs/models/feedback.js'
import { response as R } from '../untils'

export default new (class {
  /**
   * 
   * @param {*} params 
   */
  async createFeedBack(params) {
    
    if (!params.author_id || !params.content) return R.send('999', null, '缺少参数')

    let newFeedBack = new feedBack(params)
    try {
      let res = await newFeedBack.save()
      return res ? R.send('0', {_id: res._id}, '保存成功') : R.send('0', null, '保存失败')
      
    } catch (error) {

      return R.send('999', error, '保存失败')
    }
  }

})()