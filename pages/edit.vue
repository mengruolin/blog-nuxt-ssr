<template>
  <div class="_edit">
    <div class="header">
      <el-input placeholder="标题以句号结尾" />
    </div>

    <div class="tag-swiper">
      <el-button class="button-new-tag" size="small" @click="handleAddTag">
        <i class="el-icon-plus" />添加标签
      </el-button>
    </div>
    <div class="mavonEditor">
      <client-only>
        <mavon-editor v-model="handbook" :toolbars="markdownOption" />
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'edit',
  data () {
    return {
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        // superscript: true, // 上角标
        // subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        // htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        // save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        // navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true // 单双栏模式
        // preview: true // 预览
      },
      handbook: '#### 点击帮助快速浏览makedow语法↗'
    }
  },
  methods: {
    handleAddTag () {}
  }
}
</script>

<style lang="scss" scoped>
._edit {
  width: 100%;
  height: 100%;
  padding: 30px 6px 6px 6px;
  .header {

  }
  .tag-swiper {
    margin-top: 30px;
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
  }
  .mavonEditor {
    margin-top: 30px;
    height: 500px;
    & /deep/ .markdown-body {
      height: 100%;
    }
  }
}

</style>
