<template>
  <div>
    <scroll-page
      @scroll="handleGetList"
    >
      <template slot="list">
        <div v-for="(item, key) of list" :key="key">
          {{ item }}
        </div>
      </template>
    </scroll-page>
  </div>
</template>

<script>
import scrollPage from '@/components/scrollList/index.vue'

export default {
  layout: 'default',
  components: {
    scrollPage
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
