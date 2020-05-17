<template>
  <div>
    <el-page-header class="header" title="返回" content="用户反馈" @back="goBack" />
    <div class="_content">
      <el-form ref="form" :model="editform" :rules="rules">
        <el-form-item label="反馈内容：" prop="content">
          <el-input
            v-model="editform.content"
            type="textarea"
            :rows="10"
            show-word-limit
            maxlength="300"
          />
        </el-form-item>

        <el-form-item class="_btn">
          <el-button type="primary" @click.native="handleSubmit">
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { createFeedBack } from '@/store/api/global'

const rules = {
  content: { required: true, message: '请输入反馈内容', trigger: ['change', 'blur'] }
}

export default {
  middleware: 'noLogin',
  layout: 'loginEmpty',
  data () {
    return {
      editform: {
        content: ''
      },
      rules
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    handleSubmit () {
      this.$refs.form.validate(async (validate) => {
        if (validate) {
          const res = await createFeedBack({
            'author_id': this.userInfo._id,
            content: this.editform.content
          })

          if (res.code === '0') {
            this.$message.success('反馈成功，3s后跳转首页...')

            setTimeout(() => {
              this.$router.push('/')
            }, 3000)
          } else {
            this.$message.error(`反馈失败，${res.message}`)
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0 40px;
  height: 50px;
  line-height: 50px;
  background: #39a9dd;
  color: aliceblue;
  & /deep/ .el-page-header__content {
    color: aliceblue;
  }
}
._content {
  font-size: 20px;
  max-width: 1200px;
  padding: 30px 10px;
  margin: 0 auto;
  ._btn {
    margin-top: 50px;
    text-align: right;
  }
}
</style>
