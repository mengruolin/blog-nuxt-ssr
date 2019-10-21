<template>
  <div class="_lay">
    <m-header
      @show-darwer="handleShowDrawer"
    />
    <nuxt />
    <m-footer />
    <el-drawer
      :visible.sync="drawer"
      direction="ltr"
      size="70%"
    >
      <span>我来啦!</span>
    </el-drawer>

    <el-dialog
      :visible.sync="loginDialog"
      class="loginDialog"
      title="登录"
    />
  </div>
</template>

<script>
import mHeader from '@@/components/header/header.vue'
import mFooter from '@@/components/footer/footer.vue'

export default {
  components: {
    mHeader,
    mFooter
  },
  data () {
    return {
      drawer: false,
      loginDialog: true
    }
  },
  methods: {
    handleShowDrawer () {
      console.log('showDrawer')
      this.drawer = true
    }
  }
}
</script>

<style lang="scss">
@import url('./default.scss');
</style>
