<template>
  <div class="_listSwiper">
    <div v-for="(item, k) of lsitData" :key="k" class="list-items">
      <div class="operate-box">
        up
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
      background: #f8f8f8;
    }
    .item-context {
      flex: 1;
      padding-left: 10px;
      .user-box {
        width: 100%;
        height: 20px;
        //line-height: 20px;
        overflow: hidden;
        span {display: inline-block;}
        .user-avatar {
          height: 20px;
          width: 20px;
        }
        .user-name {
          //color: aqua;
          width: 200px;
          text-decoration: underline;
          font-size: 14px;
          //vertical-align: sub;
          overflow: hidden;
          margin-left: 10px;
        }
        .q-info {
          float: right;
          overflow: hidden;
          padding-right: 20px;
          .time {
          //margin-left: 0px;
        }
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
        overflow: hidden;
        .nuxt-link {
          @include nobr;
        }
      }
    }
  }
}
</style>
