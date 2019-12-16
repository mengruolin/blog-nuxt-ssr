<template>
  <div class="_hotQuestions">
    <div class="_title">
      <span>浏览榜单</span>
    </div>
    <div class="_list">
      <div class="_items">
        <nuxt-link to="ttt">
          1
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
     font-size: 18px;
     font-weight: 500;
   }
   ._list {
     width: 100%;
     height: $listHeight;
     border: chartreuse solid 1px;
     ._items {
       height: $listHeight / 6;
       line-height: $listHeight / 6;
       border: chartreuse solid 1px;
     }
   }
}
</style>
