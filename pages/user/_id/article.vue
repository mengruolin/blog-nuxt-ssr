<template>
  <div class="_layout">
    <el-timeline>
      <el-timeline-item
        v-for="item of articleData"
        :key="item._id"
        placement="top"
      >
        <el-card class="timeline-card">
          <nuxt-link :to="`/blog/${item._id}`">
            {{ item.title }}
          </nuxt-link>
          <div class="c-mt10">
            发布时间：{{ item.create_at | dateFromNow }}
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { getSearchUserBlog } from '@/store/api/global.js'
export default {
  props: {
    theUserInfo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      articleData: []
    }
  },
  mounted () {
    this.$emit('tabType', 'article')
    this.initPage()
  },
  methods: {
    async initPage () {
      this.$nuxt.$loading.start && this.$nuxt.$loading.start()
      const userId = this.theUserInfo._id

      const res = await getSearchUserBlog({ 'author_id': userId })

      if (res.code === '0') {
        this.$nuxt.$loading.finish()
        this.articleData = res.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
._layout {
  min-height: 100vh;
    .timeline-card {
    a {
      font-size: 18px;
      font-weight: 700;
      color: #000000;
    }
  }
}
</style>
