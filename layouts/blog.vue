<template>
  <div class="_blog">
    <el-header :style="hiddenHeader ? 'opacity: 1;' : 'opacity: 0;' " class="lay-height">
      <c-header />
    </el-header>
    <el-main class="blog-main">
      <nuxt />
      <back-top />
    </el-main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CHeader from './blog/header'
import backTop from '@/components/backTop.vue'

export default {
  components: {
    CHeader,
    backTop
  },
  computed: {
    ...mapGetters(['hiddenHeader'])
  }
}
</script>

<style lang="scss" scoped>
@import './blog/blog.scss';
</style>
