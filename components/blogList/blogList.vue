<template>
  <div class="_blog">
    <div class="_user-info">
      <span class="avatar-swiper">
        <nuxt-link to="/userInfo">
          <el-image class="avatar" src="/img/avator.jpeg" />
        </nuxt-link>
      </span>
      <span class="user-name c-ml10">
        <nuxt-link to="/userInfo">
          孟若林
        </nuxt-link>
      </span>
      <span class="actions">
        <span class="_time">2019-12-15</span>
        <span class="_share">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-share">分享</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-close">屏蔽作者</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </span>
      </span>
    </div>

    <div class="_content">
      <div class="_title">
        <span>Android自定义控件(十三)——实现CSDN搜索框文字提Android自定义控件(十三)——实现CSDN搜索框文字提示容器</span>
      </div>
      <div class="_photo-swiper">
        <el-image
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          fit="fill"
        />
      </div>
    </div>

    <el-row class="_article-info">
      <span class="_comment">
        <i class="el-icon-chat-line-round" />100
      </span>
      <span class="_view c-mr10">
        <i class="el-icon-view" />1000
      </span>
      <span class="_negnative c-mr10">
        <i class="iconfont c-ft12">&#xe690;</i>1000
      </span>
      <span class="_agree c-mr10">
        <i class="iconfont c-ft12">&#xe702;</i>100
      </span>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
._blog {
  height: 170px;
  width: 100%;
  border-bottom: rgb(209, 205, 205) solid 1px;
  padding: 5px 10px 10px 10px;
  &:hover {
    cursor: pointer;
    background: #c5c3c327;
  }
  ._user-info {
    height: 30px;
    line-height: 30px;
    display: flex;
    .avatar-swiper {
      width: 30px;
        height: 30px;
        overflow: hidden;
      .avatar {
        width: 100%;
        height: 100%;
      }
    }
    .user-name {
      flex: 1;
      a {
        text-decoration: underline;
      }
    }
    .actions {
      width: 150px;
      padding-right: 10px;
      text-align: right;
      ._time {
        display: inline-block;
        width: 90px;
        text-align: left;
        // overflow: hidden;
      }
      ._share {
        display: inline-block;
        width: 30px;
        text-align: right;
        cursor: pointer;
      }
    }
  }

  ._content {
    height: 100px;
    padding: 10px 10px;
    overflow: hidden;
    display: flex;
    ._title {
      font-size: 16px;
      font-weight: 800;
      overflow: hidden;
      flex: 1;
      line-height: 20px;
      padding-right: 10px;
    }
    ._photo-swiper {
      width: 80px;
      height: 80px;
      overflow: hidden;
      .el-image {
        width: 100%;
        height: 100%
      }
    }
  }

  ._article-info {
    height: 30px;
    line-height: 30px;
    padding: 2px 10px;
    text-align: right;
    display: flex;
    flex-direction: row-reverse;
    ._view {
      // width: 40px;
      overflow: hidden;
      text-align: left;
    }

    ._comment {
      // width: 40px;
      overflow: hidden;
    }
    ._agree {
      i {
        font-size: 12px;
      }
    }
  }
}
</style>
