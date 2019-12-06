<template>
  <div class="_blog">
    <el-header class="blog-header-height">
      <el-row class="header-content">
        <el-col class="_logo" :span="4">
          <nuxt-link to="/">
            query
          </nuxt-link>
        </el-col>
        <el-col :span="16">
          &nbsp;<el-autocomplete />
        </el-col>
        <el-col :span="4" class="menu-user">
          <i v-if="!menuType" class="iconfont c-click-icon" @click="handleChangeMenu">&#xe652;</i>
          <i v-else class="iconfont c-click-icon" @click="handleChangeMenu">&#xeb9b;</i>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="blog-main">
      <nuxt />
    </el-main>
    <el-drawer
      title="我是标题"
      :visible.sync="menuType"
      :with-header="false"
      size="70%"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      menuType: false
    }
  },
  methods: {
    handleChangeMenu () {
      this.menuType = !this.menuType
    }

  }
}
</script>

<style lang="scss" scoped>
@import './blog/blog.scss';
</style>
