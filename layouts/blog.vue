<template>
  <div class="_blog">
    <el-header class="lay-height">
      <c-header />
    </el-header>
    <el-main class="lay-main">
      <nuxt />
      <back-top />
    </el-main>
  </div>
</template>

<script>
import CHeader from './blog/header'
import backTop from '@/components/backTop.vue'
export default {
  components: {
    CHeader,
    backTop
  }
}
</script>

<style lang="scss" scoped>
@import './blog/blog.scss';
</style>
