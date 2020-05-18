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
      <!-- <el-button class="button-new-tag" size="small" @click="handleAddTag">
        <i class="el-icon-plus" />选择标签
      </el-button> -->
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
    <!-- <div class="mavonEditor">
      <client-only>
        <mavon-editor ref="md" v-model="content" :toolbars="markdownOption" @imgAdd="handleAddImg" />
      </client-only>
    </div> -->
    <mavonEditor v-model="content" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import mavonEditor from '@/components/editor/mavonEditor'
import { createBbsTopic } from '@/store/api/global'

export default {
  middleware: 'noLogin',
  components: {
    mavonEditor
  },
  data () {
    return {
      content: '#### 点击帮助快速浏览makedow语法↗',
      tab: null,
      title: ''
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
      const res = await createBbsTopic({
        tab: this.tab,
        content: this.content,
        title: this.title,
        'author_id': this.userInfo._id })

      if (res.code === '0') {
        this.$message.success('发布成功，3s后跳转...')
        setTimeout(() => {
          this.$router.push(`/bbs?_id=${res.data._id}`)
        }, 3000)
      } else {
        this.$message.error(res.message)
      }
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
}

</style>
