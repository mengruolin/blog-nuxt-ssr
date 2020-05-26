<template>
  <div
    class="nav-swieper"
    :style="openNavList ? 'height: auto; padding-right: 10px;' : 'height: 50px; padding-right: 80px;'"
  >
    <el-button v-if="!openNavList" type="text" class="open-list c-ml10" @click="handleSwitchNavList(true)">
      展开更多<i class="el-icon-arrow-down" />
    </el-button>
    <nuxt-link key="all" :to="`/`">
      <span :class="indexNav === '/' && 'lightNav'">
        全部
      </span>
      <template v-for="item of listData">
        <nuxt-link :key="item.value" :to="`/bbs/${item.value}`">
          <span :class="indexNav === item.value && 'lightNav'">
            {{ item.label }}
          </span>
        </nuxt-link>
      </template>
    </nuxt-link>
    <el-button v-if="openNavList" type="text" class="close-list" @click="handleSwitchNavList(false)">
      收起<i class="el-icon-arrow-up" />
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      openNavList: false,
      indexNav: '/'
    }
  },
  watch: {
    $route (val, prv) {
      if (val.params.name) {
        this.indexNav = val.params.name
      } else {
        this.indexNav = '/'
      }
    }
  },
  mounted () {
    const navName = this.$route.params.name
    this.indexNav = navName || '/'
  },
  methods: {
    handleSwitchNavList (type) {
      this.openNavList = type
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-swieper {
    overflow: hidden;
    position: relative;
    width: 100%;
    //border: salmon solid 1px;
    padding: 10px 10px 10px 0;
    .open-list {
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translate(0, -50%)
    }
    span {
      display: inline-block;
      background: #ffffff;
      color: $navListColor;
      border-spacing: 1px;
      display: inline-block;
      margin: 0 10px 10px 2px;
      background: #ffffff;
      font-weight: 500;
      box-shadow: 0 0 3px #e2e2e2;
      padding: 10px 15px;
    }
    .lightNav {
      background-color: #909399;
      color: $headerNavColor;
      transition: background-color 1.2s ease-out;
    }
  }
</style>
