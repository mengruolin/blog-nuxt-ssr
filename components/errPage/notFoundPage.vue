<template>
  <div class="_layout">
    <div class="_content">
      <svg-icon icon-class="notFound" class-name="svg_box" />
      <div class="text_box">
        <h1>404</h1>
        <h1>页面找不到了..</h1>
        <h2>
          点击回到<nuxt-link to="/">
            首页
          </nuxt-link>
        </h2>
      </div>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
._layout {
  width: 100%;
  height: 100%;
  ._content {
    width: 80%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    .svg_box {
      width: 400px;
      height: 400px;
      float: left;
    }
    .text_box {
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
