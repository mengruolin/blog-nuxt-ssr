<template>
  <div class="_backTop">
    <div class="feedback">
      <nuxt-link to="/feedback">
        <svg-icon icon-class="feedback" class-name="feedback-icon" />
      </nuxt-link>
    </div>
    <el-backtop target="" />
  </div>
</template>

<style lang="scss" scoped>
._backTop {
  width: 40px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  .feedback {
    position: fixed;
    width: 40px;
    height: 40px;
    bottom: 100px;
    right: 40px;
  }
  .feedback-icon {
    padding: 0 0;
  }
}
</style>
