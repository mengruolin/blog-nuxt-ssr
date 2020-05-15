<template>
  <scroll-list>
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
    <el-card slot="list" class="content-list">
      <blog-list :lsit-data="blogListData" />
    </el-card>
  </scroll-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import scrollList from '@/components/scrollList/index.vue'
import blogList from '@/components/blogList/blogList.vue'
import { getBlogTopics } from '@/store/api/global'

export default {
  components: {
    scrollList,
    blogList
  },
  data () {
    return {
      navLabel: ''
    }
  },
  computed: {
    ...mapGetters(['blogTabs'])
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
  },
  methods: {
    ...mapActions(['getBlogTabs']),
    handleChangeNav (val) {
      console.log(val)
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
</style>
