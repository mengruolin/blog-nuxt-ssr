<template>
  <div class="_hotQuestions">
    <el-row class="_title">
      <el-col :span="16">
        浏览榜单
      </el-col>
      <el-col :span="8" class="ta-r">
        更多...
      </el-col>
    </el-row>
    <div v-if="hotList[0]" class="_list">
      <div v-for="item of hotList" :key="item._id" class="_items">
        <el-avatar size="small" shape="square" :src="item.author_id.avatarUrl" />
        <nuxt-link :to="'/bbs?_id=' + item._id">
          {{ item.title }}
        </nuxt-link>
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
    }
  },
  data () {
    return {
      active: 'first'
    }
  }
}
</script>

<style lang="scss" scoped>
$globalheight: 300px;
$titleHight: 30px;
$listHeight: $globalheight - $titleHight - 20px;

._hotQuestions {
  height: $globalheight;
  padding: 10px 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
   ._title {
     height: $titleHight;
     line-height: $titleHight;
     color: black;
     padding: 0 5px;
     font-size: 14px;
     font-weight: 300;
   }
   ._list {
     position: relative;
     top: 10px;
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
         padding-left: 20px;
         vertical-align: top;
       }
       //border: chartreuse solid 1px;
     }
   }
}
</style>
