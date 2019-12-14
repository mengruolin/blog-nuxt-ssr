<template>
  <div class="_listSwiper">
    <div v-for="(item, k) of lsitData" :key="k" class="list-items">
      <div class="operate-box">
        <div class="icon">
          <svg-icon :icon-class="item.status === 1 ? 'qMark' : 'fit' " class-name="icon-svg" />
        </div>
        <div class="text">
          {{ item.status === 1 ? '待回答' : '已采纳' }}
        </div>
      </div>
      <div class="item-context">
        <div class="user-box">
          <span class="user-avatar">
            <el-image :src="item.showImageTitle + item.authorAvatar" lazy />
          </span>
          <span class="user-name">
            <nuxt-link to="/">
              {{ item.authorName }}
            </nuxt-link>
          </span>
          <span class="q-info">
            <span class="time">
              {{ item.createTime }}
            </span>
            <span class="iview">
              <i class="el-icon-view" />
              {{ item.hits }}
            </span>
          </span>
        </div>
        <div class="q-title">
          <nuxt-link :to="'bbs?seq=' + item.seq">
            {{ item.title }}
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
  }
}
</script>

<style lang="scss" scoped>
._listSwiper {
  // height: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .list-items {
    height: 60px;
    padding: 5px 5px;
    display: flex;
    //border-top: springgreen solid 1px;
    border-bottom: rgb(189, 199, 194) solid 1px;
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
        }
        .user-name {
          //color: aqua;
          // width: 200px;
          flex: 1;
          text-decoration: underline;
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
        line-height: 30px;
        height: 30px;
        width: 100%;
        padding-right: 20px;
        @include nobr;
      }
    }
  }
}
</style>
