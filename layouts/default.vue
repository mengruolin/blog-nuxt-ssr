<template>
  <div class="_lay">
    <el-header class="lay-height">
      <c-header />
    </el-header>
    <el-main class="lay-main">
      <nuxt />
    </el-main>
  </div>
</template>

<script>
import CHeader from './default/header'
export default {
  components: {
    CHeader
  }
}
</script>

<style lang="scss" scoped>
@import './default/default.scss';
</style>
