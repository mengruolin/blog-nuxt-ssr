<template>
  <div class="_edit">
    <div class="_header">
      <div class="_main">
        <div class="_logo">
          <nuxt-link to="/">
            query
          </nuxt-link>
        </div>
        <div class="_btn">
          <el-button type="text">
            发布&nbsp;<i class="el-icon-position" />
          </el-button>
          <el-dropdown trigger="click" class="avatar-swiper">
            <el-image class="avatar" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
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
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
._edit {
  ._header {
    width: 100vw;
    height: 50px;
    background: $editBgColor;
    ._main {
      max-width: $headerWidth;
      margin: 0 auto;
      line-height: 50px;
      padding: 0 10px;
      ._logo {
        width: 100px;
        font-size: 20px;
        display: inline-block;
        a {
          color: antiquewhite;
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
