<template>
  <page-view>
    <el-row>
      <el-col
        :span="16"
        :xs="24"
        :sm="24"
        :md="16"
        :lg="16"
        :xl="16"
      >
        <div class="nav-swiper">
          <el-radio-group v-model="navLabel" class="nav-list" @change="handleChangeNav">
            <el-radio-button label="">
              推荐
            </el-radio-button>
            <el-radio-button v-for="(item, k) of blogTabs" :key="k" :label="item.value">
              {{ item.label }}
            </el-radio-button>
          </el-radio-group>
        </div>
        <scroll-list>
          <el-card slot="list" class="content-list">
            <blog-list :lsit-data="blogListData" />
          </el-card>
        </scroll-list>
      </el-col>
      <el-col :span="6" :offset="2" class="hidden-sm-and-down blog-notice">
        <login-menu v-if="!userInfo" class="c-mb20" />
        <hotQuestions
          :hot-list="blogGoodListTopics"
          header-font-color="#e6f8f9"
          header-bg-color="#2a1a5e"
          header-title="精品榜"
          item-jump-link="/blog/"
        />
      </el-col>
    </el-row>
  </page-view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import loginMenu from '@/components/globalMenu/loginMenu.vue'
import pageView from '@/components/pageView'
import scrollList from '@/components/scrollList/index.vue'
import blogList from '@/components/blogList/blogList.vue'
import hotQuestions from '@/components/globalMenu/hotQuestions.vue'
import { getBlogTopics } from '@/store/api/global'

export default {
  components: {
    scrollList,
    blogList,
    loginMenu,
    pageView,
    hotQuestions
  },
  data () {
    return {
      navLabel: ''
    }
  },
  computed: {
    ...mapGetters(['blogTabs', 'userInfo', 'blogGoodListTopics'])
  },
  async asyncData () {
    const res = await getBlogTopics()

    return {
      blogListData: res.data || []
    }
  },
  async mounted () {
    !this.blogTabs[0] && await this.getBlogTabs()
    this.$nuxt.$loading.finish()
    this.getBlogGoodListTopics()
  },
  methods: {
    ...mapActions(['getBlogTabs', 'getBlogGoodListTopics']),
    async handleChangeNav (val) {
      const res = await getBlogTopics({ tab: val })

      if (res.code === '0') {
        this.blogListData = res.data
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.nav-swiper {
  width: 100%;
  .nav-list {
    & /deep/ .el-radio-button {

      & /deep/ .el-radio-button__inner {
        border: none;
        border-radius: 5px;
      }
      & /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner {
        background-color: $blogHeaderColor;
        border-left-color: $blogHeaderColor;
        box-shadow: -1px 0 0 0 $blogHeaderColor;
      }
    }
  }
}

.content-list {
  margin-top: 20px;
  & /deep/ .el-card__body { padding: 0 0;}
}

.blog-notice {
  margin-top: 55px;
}
</style>
