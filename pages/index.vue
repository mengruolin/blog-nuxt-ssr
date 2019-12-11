<template>
  <page-view>
    <el-row class="_index">
      <el-col :span="16">
        <div class="nav-swieper" :style="openNavList ? 'height: 100%' : 'height: 50px'">
          <el-button v-if="!openNavList" type="text" class="open-list" @click="handleSwitchNavList(true)">
            展开更多<i class="el-icon-arrow-down" />
          </el-button>
          <template v-for="(item, k) of bbsNavList">
            <nuxt-link v-if="item.urlLevel >= 1" :key="k" :to="item.baseUrl + item.url">
              <el-tag>
                {{ item.label }}
              </el-tag>
            </nuxt-link>
            <a v-else :key="k" :href="item.url">
              <el-tag>
                {{ item.label }}
              </el-tag>
            </a>
          </template>
          <el-button v-if="openNavList" type="text" class="close-list" @click="handleSwitchNavList(false)">
            收起<i class="el-icon-arrow-up" />
          </el-button>
        </div>
        <scroll-page
          class="context"
          @scroll="handleGetList"
        >
          <template slot="list">
            <que-list :lsit-data="bbsListData" />
          </template>
        </scroll-page>
      </el-col>
      <el-col :span="7" :offset="1" class="right-menu">
        <login-menu />
        <hotQuestions />
      </el-col>
    </el-row>
  </page-view>
</template>

<script>
import { mapGetters } from 'vuex'
import scrollPage from '@/components/scrollList/index.vue'
import pageView from '@/components/pageView.vue'
import queList from '@/components/queList/queList.vue'
import loginMenu from '@/components/globalMenu/loginMenu.vue'
import hotQuestions from '@/components/globalMenu/hotQuestions.vue'

export default {
  layout: 'default',
  components: {
    scrollPage,
    pageView,
    queList,
    loginMenu,
    hotQuestions
  },
  data () {
    return {
      // bbsListData: [],
      openNavList: false
    }
  },
  computed: {
    ...mapGetters(['bbsNavList', 'bbsListData'])
  },
  mounted () {
    this.$nextTick(() => {
      // this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  },
  methods: {
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
  .nav-swieper {
    overflow: hidden;
    position: relative;
    width: 100%;
    //border: salmon solid 1px;
    padding: 10px 60px 10px 0;
    .open-list {
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translate(0, -50%)
    }
    .el-tag {
      margin-right: 10px;
      margin-bottom: 10px;
      border-radius: 20px;
      background: #ffffff;
      color: $navListColor;
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
