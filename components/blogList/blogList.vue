<template>
  <div class="list_swiper">
    <div v-if="!listData[0]" class="noDate">
      还没有人发表博客，快去<nuxt-link to="/edit/blog">
        发表
      </nuxt-link>吧！
      😊
    </div>
    <div v-for="item of listData" :key="item._id" class="_blog">
      <div class="_user-info">
        <span class="avatar-swiper">
          <nuxt-link :to="`/user/${item.author_id._id}`">
            <el-image class="avatar" :src="item.author_id.avatarUrl" />
          </nuxt-link>
        </span>
        <span class="user-name c-ml10">
          <nuxt-link :to="`/user/${item.author_id._id}`">
            {{ item.author_id.nickName }}
          </nuxt-link>
        </span>
        <span class="actions">
          <span class="_time">{{ item.create_at | dateFromNow }}</span>
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
          <nuxt-link :to="`/blog/${item._id}`" class="title_link">
            <div v-if="item.top" class="text-svg-box">
              <img src="/img/topTab.png" alt="">
            </div>

            <div v-if="item.hot" class="text-svg-box">
              <img src="/img/hotTab.png" alt="">
            </div>

            <div v-if="item.good" class="text-svg-box">
              <img src="/img/goodTab.png" alt="">
            </div>
            <span>{{ item.title }}</span>
          </nuxt-link>

          <el-row class="_article-info">
            <span class="_comment">
              <i class="el-icon-chat-line-round" />
              {{ item.reply_count }}
            </span>
            <span class="_view c-mr10">
              <i class="el-icon-view" />
              {{ item.visit_count }}
            </span>
            <span class="_negnative c-mr10">
              <i class="iconfont c-ft12">&#xe690;</i>
              {{ item.against_count }}
            </span>
            <span class="_agree c-mr10">
              <i class="iconfont c-ft12">&#xe702;</i>
              {{ item.agree_count }}
            </span>
          </el-row>
        </div>
        <div class="_photo-swiper">
          <el-image
            :src="item.cover_img"
            fit="fill"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.list_swiper {
  position: relative;
  min-height: 100vh;
  padding: 10px 10px;
  .noDate {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $blogHeaderColor;
    font-size: 20px;
  }
  ._blog {
    height: 140px;
    width: 100%;
    border-bottom: rgb(209, 205, 205) solid 1px;
    padding: 5px 10px 10px 10px;
    &:hover {
      // cursor: pointer;
      // background: #c5c3c327;
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
        overflow: hidden;
        flex: 1;
        padding-right: 10px;
        display: flex;
        height: 100%;
        flex-direction: column;
        .title_link {
          display: block;
          width: 100%;
          font-size: 16px;
          font-weight: 800;
          color: #000000;
          height: 100%;
          line-height: 40px;
          @include nobr;
          .text-svg-box {
            display: inline-block;
            width: 25px;
            height: 25px;
            line-height: 40px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          span {
            vertical-align: super;
          }
        }
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
}
</style>
