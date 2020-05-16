<template>
  <div>
    <el-page-header class="header" title="返回" content="用户反馈" @back="goBack" />
    <div class="_content">
      <el-form ref="form" :model="editform" :rules="rules">
        <el-form-item label="选择标签" prop="labelList">
          <br>
          <el-checkbox-group v-model="editform.labelList">
            <el-checkbox label="A" />
            <el-checkbox label="B" />
            <el-checkbox label="A" />
            <el-checkbox label="B" />
            <el-checkbox label="A" />
            <el-checkbox label="B" />
            <el-checkbox label="A" />
            <el-checkbox label="B" />
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="反馈内容：" prop="content">
          <el-input
            v-model="editform.content"
            type="textarea"
            :rows="10"
            show-word-limit
            maxlength="180"
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
const rules = {
  labelList: { required: true, message: '请选择标签', trigger: 'change' },
  content: { required: true, message: '请输入内容', trigger: ['change', 'blur'] }
}

export default {
  layout: 'loginEmpty',
  data () {
    return {
      editform: {
        labelList: [],
        content: ''
      },
      rules
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    handleSubmit () {
      this.$refs.form.validate((validate) => {
        if (validate) {

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
