<template>
  <scroll-list>
    <div class="nav-swiper">
      <el-radio-group v-model="navLabel" class="nav-list" @change="handleChangeNav">
        <el-radio-button v-for="(item, k) of blogNavList" :key="k" :label="item.label">
          {{ item.name }}
        </el-radio-button>
      </el-radio-group>
    </div>
    <el-card slot="list" class="content-list">
      <blog-list v-for="(item, k) of bbsListData" :key="k" />
    </el-card>
  </scroll-list>
</template>

<script>
import { mapGetters } from 'vuex'
import scrollList from '@/components/scrollList/index.vue'
import blogList from '@/components/blogList/blogList.vue'

export default {
  layout: 'blog',
  components: {
    scrollList,
    blogList
  },
  data () {
    return {
      navLabel: 'tuijian'
    }
  },
  computed: {
    ...mapGetters(['blogNavList', 'bbsListData'])
  },
  asyncData (context) {
    // console.log(context)
  },
  methods: {
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
