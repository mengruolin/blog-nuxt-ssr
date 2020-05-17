import user from '../dbs/models/user'
import bbsTopic from '../dbs/models/bbs_topic'
import blogTopic from '../dbs/models/blog_topic'
import { response as R } from '../untils'

export default new (class {
  
  /**
   * 
   * @param {*} params 
   */
  async userInfo (params) {
    try {
      
      let res = await user.findOne(params).exec()
      
      return res ? R.send('0', res) : R.send('0', null)
  
    } catch (err) {
      return R.send('999', err)
    }
  }
  /**
   * 
   * @param {*} params 
   */
  async search(params) {
    let { keyWord, type = 'bbs' } = params

    if (!params.keyWord) return R.send('999', '请输入查询内容')
    
    try {
      let data = []
      if (type === 'bbs') {
        data = await bbsTopic.find({title: { $regex: params.keyWord}})
                .populate({path: 'author_id', select: ['_id', 'avatarUrl', 'nickName',]})
                .exec()
      } else if (type === 'blog') {
        data = await blogTopic.find({title: { $regex: params.keyWord}})
                .populate({path: 'author_id', select: ['_id', 'avatarUrl', 'nickName',]})
                .exec()
      }

      return data ? R.send('0', data) : R.send('0', [])
    } catch (error) {
  
    }
  }
  /**
   * 
   * @param {author_id: string} params 
   */
  async searchUserBlog(params) {

    if(!params.author_id) return R.send('999', null, '缺少用户名')
    try {
      const data = await blogTopic.find({author_id: params.author_id})
                   .sort({created_at: 1})
                   .exec()
      return data ? R.send('0', data) : R.send('0', [])
    } catch (error) {
      
    }
  }
  /**
   * 
   * @param {author_id: string} params 
   */
  async searchUserBbs(params) {
    if(!params.author_id) return R.send('999', null, '缺少用户名')
    try {
      const data = await bbsTopic.find({author_id: params.author_id})
                   .sort({created_at: 1})
                   .exec()
      return data ? R.send('0', data) : R.send('0', [])
    } catch (error) {
      
    }
  }
})

