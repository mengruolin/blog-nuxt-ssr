import bbsTopic from '../dbs/models/bbs_topic'
import { response as R } from '../untils'

export default new (class {
  /**
   * 
   * @param {*} params 
   */
  async createTopic (params) {
    let topic = new bbsTopic(params)
    try {
      let res = await topic.save()
      return res ? R.send('0', {_id: res._id}, '保存成功') : R.send('0', null, '保存失败')
    } catch (error) {
      return R.send('999', error, '保存失败')
    }
  }

  /**
   * 
   * 
   */

  async getTopics (params) {
    try {
      let {tab = null, index = 0, pages = 30} = params 
      let indexPage = index * pages

      let serchOption = tab ? {tab} : null

      let res = await bbsTopic.find(serchOption)
      .sort({top: -1, update_at: -1})
      .skip(parseInt(indexPage))
      .limit(parseInt(pages))
      .populate({path: 'author_id', select: ['_id', 'avatarUrl', 'nickName']})
      .exec()

      return res ? R.send('0', res) : R.send('0', null)
    } catch (error) {
      R.send('999', null)
    }
  }


  /**
   * 
   * 
   */
  async getOneTopics (_id) {
    try {
      let topic = await bbsTopic.findById(_id)
      .populate({path: 'author_id', select: ['_id', 'avatarUrl', 'nickName']})
      .exec()

      topic.visit_count += 1
      topic.save()
      
      return topic ? R.send('0', topic) : R.send('999', '获取失败')
    } catch (error) {
      
    }
  }

})