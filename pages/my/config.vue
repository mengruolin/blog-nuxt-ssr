<template>
  <page-view>
    <div class="_header">
      <el-row class="_content">
        <el-col :span="12">
          <nuxt-link to="/">
            q
          </nuxt-link>
        </el-col>
        <el-col class="_btn" :span="12">
          <el-button type="primary">
            保存
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div class="_user-config">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template slot="title">
            <h3>基本信息</h3>
          </template>
          <el-row>
            <el-col :span="11">
              <el-input v-model="userInfo.nickName" />
            </el-col>
            <el-col :offset="2" :span="11">
              <el-input v-model="userInfo.nickName" />
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </page-view>
</template>

<script>
export default {
  data () {
    return {
      activeName: '1',
      userInfo: {
        nickName: '111'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$headerHeight: 50px;
._header {
  height: $headerHeight;
  width: 100%;
  overflow: hidden;
  background: #cccccc;
  ._content {
    max-width: $contentWidth;
    height: 100%;
    line-height: $headerHeight;
    margin: 0 auto;
    ._btn {
      height: 100%;
      text-align: right;
      padding-right: 20px;
    }
  }
}
._user-config {
  position: relative;
  top: 50px;
  max-width: $contentWidth;
  margin: 0 auto;
}
</style>
