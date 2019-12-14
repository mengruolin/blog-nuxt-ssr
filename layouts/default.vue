<template>
  <div class="_lay">
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
import CHeader from './default/header'
import backTop from '@/components/backTop.vue'
export default {
  components: {
    CHeader,
    backTop
  }
}
</script>

<style lang="scss" scoped>
@import './default/default.scss';
</style>
