<template>
  <div class="header">
    <div class="media-iphone">
      <el-row :span="8">
        <i class="el-icon-s-fold" />
      </el-row>
    </div>
    <div class="media-pc">
      <div class="container">
        <el-row>
          <el-col :span="3" style="text-align: center;">
            <div class="logs-swiper">
              <a href="/"><img src="/login_heard.png"></a>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="ml-nav-list">
              <div v-for="(items, k) of navList" :key="k" class="ml-nav-items">
                <a class="nav-fonts" :href="items.linkTo" @click="handleCliceNav(item.linkTo)">{{ items.label }}</a>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <el-select
              v-model="search"
              class="c-w300"
              multiple
              filterable
              placeholder="快搜"
              remote
            />
          </el-col>
          <el-col :span="4" style="line-height: 40px;">
            <a class="nav-fonts" @click="handleTest">登录</a>
            <a class="nav-fonts c-ml20" @click="handle">注册</a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      search: '',
      navList: [
        { label: '主页', linkTo: '/main' },
        { label: '博客', linkTo: '/blog' },
        { label: '商店', linkTo: '/shope' },
        { label: '其它', linkTo: '/others' }
      ]
    }
  },
  computed: {
    ...mapGetters(['num', 'n'])
  },
  methods: {
    ...mapActions(['test', 't']),
    handleTest () {
      // console.log(11)
      this.test()
      console.log(this.n)
    },
    handle () {
      console.log('?')
    }
  }
}
</script>

<style lang="scss" scoped>
.media-pc {
  @media (max-width: 980px) {
    display: none;
  }
}
.media-iphone {
  @media (min-width: 980px) {
    display: none;
  }
}
.header {
  width: 100vw;
  height: 50px;
  box-sizing: border-box;
  padding: 5px 20px;
  background: rgb(255, 255, 255);
  border-bottom: solid #eeeeee 1px;
  .logs-swiper {
    width: 120px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ml-nav-list {
    display: flex;
    height: 40px;
    line-height: 40px;
    align-items: center;
    .ml-nav-items {
        display: block;
        width: 25%;
        text-align: center;
    }
  }
}
</style>
