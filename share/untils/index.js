/**
   * 生成随机数
   * @param {Num} len 需要生成的随机数长度
   */
const randomString = (len) => {
  // 获取随机名
  len = len || 32
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz'
  const maxPos = chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
/**
* 生成随机req_msg_id === 随机数+时间戳
* @param {Num} len 需要生成的随机数长度
*/
export const randomSign = (len) => {
  return `${randomString(len)}-${parseInt(Math.floor(Math.random() * Date.now()) / 1000)}`
}
