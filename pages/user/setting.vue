<template>
  <div>
    <!-- <input ref="avatar" type="file" name="avatar" @change="handleChange"> -->
    <el-upload
      class="avatar-uploader"
      action
      :http-request="cosUpload"
      :show-file-list="false"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon" />
    </el-upload>
  </div>
</template>

<script>
import Cos from '@/store/untils/cos'

export default {
  middleware: 'noLogin',
  layout: 'default',
  data () {
    return {
      imageUrl: ''
    }
  },
  methods: {
    cosUpload (option) {
      // console.log(option.file)

      Cos.putObj({
        Bucket: 'blog-sso-1254604265',
        Region: 'ap-chengdu',
        Dir: 'image/',
        Body: option.file
      })
        .then((res) => {
          if (res.statusCode === 200) {
            this.imageUrl = `//${res.Location}`
          } else {
            this.$message.error('上传失败')
          }
        })

      // console.log(res)
    }
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
