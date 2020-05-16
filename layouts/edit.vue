<template>
  <div class="_edit">
    <div class="_header">
      <div class="_main">
        <div class="_logo">
          <span @click="handleGoBack">
            <i class="iconfont">&#xe65f;</i>
            返回
          </span>
        </div>
        <div class="_btn">
          <el-button type="text" @click="handleRelease">
            发布&nbsp;<i class="el-icon-position" />
          </el-button>
          <el-dropdown trigger="click" class="avatar-swiper">
            <el-image class="avatar" :src="userInfo.avatarUrl">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline" />
              </div>
            </el-image>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>消息</el-dropdown-item>
              <el-dropdown-item>日志</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="_main">
      <nuxt ref="nuxt" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    handleRelease () {
      this.$refs.nuxt.$children[0].$children[0].$children[0].handleRelease()
    },
    handleGoBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
._edit {
  padding-top: 50px;
  ._header {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 50px;
    background: $editBgColor;
    z-index: 3;
    ._main {
      max-width: $headerWidth;
      margin: 0 auto;
      line-height: 50px;
      padding: 0 10px;
      ._logo {
        width: 100px;
        font-size: 20px;
        display: inline-block;
        span {
          color: antiquewhite;
          cursor: pointer;
        }
      }
      ._btn {
        float: right;
        width: 200px;
        height: 50px;
        text-align: right;
        .el-button {
          color: aliceblue;
          vertical-align: text-bottom;
          margin-right: 20px;
        }
        .avatar-swiper {
          width: 40px;
          height: 40px;
          margin-top: 5px;
          overflow: hidden;
          border-radius: 50%;
          cursor: pointer;
          //border: @headerFontColor solid 0.5px;
          .avatar {
            height: 100%;
            width: 100%;
            text-align: center;
            background: #ffffff;
            i {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
  ._main {
    max-width: $contentWidth;
    margin: 0 auto;
  }

}
</style>
