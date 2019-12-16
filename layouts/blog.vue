<template>
  <div class="_blog">
    <el-header :style="hiddenHeader ? 'opacity: 1;' : 'opacity: 0;' " class="lay-height">
      <c-header />
    </el-header>
    <el-main class="blog-main">
      <el-row>
        <el-col
          :span="16"
          :xs="24"
          :sm="24"
          :md="16"
          :lg="16"
          :xl="16"
        >
          <nuxt />
        </el-col>
        <el-col :span="6" :offset="2" class="hidden-sm-and-down blog-notice">
          <login-menu />
        </el-col>
      </el-row>

      <back-top />
    </el-main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CHeader from './blog/header'
import backTop from '@/components/backTop.vue'
import loginMenu from '@/components/globalMenu/loginMenu.vue'

export default {
  components: {
    CHeader,
    backTop,
    loginMenu
  },
  computed: {
    ...mapGetters(['hiddenHeader'])
  }
}
</script>

<style lang="scss" scoped>
@import './blog/blog.scss';
</style>
