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
        <div class="nav-swieper" :style="openNavList ? 'height: 100%; padding-right: 10px;' : 'height: 50px; padding-right: 80px;'">
          <el-button v-if="!openNavList" type="text" class="open-list c-ml10" @click="handleSwitchNavList(true)">
            展开更多<i class="el-icon-arrow-down" />
          </el-button>
          <nuxt-link key="all" :to="`/`">
            <span>
              全部
            </span>
            <template v-for="item of bbsTabs">
              <nuxt-link :key="item.value" :to="`/bbs/${item.value}`">
                <span>
                  {{ item.label }}
                </span>
              </nuxt-link>
            </template>
            <el-button v-if="openNavList" type="text" class="close-list" @click="handleSwitchNavList(false)">
              收起<i class="el-icon-arrow-up" />
            </el-button>
          </nuxt-link>
        </div>
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
import { getBbsTopics } from '@/store/api/global.js'

export default {
  components: {
    scrollPage,
    pageView,
    queList,
    loginMenu,
    hotQuestions,
    webSiteInfo
  },
  data () {
    return {
      openNavList: false
    }
  },
  computed: {
    ...mapGetters(['bbsTabs', 'userInfo', 'bbsBrowseListTopicsList'])
  },
  async asyncData ({ app, params, error }) {
    const res = await getBbsTopics({ tab: params.name })

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
    handleGetList () {

    },
    handleSwitchNavList (type) {
      this.openNavList = type
    }
  }
}
</script>

<style lang="scss" scoped>
._index {
  padding: 10px 10px;
  padding-top: 0px;
  .nav-swieper {
    overflow: hidden;
    position: relative;
    width: 100%;
    //border: salmon solid 1px;
    padding: 10px 10px 10px 0;
    .open-list {
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translate(0, -50%)
    }
    span {
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
      border-radius: 1.2em;
      background: #ffffff;
      color: $navListColor;
      font-weight: 500;
      border: solid 1px;
      padding: 8px 8px;
      border-color: $navListColor;
      border-spacing: 1px;
    }
  }
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
