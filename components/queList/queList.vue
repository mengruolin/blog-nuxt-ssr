<template>
  <div class="_listSwiper">
    <div v-if="!lsitData[0]" class="noDate">
      还没有人发布问题，快去<nuxt-link to="/edit/bbs">
        发表
      </nuxt-link>吧！
      😊
    </div>
    <div v-for="(item, k) of lsitData" :key="k" class="list-items">
      <div class="operate-box">
        <div class="icon">
          <svg-icon :icon-class="item.is_solved ? 'fit' : 'qMark'" class-name="icon-svg" />
        </div>
        <div class="text">
          {{ item.is_solved ? '已解决' : '待解决' }}
        </div>
      </div>
      <div class="item-context">
        <div class="user-box">
          <span class="user-avatar">
            <el-image :src="item.author_id.avatarUrl" lazy @click="handleShowUserInfo(item.author_id._id)" />
          </span>
          <span class="user-name" @click="handleShowUserInfo(item.author_id._id)">
            <nuxt-link to="/">
              {{ item.author_id.nickName }}
            </nuxt-link>
          </span>
          <span class="q-info">
            <span class="time">
              {{ item.create_at | dateFromNow }}
            </span>
            <span class="iview">
              <i class="el-icon-view" />
              {{ item.visit_count }}
            </span>
            <span class="iview">
              <i class="el-icon-chat-line-round" />
              {{ item.reply_count }}
            </span>
          </span>
        </div>
        <div class="q-title">
          <nuxt-link :to="'/bbs?_id=' + item._id" class="title-link">
            <div v-if="item.top" class="text-svg-box">
              <img src="/img/topTab.png" alt="">
            </div>

            <div v-if="item.hot" class="text-svg-box">
              <img src="/img/hotTab.png" alt="">
            </div>

            <div v-if="item.good" class="text-svg-box">
              <img src="/img/goodTab.png" alt="">
            </div>
            <span class="title_content">
              {{ item.title }}
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lsitData: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {
    handleShowUserInfo (_id) {
      this.$router.push(`/user/${_id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
._listSwiper {
  min-height: 100vh;
  position: relative;
  // height: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 10px;
  .noDate {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $headerBgColor;
    font-size: 20px;
  }
  .list-items {
    height: 70px;
    padding: 10px 5px;
    display: flex;
    //border-top: springgreen solid 1px;
    border-bottom: #e2e2e2 solid 1px;
    .operate-box {
      width: 50px;
      height: 100%;
      overflow: hidden;
      .icon {
        height: 35px;
        .icon-svg {
          //box-sizing: border-box;
          padding: 0 0 4px 0;
        }
      }
      .text {
        font-size: 12px;
        text-align: center;
        height: 15px;
      }
      // background: #f8f8f8;
    }
    .item-context {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      .user-box {
        width: 100%;
        height: 20px;
        display: flex;
        align-items: center;
        overflow: hidden;
        .user-avatar {
          height: 20px;
          width: 20px;
          &:hover {
            cursor: pointer;
          }
        }
        .user-name {
          //color: aqua;
          // width: 200px;
          flex: 1;
          //text-decoration: underline;
          font-size: 14px;
          display: block;
          height: 100%;
          margin-left: 10px;
          line-height: 20px;
          @include nobr;
        }
        .q-info {
          // position: absolute;
          width: 150px;
          overflow: hidden;
          right: 30px;
          // .time {
          // //margin-left: 0px;
          // }
          .iview {
            margin-left: 10px;
          }
        }
      }
      .q-title {
        font-size: 17px;
        line-height: 35px;
        height: 35px;
        width: 100%;
        padding-right: 20px;
        .title-link {
          display: flex;
          width: 100%;
          align-content: center;
          @include nobr;
          .text-svg-box {
            width: 25px;
            height: 25px;
            margin-top: 5px;
            overflow: hidden;
            margin-right: 2px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .title_content {
            flex: 1;
            width: 200px;
          }
        }
      }
    }
  }
}
</style>
