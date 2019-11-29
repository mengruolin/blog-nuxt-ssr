<template>
  <div class="c-header">
    <el-row>
      <el-col :span="8">
        <nuxt-link to="/bbs">
          qu
        </nuxt-link>
      </el-col>
      <el-col :span="8">
        2
      </el-col>
      <el-col :span="8">
        3
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.c-header {
  width: $headerWidth;
  margin: 0 auto;
  height: 100%;
}
</style>
