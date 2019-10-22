<template>
  <div class="content">
    <div class="container">
      <div class="main">
        <div class="media-pc">
          <el-row>
            <el-col :span="18">
              <div v-for="(item, k) of listData" :key="k">
                <home-list :list-data="item" />
              </div>
            </el-col>
            <el-col :offset="1" :span="5">
              <el-card>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="media-iphone">
          <el-col>
            <div v-for="(item, k) of listData" :key="k">
              <home-list :list-data="item" />
            </div>
          </el-col>
        </div>
      </div>
      <p v-if="loading">
        加载中...
      </p>
      <p v-if="noMore">
        没有更多了
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import homeList from '@/components/homeList/homeList.vue'

export default {
  components: {
    homeList
  },
  data () {
    return {
      activeName: 'second',
      listData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.listData.length >= 100
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  watch: {
  },
  methods: {
    ...mapActions(['test']),
    ...mapMutations(['changeDisableLoad']),
    load () {
      this.loading = true
      setTimeout(() => {
        if (this.listData.length > 100) {
          this.changeDisableLoad(true)
        }

        this.listData.push(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  padding: 100px 0 0 0;
}
</style>
