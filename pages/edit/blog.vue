<template>
  <div class="_edit">
    <div class="header">
      <el-input
        v-model="title"
        placeholder="这里是标题"
        maxlength="60"
      />
    </div>

    <div class="tag-swiper">
      <el-select v-model="tab" placeholder="选择分区">
        <el-option
          key="all"
          label="全部"
          value="null"
        />
        <el-option
          v-for="item in bbsTabs"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div>
      <el-upload
        class="avatar-uploader"
        action
        :http-request="cosUpload"
        :show-file-list="false"
      >
        <img v-if="coverImg" :src="coverImg" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon" />
      </el-upload>
    </div>
    <mavonEditor v-model="content" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import mavonEditor from '@/components/editor/mavonEditor'
import { createBlogTopic } from '@/store/api/global'
import Cos from '@/store/untils/cos'

export default {
  middleware: 'noLogin',
  components: {
    mavonEditor
  },
  data () {
    return {
      content: '#### 点击帮助快速浏览makedow语法↗',
      tab: null,
      title: '',
      coverImg: ''
    }
  },
  computed: {
    ...mapGetters(['bbsTabs', 'userInfo'])
  },
  mounted () {
    !this.bbsTabs[0] && this.getBbsTabs()
  },
  methods: {
    ...mapActions(['getBbsTabs']),
    handleAddTag () {},
    async handleRelease () {
      const res = await createBlogTopic({
        tab: this.tab,
        content: this.content,
        'cover_img': this.coverImg,
        title: this.title,
        'author_id': this.userInfo._id })

      if (res.code === '0') {
        this.$message.success('发布成功，3s后跳转...')
        // setTimeout(() => {
        //   this.$router.push(`/bbs?_id=${res.data._id}`)
        // }, 3000)
      } else {
        this.$message.error(res.message)
      }
    },
    cosUpload (option) {
      // console.log(option.file)

      Cos.putObj({
        Bucket: 'blog-sso-1254604265',
        Region: 'ap-chengdu',
        Dir: 'image/',
        Body: option.file
      })
        .then((res) => {
          if (res.statusCode === 200) {
            this.coverImg = `//${res.Location}`
          } else {
            this.$message.error('上传失败')
          }
        })

      // console.log(res)
    }
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

    .avatar-uploader /deep/ .el-upload {
    border: 1px solid #e2e2e2;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    margin-top: 30px;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #000;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  .avatar {
    width: 200px;
    height: 200px;
    display: block;
  }
}

</style>
