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
          <el-input v-model="userName" class="input-w200" placeholder="这是邮箱" />
        </el-form-item>

        <el-form-item v-if="loginType === 0" :prop="authCode">
          <el-input v-model="authCode" class="input-w80" placeholder="快输验证码" />
          <el-button class="send-btn" type="success" disabled>
            发送验证码
          </el-button>
        </el-form-item>

        <el-form-item v-if="loginType === 1" :prop="password">
          <el-input v-model="password" show-password class="input-w200" placeholder="这是密码" />
        </el-form-item>

        <el-form-item class="swith-login-type c-h30">
          <el-button v-if="loginType === 0" type="text" @click="handleChangeLogin(1)">
            &lt;密码登录
          </el-button>
          <el-button v-if="loginType === 1" type="text" @click="handleChangeLogin(0)">
            &lt;验证码登录
          </el-button>
        </el-form-item>

        <el-form-item class="btn-group shake-crazy shake-freeze">
          <el-button type="primary" :disabled="loginDisabled" class="input-w200" @click="handleSubmit">
            login
          </el-button>
        </el-form-item>

        <el-form-item label="快捷登录">
          <span><i class="iconfont">&#xe6a4;</i></span>
          <span><i class="iconfont">&#xe699;</i></span>
          <span><i class="iconfont">&#xe723;</i></span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import md5 from 'md5'

export default {
  middleware: 'isLogin',
  layout: 'loginEmpty',
  data () {
    return {
      loginType: 1, // 登陆方式  =》》 0. 验证码 1 . 密码
      userName: '',
      password: '',
      authCode: '',
      labelWidth: '70px'
    }
  },
  computed: {
    loginDisabled () {
      if (this.userName !== '' && (this.password !== '' || this.authCode !== '')) {
        return false
      }
      return true
    },
    loginInfo () {
      const password = md5(md5(this.password))
      return {
        loginType: this.loginType,
        userName: this.userName,
        password,
        authCode: this.authCode
      }
    }
  },
  mounted () {},
  methods: {
    ...mapActions(['login', 'nuxtServerInit']),
    async handleSubmit () {
      const res = await this.login(this.loginInfo)
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

      this.$router.push(jumpAddres)
    },
    handleChangeLogin (type) {
      this.loginType = type
      this.password = ''
      this.authCode = ''
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
    color: $logoColor;
    letter-spacing: 2px;
  }

  79% {
    color: $logoColor;
    letter-spacing: 2px;
  }
  80% {
    color: #2d132c;
    letter-spacing: 3px;
  }

  100% {
    color: $logoColor;
    letter-spacing: 10px;
  }
}
</style>
