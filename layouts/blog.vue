<template>
  <div class="_blog">
    <el-header class="lay-height">
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
import CHeader from './blog/header'
import backTop from '@/components/backTop.vue'
import loginMenu from '@/components/globalMenu/loginMenu.vue'

export default {
  components: {
    CHeader,
    backTop,
    loginMenu
  }
}
</script>

<style lang="scss" scoped>
@import './blog/blog.scss';
</style>
