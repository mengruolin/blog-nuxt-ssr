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
      <!-- <svg-icon icon-class="logoB" /> -->
      <!-- <nuxt-link to=""> -->
      <span>
        B
      </span>

      <!-- </nuxt-link> -->
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
              其它
            </nuxt-link>
          </el-col>
        </el-row>
      </div>
      <div class="nav-small">
        <el-dropdown trigger="click" placement="bottom-start" @command="handleCommand">
          <span class="el-dropdown-link">
            博客<i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/">
              主页
            </el-dropdown-item>
            <el-dropdown-item command="/other">
              其它
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="search-big">
        <el-input class="input-w200" placeholder="搜问题，搜博客" />
      </div>

      <div class="search-small">
        <span>搜文章，搜博客</span>
        <!-- <el-input class="c-w100" placeholder="搜问题，搜博客" /> -->
      </div>
    </div>
    <div class="user">
      <template v-if="!userInfo">
        <div class="login">
          <nuxt-link to="/login">
            登录
          </nuxt-link>|
          <nuxt-link to="/register">
            注册
          </nuxt-link>
        </div>
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
        <div class="user-info c-ml10">
          <el-dropdown trigger="click" class="avatar-swiper">
            <el-avatar class="avatar" :src="userInfo.imgTitle + userInfo.avatarUrl">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline" />
              </div>
            </el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="$router.push('/user')">
                个人中心
              </el-dropdown-item>
              <el-dropdown-item>消息</el-dropdown-item>
              <el-dropdown-item>日志</el-dropdown-item>
              <el-dropdown-item @click.native="handleLogOut">
                退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    ...mapActions(['logOut']),
    handleCommand (url) {
      this.$router.push(url)
    },
    async handleLogOut () {
      const res = await this.logOut()
      if (res.code) {
        window.location.reload()
      } else {
        this.$message.error(res.message)
      }
    },
    handleEdit (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-header {
  max-width: $blogHeaderWidth;
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
    width: 40px;
    text-align: left;

    span {
      font-weight: 900;
      font-size: 24px;
      display: block;
      width: 100%;
      height: 100%;
      color: #ffffff;
    }
  }
  .user {
    width: 130px;
    display: flex;
    .login {
      width: 100%;
      text-align: right;
      color: #cccccc;
    }
    .user-release {
      width: 80px;
      text-align: right;
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
        width: 35px;
        height: 35px;
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
      // flex: 1;
      width: 400px;
      @include unShow-900;
      .nav-list {
        margin-left: 30px;
        max-width: 200px;
      }
    }
    .nav-small {
      // flex: 1;
      width: 70px;
      @include show-900;
      .el-dropdown-link {
        color: $headerNavColor;
      }
    }
    .search-big {
      text-align: right;
      padding-right: 30px;
      // width: 300px;
      flex: 1;
      @include unShow-630;
    }
    .search-small {
      flex: 1;
      line-height: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
      @include show-630;
      cursor: text;
      span {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        background: #ffffff;
        // padding: 2px 2px;
        text-indent: 5px;
        color: $headerBgColor;
        border: #dbdbdb solid 1px;
      }
    }
  }
}
</style>
