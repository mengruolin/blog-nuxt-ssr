import blogTopic from '../dbs/models/blog_topic'
import { response as R } from '../untils'

export default new (class {
  /**
   * 
   * @param {*} params 
   */
  async createTopic (params) {
    
    if (!params.title || !params.author_id || !params.tab || !params.content || !params.cover_img) {
      return R.send('999', null, '缺少数据')
    }

    let topic = new blogTopic(params)
    try {
      let res = await topic.save()
      return res ? R.send('0', {_id: res._id}, '保存成功') : R.send('0', null, '保存失败')
    } catch (error) {
      return R.send('999', error, '保存失败')
    }
  }

   /**
   * 获取bbs标题列表
   * @param { string tab, number index, number pages } params 
   */

  async getTopics (params) {
    try {
      let {tab = null, index = 1, pages = 30} = params 
      let indexPage = (index - 1) * pages

      let serchOption = tab ? {tab} : null

      let res = await blogTopic.find(serchOption)
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
   * 获取单个 blog 详情
   * @param {id: string} _id 
   */
  async getOneTopics (_id) {
    try {
      let topic = await blogTopic.findById(_id)
      .populate({path: 'author_id', select: ['_id', 'avatarUrl', 'nickName', 'createTime']})
      .exec()

      topic.visit_count += 1
      topic.save()
      
      return topic ? R.send('0', topic) : R.send('999', '获取失败')
    } catch (error) {
      
    }
  }

  /**
   * 精品贴 前10
   */
  async getGoodListTopics () {
    try {
      let res = await blogTopic.find()
      .sort({good: -1, visit_count: -1, update_at: -1})
      .skip(0)
      .limit(10)
      .populate({path: 'author_id', select: ['_id', 'avatarUrl', 'nickName']})
      .exec()
      
      return res ? R.send('0', res) : R.send('999', '获取失败')
    } catch (error) {
      
    }
  }


})()