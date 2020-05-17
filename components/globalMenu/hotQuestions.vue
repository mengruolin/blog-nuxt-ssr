<template>
  <div class="_hotQuestions">
    <el-row class="_title" :style="{color: headerFontColor, backgroundColor: headerBgColor}">
      <el-col :span="16">
        {{ headerTitle }}
      </el-col>
      <el-col :span="8" class="ta-r">
        <!-- 更多... -->
      </el-col>
    </el-row>
    <div v-if="hotList[0]" class="_list">
      <div v-for="item of hotList.slice(0, 6)" :key="item._id" class="_items">
        <el-avatar
          size="small"
          shape="square"
          :src="item.author_id.avatarUrl"
          :title="item.author_id.nickName"
        />
        <nuxt-link :to="itemJumpLink + item._id">
          {{ item.title }}
        </nuxt-link>
        <span class="iview c-ml10">
          <i class="el-icon-view" />
          {{ item.visit_count }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotList: {
      type: Array,
      default: () => []
    },
    headerBgColor: {
      type: String,
      default: () => '#FFF'
    },
    headerFontColor: {
      type: String,
      default: () => '#000'
    },
    headerTitle: {
      type: String,
      default: () => '展示框'
    },
    itemJumpLink: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      active: 'first'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$globalheight: 290px;
$titleHight: 40px;
$listHeight: $globalheight - $titleHight - 20px;

._hotQuestions {
  height: $globalheight;
  //padding: 10px 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 5px;
   ._title {
     height: $titleHight;
     line-height: $titleHight;
     color: black;
     padding: 0 10px;
     font-size: 14px;
     padding: 0px 10px;
     font-weight: 300;
   }
   ._list {
     position: relative;
     padding: 5px 10px 10px 10px;
     width: 100%;
     height: $listHeight;
     //border: chartreuse solid 1px;
     ._items {
       height: $listHeight / 6;
       line-height: $listHeight / 6;
       overflow: hidden;
       display: flex;
       align-items: center;
       a {
         flex: 1;
         display: inline-block;
         @include nobr;
         padding-left: 10px;
         vertical-align: top;
       }
       .iview {
         width: 50px;
       }
       //border: chartreuse solid 1px;
     }
   }
}
</style>
