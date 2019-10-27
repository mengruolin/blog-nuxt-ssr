<template>
  <div class="backtop-group">
    <el-backtop
      title="滚回顶部"
      target="._lay"
      class="backtop"
    />

    <div class="feedBack" title="反馈">
      <i class="el-icon-chat-dot-square" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.backtop-group {
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: flex;
    flex-direction: column;
    .backtop {
        position: static;
    }
    .feedBack {
        position: relative;
        top: 10px;
        background-color: #FFF;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 6px rgba(0,0,0,.12);
        cursor: pointer;
        z-index: 5;
        font-size: 20px;

        &:hover {
            background-color:#F5F5F5;
        }
    }
}
</style>
