<template>
  <div
    v-infinite-scroll="pagingLoad"
    infinite-scroll-distance="200"
    infinite-scroll-disabled="disableLoad"
    infinite-scroll-delay="500"
    class="_lay"
  >
    <m-header
      @show-darwer="handleShowDrawer"
    />

    <header-nav />

    <nuxt ref="nuxt" />

    <m-backtop />

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
import mBacktop from '@@/components/mBacktop.vue'
import headerNav from '@@/components/header/headerNav.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    mHeader,
    mBacktop,
    headerNav
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
        console.log('------load-----')

        this.$refs.nuxt.$children[0].load()
      }
    }
  }
}
</script>

<style lang="scss">
@import url('./default.scss');
</style>
