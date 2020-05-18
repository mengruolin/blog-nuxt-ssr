<template>
  <div class="_layout">
    <el-row :gutter="50">
      <el-col :span="6">
        <el-card class="menu-card">
          <div class="menu-header">
            导航菜单
          </div>
          <div
            v-for="item of navList"
            :key="item.index"
            :class="menuIndex === item.index ? 'menu-card-item menu-card-select-item' : 'menu-card-item'"
            @click="handleChangeUserMenu(item)"
          >
            {{ item.value }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="17" class="content-box">
        <div class="content-text">
          {{ contentText }}
        </div>
        <el-divider />
        <nuxt-child />
      </el-col>
    </el-row>
    <!-- <input ref="avatar" type="file" name="avatar" @change="handleChange"> -->
  </div>
</template>

<script>
const navList = [
  { index: 'baseInfo', value: '用户基本信息' },
  { index: 'accountSetting', value: '账户设置' },
  { index: 'otherSetting', value: '其他设置' }
]

export default {
  middleware: 'noLogin',
  layout: 'default',
  head () {
    return {
      meta: [{ name: 'viewport', content: 'user-scalable=yes' }]
    }
  },
  data () {
    return {
      menuIndex: navList[0].index,
      contentText: navList[0].value,
      navList
    }
  },
  mounted () {
    Object.freeze(this.navList)
  },
  methods: {
    handleChangeUserMenu (item) {
      this.menuIndex = item.index
      this.contentText = item.value
      this.$router.push(`/user/setting/${item.index}`)
    }
  }
}
</script>

<style lang="scss" scoped>
._layout {
  padding: 60px 80px;
  width: $headerWidth;
  .menu-card {
    & /deep/ .el-card__body {
      padding: 10px 1px 0 0;
    }
    & .menu-card-item:last-child {
      border-bottom: none;
    }
    .menu-header {
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      text-align: center;
    }
    .menu-card-item {
      text-align: center;
      height: 45px;
      line-height: 45px;
      margin-top: 1px;
      border-bottom: solid 1px #e2e2e2;
      overflow: hidden;
      cursor: pointer;
      translate: background-color;
      &:hover {
        background-color: #e2e2e2;
      }
    }
    .menu-card-select-item {
      border-left: 3px solid #e73838;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      background-color: rgb(138, 136, 136);
      color: #e2e2e2;
      &:hover {
        background-color: rgb(138, 136, 136);
      }
    }
  }
  .content-box {
    // display: flex;
    .content-text {
      font-size: 20px;
      font-weight: 500;
    }
  }

}
</style>
