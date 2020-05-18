import bbsReply from '../dbs/models/bbs_reply'
import bbsTopic from '../dbs/models/bbs_topic'
import { response as R } from '../untils'

export default new (class {
  /**
   * 创建Bbs 新回复
   * @param {
   *  author_id: string
   *  topic_id: string
   *  content: string
   * }
   */
  async createReply (params) {
    if (!params.author_id || !params.content || !params.topic_id) return R.send('999', null, '缺少数据')
    
    let newBbsReply = new bbsReply(params)
    try {
      let res = await newBbsReply.save()
      let topic = await bbsTopic.findById(params.topic_id)
      topic.reply_count += 1
      topic.update_at = new Date()
      topic.save()

      return res ? R.send('0', null) : R.send('999', null, '回复失败') 
    } catch (error) {
      
    }
  }
  /**
   * 查询bbs 帖子回复
   * @param {
   *  pages: number
   *  index: number
   *  topic_id: string
   * } params
   */
  async getReply (params) {
    let {topic_id, index = 0, pages = 20} = params
    let indexPage = index * pages

    try {
      let res = await bbsReply.find({topic_id})
      .sort({create_at: 1})
      .skip(parseInt(indexPage))
      .limit(parseInt(pages))
      .populate({path: 'author_id', select: ['_id', 'avatarUrl', 'nickName']})
      .exec()

      return res ? R.send('0', res) : R.send('0', null)
    } catch (error) {
      
    }
  }

})