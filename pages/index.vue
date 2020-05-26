<template>
  <page-view>
    <el-row class="_index">
      <el-col
        :span="16"
        :xs="24"
        :sm="24"
        :md="16"
        :lg="16"
        :xl="16"
      >
        <nav-list :list-data="bbsTabs" />
        <scroll-page
          class="context"
          @scroll="handleGetList"
        >
          <template slot="list">
            <que-list :list-data="bbsListData" />
          </template>
        </scroll-page>
      </el-col>
      <el-col :span="7" :offset="1" class="right-menu hidden-sm-and-down">
        <login-menu :is-login="userInfo" />
        <hotQuestions
          class="c-mb20"
          :hot-list="bbsBrowseListTopicsList"
          header-font-color="#fff"
          header-bg-color="#e41749"
          header-title="问答浏览榜"
          item-jump-link="/bbs?_id="
        />
        <web-site-info />
      </el-col>
    </el-row>
    <el-divider v-if="isNoPage">
      我，底线！打钱！！！
    </el-divider>
  </page-view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import scrollPage from '@/components/scrollList/index.vue'
import pageView from '@/components/pageView.vue'
import queList from '@/components/queList/queList.vue'
import loginMenu from '@/components/globalMenu/loginMenu.vue'
import hotQuestions from '@/components/globalMenu/hotQuestions.vue'
import webSiteInfo from '@/components/globalMenu/webSiteInfo.vue'
import NavList from '@/components/queList/NavList.vue'
import { getBbsTopics } from '@/store/api/global.js'

export default {
  layout: 'default',
  components: {
    scrollPage,
    pageView,
    queList,
    loginMenu,
    hotQuestions,
    webSiteInfo,
    NavList
  },
  data () {
    return {
      pages: 30,
      index: 1,
      isNoPage: false
    }
  },
  computed: {
    ...mapGetters(['bbsTabs', 'userInfo', 'bbsBrowseListTopicsList'])
  },
  async asyncData ({ error }) {
    const res = await getBbsTopics()

    if (res.code !== '0') { error({ statusCode: 404, message: '页面消失了' }) }
    return {
      bbsListData: res.data || []
    }
  },
  async mounted () {
    !this.bbsTabs[0] && await this.getBbsTabs()
    this.$nuxt.$loading.finish()
    this.getBbsBrowseListTopics()
  },
  methods: {
    ...mapActions(['getBbsTabs', 'getBbsBrowseListTopics']),
    async handleGetList () {
      if (this.isNoPage) { return false }

      this.$nuxt.$loading.start()
      const index = this.index + 1
      this.index = index
      console.log(1)

      const res = await getBbsTopics({ index, pages: this.pages })
      if (res.code === '0') {
        this.$nuxt.$loading.finish()
        if (res.data[0]) {
          this.bbsListData.push(...res.data)
        } else {
          this.isNoPage = true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
._index {
  padding: 10px 10px;
  padding-top: 0px;
  .context {
    padding: 10px 0;
    //border-top: rgb(114, 162, 250) solid 1px;
  }
  .right-menu {
    overflow: hidden;
    padding: 60px 3px 10px 10px;
    div {
      margin-bottom: 30px;
    }
  }
}
</style>
