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
    <div class="header">
      <el-row>
        <nuxt-link to="/">
          首页
        </nuxt-link>
        <span>|</span>
        <nuxt-link to="/register">
          注册
        </nuxt-link>
      </el-row>
    </div>
    <div class="">
      <el-form class="login_form">
        <el-form-item class="title">
          <h1>Query</h1>
        </el-form-item>

        <el-form-item :prop="userName">
          <el-input v-model="userName" class="input-w200" placeholder="用户名" />
        </el-form-item>

        <el-form-item :prop="password">
          <el-input v-model="password" show-password class="input-w200" placeholder="这是密码" />
        </el-form-item>

        <el-form-item :prop="authCode">
          <el-input v-model="authCode" class="input-w80" placeholder="快输验证码" />
          <el-button class="send-btn" type="success" disabled>
            发送验证码
          </el-button>
        </el-form-item>

        <el-form-item class="btn-group shake-crazy shake-freeze">
          <el-button type="primary" :disabled="loginDisabled" class="input-w200" @click="handleSubmit">
            register
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import md5 from 'md5'

export default {
  layout: 'empty',
  data () {
    return {
      userName: '',
      password: '',
      authCode: ''
    }
  },
  computed: {
    loginDisabled () {
      if (this.email !== '' && (this.password !== '' || this.authCode !== '')) {
        return false
      }
      return true
    },
    registerParams () {
      const password = md5(md5(this.password))
      return {
        loginType: 1,
        userName: this.userName,
        password,
        authCode: this.authCode
      }
    }
  },
  mounted () {
    // this.$loading.start()
  },
  methods: {
    ...mapActions(['register']),
    async handleSubmit () {
      const res = await this.register(this.registerParams)

      if (res.code === '0') {
        this.$message.success(res.message)
        this.loginSuccess()
      } else {
        this.$message.error(res.message)
      }
    },
    loginSuccess () {
      let jumpAddres = '/'
      if (this.$route.query.jumpAddres) {
        jumpAddres = this.$route.query.jumpAddres
      }
      //
      // 原生跳转
      // window.location.replace(jumpAddres)
      this.$router.push(jumpAddres)
    }
  }
}
</script>

<style lang="scss" scoped>
._login {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .header {
    position: absolute;
    // max-width: $headerWidth;
    // min-width: 320px;
    top: 1vh;
    right: 3vw;
    // transform: translate(-50%, 0);
    text-align: right;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }
  .title {
    text-align: center;
    //font-size: 20px;
    h1 {
      font-size: 40px;
      letter-spacing: 2px;
      animation-name: _title;
      animation-direction: normal;
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }
  }
  // background: #46b5d1;
  .login_form {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 310px;
    height: 400px;
    box-sizing: border-box;
    padding: 20px 20px;
    .swith-login-type {
      padding-right: 20px;
      text-align: right;
      margin-bottom: 15px;
      margin-top: -17px;
    }
    .send-btn {
      margin-left: 17px;
      height: 35px;
      position: relative;
      top: 2px;
    }
    .btn-group {
      padding-right: 30px;
      text-align: center;
    }
  }
}

@keyframes _title {
  0% {
    color: #46b5d1;
    letter-spacing: 2px;
  }

  89% {
    color: #46b5d1;
    letter-spacing: 2px;
  }
  90% {
    color: #2d132c;
    letter-spacing: 3px;
  }

  to {
    color: #46b5d1;
    letter-spacing: 10px;
  }
}
</style>
