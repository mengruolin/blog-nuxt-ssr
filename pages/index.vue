<template>
  <page-view>
    <el-row>
      <el-col :span="16">
        <scroll-page
          @scroll="handleGetList"
        >
          <template slot="list">
            <div v-for="(item, key) of list" :key="key">
              {{ item }}
            </div>
          </template>
        </scroll-page>
      </el-col>
      <el-col :span="7" :offset="1">
        guanggao
      </el-col>
    </el-row>
  </page-view>
</template>

<script>
import scrollPage from '@/components/scrollList/index.vue'
import pageView from '@/components/pageView.vue'

export default {
  layout: 'default',
  components: {
    scrollPage,
    pageView
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    for (let i = 0; i < 100; i++) {
      this.list.push(['这是测试'])
    }
  },
  beforeDestroy () {
    this.$nextTick(() => {
      console.log(111)

      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  },
  methods: {
    handleGetList () {
      const listInfo = []

      for (let i = 0; i < 100; i++) {
        listInfo.push('新加的!')
      }
      this.list.push(...listInfo)
    }
  }
}
</script>
