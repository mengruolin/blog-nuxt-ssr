<!--
 * @Author: your name
 * @Date: 2019-12-02 18:25:10
 * @LastEditTime: 2019-12-02 18:51:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog_ssr\pages\login.vue
 -->
<template>
  <div class="_login">
    <div class="">
      <el-form class="login_form">
        <el-form-item label="用户名" :prop="email">
          <el-input v-model="email" class="c-w200" placeholder="这是邮箱" />
        </el-form-item>

        <el-form-item v-if="loginType === 0" label="验证码" :prop="password">
          <el-input v-model="password" show-password class="c-w200" placeholder="快输验证码" />
        </el-form-item>

        <el-form-item v-if="loginType === 1" label="密码" :prop="password">
          <el-input v-model="password" show-password class="c-w200" placeholder="这是密码" />
        </el-form-item>

        <el-form-item>
          <el-button v-if="loginType === 0" type="text" @click="handleChangeLogin(1)">
            &lt;密码登录
          </el-button>
          <el-button v-if="loginType === 1" type="text" @click="handleChangeLogin(0)">
            &lt;验证码登录
          </el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">
            login
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data () {
    return {
      loginType: 0, // 登陆方式  =》》 0. 验证码 1 . 密码
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {

    },
    handleChangeLogin (type) {
      this.loginType = type
    }
  }
}
</script>

<style lang="scss" scoped>
._login {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #457fca, #5691c8);
  .login_form {
    min-width: 400px;
  }
}
</style>
