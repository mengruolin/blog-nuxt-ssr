<template>
  <div class="_blog">
    <el-header class="blog-header-height">
      <nuxt-link to="/">
        主页
      </nuxt-link>
    </el-header>
    <el-main class="blog-main">
      <nuxt />
    </el-main>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import './blog/blog.scss';
</style>
