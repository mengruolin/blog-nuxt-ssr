<template>
  <div v-if="!isLogin" class="_loginMenu">
    <p>登录之后可以提问题，写文章噢&nbsp;&nbsp;👴👴👴</p>
    <el-button type="info" class="c-w200" @click="handleLogin">
      login
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    isLogin: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleLogin () {
      const nowUrl = this.$route.path
      this.$router.push({
        path: '/login',
        query: { jumpAddres: nowUrl }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
._loginMenu {
  // border: $leftMenuBorder;
  // border-top-style: none;
  // border-bottom-style: none;
  border: solid 1px #e2e2e2;
  border-radius: 5px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 120px;
  padding: 20px 5px;
}
</style>
