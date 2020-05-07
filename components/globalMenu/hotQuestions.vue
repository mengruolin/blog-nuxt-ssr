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
    <div class="_list">
      <div class="_items">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <nuxt-link to="ttt">
          梦想去远方，然而梦想只是梦想，希望不负韶华
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
