<template>
  <div v-infinite-scroll="pagingLoad" infinite-scroll-disabled="disableLoad" class="_lay" style="height: 100vh; overflow-x:no-display; overflow-y: auto;">
    <m-header
      @show-darwer="handleShowDrawer"
    />
    <nuxt ref="nuxt" />
    <m-footer />
    <el-backtop />
    <el-drawer
      :visible.sync="drawer"
      direction="ltr"
      size="70%"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import mHeader from '@@/components/header/header.vue'
import mFooter from '@@/components/footer/footer.vue'
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters(['disableLoad'])
  },
  methods: {
    handleShowDrawer () {
      console.log('showDrawer')
      this.drawer = true
    },
    pagingLoad () {
      if (this.$refs.nuxt.$children[0].load) {
        this.$refs.nuxt.$children[0].load()
      }
    }
  }
}
</script>

<style lang="scss">
@import url('./default.scss');
</style>
