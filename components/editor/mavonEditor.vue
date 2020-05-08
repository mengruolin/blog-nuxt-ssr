<template>
  <div class="mavonEditor">
    <client-only>
      <mavon-editor
        ref="md"
        :style="{'z-index': 0}"
        :value="content"
        :toolbars="defaultOption"
        @change="inputEvent"
        @imgAdd="handleAddImg"
      />
    </client-only>
  </div>
</template>

<script>
import Cos from '@/store/untils/cos'

const defaultOption = {
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
}

export default {
  props: {
    value: { type: String, default: () => '请输入' }
  },
  data () {
    return {
      defaultOption
    }
  },
  computed: {
    content () {
      return this.value
    }
  },
  mounted () {
    Object.freeze(this.defaultOption)
  },
  methods: {
    inputEvent (value) {
      this.$emit('input', value)
    },
    async handleAddImg (pos, $file) {
      console.log(pos, $file)
      const res = await Cos.putObj({
        Bucket: 'blog-sso-1254604265',
        Region: 'ap-chengdu',
        Dir: 'image/',
        Body: $file
      })

      if (res.statusCode === 200) {
        console.log(res)

        const imageUrl = `//${res.Location}`

        this.$refs.md.$img2Url(pos, imageUrl)
      } else {
        this.$message.error('上传失败')
      }
    }
  }
}
</script>
