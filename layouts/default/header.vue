<!--
 * @Descripttion:
 * @version:
 * @Author: Meng Ruolin
 * @Date: 2019-12-02 16:59:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-12-02 18:04:57
 -->
<template>
  <el-row class="c-header">
    <el-col :span="4">
      <nuxt-link to="/">
        qu
      </nuxt-link>
    </el-col>
    <el-col :span="8">
      <el-row>
        <el-col :span="8">
          <nuxt-link to="/">
            主页
          </nuxt-link>
        </el-col>
        <el-col :span="8">
          <nuxt-link to="/blog">
            博客
          </nuxt-link>
        </el-col>
        <el-col :span="8">
          <nuxt-link to="/other">
            有趣的东西
          </nuxt-link>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8">
      <el-input class="c-w200" />
    </el-col>
    <el-col :span="4">
      <nuxt-link to="/login">
        登录
      </nuxt-link>|
      <nuxt-link to="/regist">
        注册
      </nuxt-link>
    </el-col>
  </el-row>
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
  color: $headerFontColor;
  .el-col {
    height: 100%;
    line-height: 50px;
    font-size: 16px;
    a {
      color: $headerNavColor;
      &:hover {
        color: $headerNavHoverColor;
      }
    }
  }
}
</style>
