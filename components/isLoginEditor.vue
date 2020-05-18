<template>
  <div class="_layout">
    <div class="btn_text">
      未登录，<span class="login_btn" @click="handleJumpLoginPage">登录</span>后方可回复
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleJumpLoginPage () {
      const nowUrl = this.$route.fullPath

      this.$router.push({
        path: '/login',
        query: { jumpAddres: nowUrl }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$layout_height: 150px;

._layout {
  position: relative;
  width: 100%;
  min-height: $layout_height;
  .btn_text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #409eff;
    .login_btn {
      text-decoration: underline;
      font-style: italic;
      margin-right: 7px;
    }
  }
}
</style>
