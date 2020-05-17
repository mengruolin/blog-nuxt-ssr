<template>
  <div class="_layout">
    <el-row :gutter="50">
      <el-col :span="6">
        <el-card class="menu-card">
          <div class="menu-card-item">
            用户基本信息
          </div>
          <div class="menu-card-item">
            其他设置
          </div>
        </el-card>
      </el-col>
      <el-col :span="17" class="content-box">
        <div class="content-text">
          基本信息
        </div>
        <el-divider />
        <el-row :gutter="80">
          <el-col :span="16">
            <el-form>
              <el-form-item label="昵称：">
                <el-input :maxlength="10" />
              </el-form-item>
              <el-form-item label="性别">
                <el-input />
              </el-form-item>
              <el-form-item label="签名">
                <el-input />
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input />
              </el-form-item>
              <el-form-item label="个人网站">
                <el-input />
              </el-form-item>
              <el-form-item label="地址">
                <el-input />
              </el-form-item>
              <el-form-item label="职业">
                <el-input />
              </el-form-item>
              <el-form-item label="公司">
                <el-input />
              </el-form-item>
              <el-form-item>
                <el-button type="info">
                  确认修改
                </el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8" />
          <div class="c-mt10">
            <div class="avatar-uploader">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <el-upload
                action
                :http-request="cosUpload"
                :show-file-list="false"
              >
                <el-button class="c-mt20" icon="el-icon-upload" size="small" type="info">
                  上传头像
                </el-button>
              </el-upload>
            </div>
          </div>
        </el-row>
      </el-col>
    </el-row>
    <!-- <input ref="avatar" type="file" name="avatar" @change="handleChange"> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cos from '@/store/untils/cos'

export default {
  middleware: 'noLogin',
  layout: 'default',
  data () {
    return {
      imageUrl: '',
      activeName: '1'
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted () {
    this.imageUrl = String(this.userInfo.avatarUrl)
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

<style lang="scss" scoped>
._layout {
  padding: 40px 100px;
  width: $headerWidth;
  .menu-card {
    & /deep/ .el-card__body {
      padding: 10px 10px;
    }
    & .menu-card-item:last-child {
      border-bottom: none;
    }
    .menu-card-item {
      text-align: center;
      height: 45px;
      line-height: 45px;
      border-bottom: solid 1px #e2e2e2;
    }
  }
  .content-box {
    // display: flex;
    .content-text {
      font-size: 20px;
      font-weight: 500;
    }
    .base-info {
      //width: 400px;
    }
    .avatar-uploader {
      position: relative;
      overflow: hidden;
      width: 180px;
      left: 30px;
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
        border: 1px solid #e2e2e2;
        border-radius: 6px;
      }
    }
  }

}
</style>
