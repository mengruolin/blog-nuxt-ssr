<template>
  <div class="_backTop">
    <div class="feedback">
      <nuxt-link to="/feedback">
        <svg-icon icon-class="feedback" class-name="feedback-icon" />
      </nuxt-link>
    </div>
    <el-backtop class="goBack" target="" />
  </div>
</template>

<style lang="scss" scoped>
._backTop {
  width: 40px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  .feedback {
    // position: relative;
    width: 40px;
    height: 40px;
    transition: .5s ease all;
    .feedback-icon {
      padding: 0 0;
    }
  }

  .goBack {
    position: relative;
    left: 0;
    top: 10px;
    color: #ffffff;
  }
}
</style>
