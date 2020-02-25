// https://github.com/tencentyun/qcloud-cos-sts-sdk/tree/master/nodejs
import STS from 'qcloud-cos-sts'

import {response as R}  from '../untils' 
/**
 * 授权策略
 * // 暂时写死
 * // 规则 https://cloud.tencent.com/document/product/436/31923
 * 
 */

var policy = {
  'version': '2.0',
  'statement': [{
      'action': [
        '*', 
          // 简单上传
          // 'name/cos:PutObject',
          // 'name/cos:PostObject',
          // // 分片上传
          // 'name/cos:InitiateMultipartUpload',
          // 'name/cos:ListMultipartUploads',
          // 'name/cos:ListParts',
          // 'name/cos:UploadPart',
          // 'name/cos:CompleteMultipartUpload'
      ],
      'effect': 'allow',
      'resource': [
          //'qcs::cos:ap-chengdu:uid/1254604265:prefix//1254604265/blog-sso-1254604265/*',
          "qcs::cos:ap-chengdu:uid/1254604265:blog-sso-1254604265/*"
      ],
  }],
};


export const getOssKey = (req, res, next) => {
  try {
    // await jwt.verifyToken(ctx, next); /* 这里是对于用户访问进行鉴权，可以根据实际项目需求修改。 */
    STS.getCredential(
      {
        secretId: process.env.CSO_SECRED_ID,
        secretKey: process.env.CSO_SECRET_KEY,
        policy: policy,
        durationSeconds: 7200
      },
      async (err, credential) => {
        if (err) {
          console.log(err);
        }
        
        return res.json(R.send('0', err || credential));
      }
    );
  } catch (error) {
    console.log('getOssKey:', error);
    return res.json(R.send('999', error || '出错了'));
  }
};

