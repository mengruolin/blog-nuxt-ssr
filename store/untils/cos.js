import { getOssKey } from '../api/global'
import { randomSign } from '@/share/untils'

export default new (class {
  /**
   * cos 对象操作 https://cloud.tencent.com/document/product/436/35649
   *
   */
  _cos () {
    return new COS({
      getAuthorization (options, callback) {
        getOssKey()
          .then((res) => {
            const data = res.data
            callback({
              TmpSecretId: data.credentials.tmpSecretId,
              TmpSecretKey: data.credentials.tmpSecretKey,
              XCosSecurityToken: data.credentials.sessionToken,
              StartTime: data.startTime, // 密钥申请时服务器时间
              ExpiredTime: data.expiredTime // SDK 在 ExpiredTime 时间前，不会再次调用 getAuthorization
            })
          })
          .catch(err => console.log(err))
      }
    })
  }

  putObj (obj) {
    return new Promise((resolve, reject) => {
      this._cos().putObject({
        Bucket: obj.Bucket, // db bucket
        Region: obj.Region, // db region
        Key: `${obj.Dir}${randomSign(3)}.${obj.Body.name.split('.')[1]}`, // 对象 key
        // StorageClass: STANDARD,  // 存储类型
        Body: obj.Body, // 上传文件对象
        onProgress (progressData) {
          console.log(JSON.stringify(progressData))
        }
      }, function (err, data) {
        // console.log(err || data)
        if (err) { reject(err) }
        if (data) { resolve(data) }
      })
    })
  }
})()
