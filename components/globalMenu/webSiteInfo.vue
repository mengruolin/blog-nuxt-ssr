<template>
  <div class="_layout">
    <div class="header">
      <a>关于Query社区.</a>
      <a class="c-ml10">用户协议.</a>
      <a class="c-ml10">隐私策略</a>
    </div>
    <div class="content">
      <a>联系我们.</a>
      <a class="c-ml10" href="https://github.com/mengruolin/blog-nuxt-ssr" target="_blank">项目地址.</a>
      <a class="c-ml10">免责声明</a>
    </div>
    <div class="footer">
      <a>&#169;&nbsp;2020&nbsp;Query.</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
._layout {
  padding: 10px 10px;
  //box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  .header, .content, .footer {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
</style>
