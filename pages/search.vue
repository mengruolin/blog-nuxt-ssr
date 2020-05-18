<template>
  <div class="_layout">
    <el-row class="_index">
      <el-col
        :span="16"
        :xs="24"
        :sm="24"
        :md="16"
        :lg="16"
        :xl="16"
      >
        <el-input
          v-model="searchContent"
          placeholder="请输入搜索内容"
          @keyup.enter.native="handleSubmitSearch"
        >
          <el-select slot="prepend" v-model="searchType" placeholder="请选择" class="c-w100">
            <el-option label="问 答" value="bbs" />
            <el-option label="博 文" value="blog" />
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="handleSubmitSearch" />
        </el-input>

        <div v-if="searchData[0]" class="c-mt20">
          <el-card v-if="'against_count' in searchData[0]">
            <blog-list :list-data="searchData" />
          </el-card>
          <que-list v-else :list-data="searchData" />
        </div>
        <div v-else class="noSearchData">
          <span>没收搜索到相关信息。。。😊😊😊</span>
        </div>
      </el-col>
      <el-col :span="7" :offset="1" class="hidden-sm-and-down">
        <login-menu :is-login="userInfo" class="c-mb20" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSearchInfo } from '@/store/api/global'
import loginMenu from '@/components/globalMenu/loginMenu.vue'
import queList from '@/components/queList/queList'
import blogList from '@/components/blogList/blogList'

export default {
  components: {
    loginMenu,
    queList,
    blogList
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  async asyncData ({ query, error }) {
    if (query.keyWord) {
      const res = await getSearchInfo({ keyWord: query.keyWord, type: query.type })

      return {
        searchData: res.data || [],
        searchType: query.type || 'bbs',
        searchContent: query.keyWord || ''
      }
    }

    return {
      searchData: [],
      searchType: 'bbs',
      searchContent: ''
    }
  },
  methods: {
    async handleSubmitSearch () {
      if (this.searchContent === '') { return false }

      this.$nuxt.$loading.start()
      const res = await getSearchInfo({ keyWord: this.searchContent, type: this.searchType })

      if (res.code === '0') {
        this.$nuxt.$loading.finish()
        this.searchData = res.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
._layout {
  padding-top: 40px;
  ._index {
    padding: 10px 10px;
    .noSearchData {
      height: 80vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: firebrick;
      font-size: 22px;
    }
  }
}
</style>
