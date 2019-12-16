<template>
  <div class="_lay">
    <el-header class="lay-height" :style="hiddenHeader ? 'opacity: 1;' : 'opacity: 0;' ">
      <c-header />
    </el-header>
    <el-main class="lay-main">
      <nuxt />
      <back-top />
    </el-main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CHeader from './default/header'
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
@import './default/default.scss';
</style>
