<!--
 * @Descripttion:
 * @version:
 * @Author: Meng Ruolin
 * @Date: 2019-12-02 16:59:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-12-02 18:04:57
 -->
<template>
  <div class="c-header">
    <div class="logo">
      <nuxt-link to="/">
        query
      </nuxt-link>
    </div>
    <div class="header-main">
      <div class="nav-big">
        <el-row class="nav-list">
          <el-col :span="8">
            <nuxt-link to="/">
              主页
            </nuxt-link>
          </el-col>
          <el-col :span="8">
            <nuxt-link to="/blog">
              博客
            </nuxt-link>
          </el-col>
          <el-col :span="8">
            <nuxt-link to="/other">
              有趣的东西
            </nuxt-link>
          </el-col>
        </el-row>
      </div>
      <!-- <div class="nav-small">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            主页<i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/">
              主页
            </el-dropdown-item>
            <el-dropdown-item command="/blog">
              博客
            </el-dropdown-item>
            <el-dropdown-item command="/other">
              有趣的东西
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div> -->

      <div class="search-big">
        <el-input class="input-w200" />
      </div>
      <!-- <div class="search-small">
        <el-button size="small" type="info" icon="el-icon-search" circle />
      </div> -->
    </div>
    <div class="user">
      <template v-if="!isLogin">
        <nuxt-link to="/login">
          登录
        </nuxt-link>|
        <nuxt-link to="/register">
          注册
        </nuxt-link>
      </template>
      <template v-else>
        <div class="user-release">
          <el-dropdown trigger="click" class="release-dropdown" @command="handleEdit">
            <span class="el-dropdown-link">
              发布<i class="el-icon-edit-outline" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="/edit">
                问题
              </el-dropdown-item>
              <el-dropdown-item command="/edit">
                博客
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="user-info">
          <el-dropdown trigger="click" class="avatar-swiper">
            <el-image class="avatar" src="/img/avator.jpeg">
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
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: true
    }
  },
  methods: {
    handleCommand (url) {
      this.$router.push(url)
    },
    handleEdit (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-header {
  max-width: $headerWidth;
  margin: 0 auto;
  height: 100%;
  color: $headerFontColor;
  display: flex;
  div {
    height: 100%;
    line-height: 50px;
    font-size: 16px;
    a {
      color: $headerNavColor;
      &:hover {
        color: $headerNavHoverColor;
      }
    }
  }
  .logo {
    width: 120px;
    text-align: left;
    font-size: 24px;
  }
  .user {
    width: 130px;
    display: flex;
    .user-release {
      width: 80px;
      .release-dropdown {
        .el-dropdown-link {
          color: $headerNavColor;
          cursor: pointer;
        }
      }
    }
    .user-info {
     // padding-right: 20px;
      width: 50px;
      font-size: 16px;
      text-align: right;
      line-height: 50px;
      .avatar-swiper {
        width: 40px;
        height: 40px;
        margin-top: 7px;
        overflow: hidden;
        cursor: pointer;
        .avatar {
          height: 100%;
          width: 100%;
          text-align: center;
          background: #cccccc;
          i {
            font-size: 24px;
          }
        }
      }
    }
  }
  .header-main {
    flex: 1;
    display: flex;
    .nav-big {
      flex: 1;
      @include unShow-900;
      .nav-list {
        max-width: 300px;
      }
    }
    .nav-small {
      flex: 1;
      @include show-900;
      .el-dropdown-link {
        color: $headerNavColor;
      }
    }
    .search-big {
      text-align: right;
      padding-right: 30px;
      width: 300px;
      @include unShow-630;
    }
    .search-small {
      width: 50px;
      @include show-630;
    }
  }
}
</style>
