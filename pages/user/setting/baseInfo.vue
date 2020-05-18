<template>
  <el-row :gutter="80" class="base_info">
    <el-col :span="16">
      <el-form>
        <el-form-item label="昵称：">
          <el-input v-model="nickName" :maxlength="10" />
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="sex">
            <el-radio label="man">
              男
            </el-radio>
            <el-radio label="woman">
              女
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="签名">
          <el-input
            v-model="sign"
            type="textarea"
            :rows="2"
          />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="email" />
        </el-form-item>
        <el-form-item label="个人网站">
          <el-input v-model="website" />
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="address" />
        </el-form-item>
        <el-form-item label="职业">
          <el-input v-model="job" />
        </el-form-item>
        <el-form-item label="公司">
          <el-input v-model="company" />
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="handleSaveUserInfo">
            确认修改
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="8" />
    <div class="c-mt10">
      <div class="avatar-uploader">
        <div class="avatar-box">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
        </div>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Cos from '@/store/untils/cos'

export default {
  data () {
    return {
      imageUrl: '',
      nickName: '',
      sex: '',
      sign: '',
      email: '',
      website: '',
      address: '',
      job: '',
      company: ''
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    baseInfoParams () {
      return {
        '_id': this.userInfo._id,
        avatarUrl: this.imageUrl,
        nickName: this.nickName,
        sex: this.sex,
        sign: this.sign,
        email: this.email,
        website: this.website,
        address: this.address,
        job: this.job,
        company: this.company
      }
    }
  },
  mounted () {
    this.imageUrl = this.userInfo.avatarUrl
    this.sex = this.userInfo.sex
    this.nickName = this.userInfo.nickName
    this.sign = this.userInfo.sign
    this.email = this.userInfo.email
    this.website = this.userInfo.website
    this.address = this.userInfo.address
    this.job = this.userInfo.job
    this.company = this.userInfo.company
  },
  methods: {
    ...mapActions(['setUserBaseInfo']),
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
    },
    async handleSaveUserInfo () {
      const res = await this.setUserBaseInfo(this.baseInfoParams)

      if (res.code === '0') {
        this.$message.success('保存成功')
      } else {
        this.$message.error(res.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base_info {
  .avatar-uploader {
    position: relative;
    overflow: hidden;
    width: 180px;
    left: 30px;
    .avatar-box {
      margin-top: 5px;
      width: 178px;
      height: 178px;
      border: 1px solid #e2e2e2;
      border-radius: 6px;
      .avatar {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>
