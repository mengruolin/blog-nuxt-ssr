<template>
  <div>
    <el-row class="_index">
      <el-col
        :span="16"
        :xs="24"
        :sm="24"
        :md="16"
        :lg="16"
        :xl="16"
      >
        <div class="topic-box">
          <div class="topic-header">
            <div class="topic-title-box">
              <span class="topic-title">{{ topicData.title }}</span>
            </div>
            <div class="topic-info-Box">
              <span>作者：{{ topicData.author_id.nickName }}</span>
              <span class="c-ml20">发布时间：{{ topicData.create_at | DateFormat }}</span>
              <span class="c-ml20">更新时间：{{ topicData.update_at | dateFromNow }}</span>
              <span class="c-ml20">回复数：{{ topicData.reply_count }}</span>
              <span class="c-ml20">浏览量：{{ topicData.visit_count }}</span>
            </div>
          </div>
          <div class="topic-content">
            <mavon-editor-show :value="topicData.content" />
          </div>
        </div>
        <div class="reply-box">
          <div v-for="item of replyList" :key="item._id" class="reply-item">
            <div class="reply-header">
              <el-avatar shape="square" :src="item.author_id.avatarUrl" />
              <div class="user-info">
                <div>{{ item.create_at | DateFormat }}</div>
                <div>{{ item.author_id.nickName }}</div>
              </div>
            </div>
            <div class="reply-content">
              <mavon-editor-show :value="item.content" />
            </div>
          </div>
        </div>
        <div v-if="userInfo" class="editor-box">
          <mavonEditor v-model="content" />
          <el-col class="btn-group">
            <el-button
              class="c-w100"
              style="background: #e41749; color: #FFF;"
              @click="handleSubmit"
            >
              发布
            </el-button>
          </el-col>
        </div>
        <div v-else>
          <isLoginEditor />
        </div>
      </el-col>
      <el-col :span="7" :offset="1" class="right-menu hidden-sm-and-down">
        <div class="userInfo-box" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getOneBbsTopics, createBbsReply, getBbsReply } from '@/store/api/global'
import mavonEditorShow from '@/components/editor/mavonEditorShow'
import mavonEditor from '@/components/editor/mavonEditor'
import isLoginEditor from '@/components/isLoginEditor'

export default {
  header: {
    meta: {}
  },
  components: {
    mavonEditorShow,
    mavonEditor,
    isLoginEditor
  },
  data () {
    return {
      content: '',
      replyList: []
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    createReplayParams () {
      return {
        'author_id': this.userInfo._id,
        'topic_id': this.topicData._id,
        content: this.content
      }
    },
    getReplyParams () {
      return {
        'topic_id': this.topicData._id
      }
    }
  },
  async asyncData ({ query }) {
    const res = await getOneBbsTopics(query)

    return {
      topicData: res.data || []
    }
  },
  mounted () {
    this.handleGetReply()
  },
  methods: {
    async handleSubmit () {
      const res = await createBbsReply(this.createReplayParams)
      if (res.code === '0') {
        this.$message('发布成功 ')
      }
    },
    async handleGetReply () {
      const res = await getBbsReply(this.getReplyParams)
      if (res.code === '0') {
        this.replyList = res.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
._index {
  padding: 10px 10px;
  padding-top: 40px;
  padding-bottom: 200px;
  .topic-box {

    padding: 15px 15px;
    border-radius: 5px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .topic-header {
      padding: 10px 0 5px 0;
      border-bottom: #e2e2e2 solid 1px;
      .topic-title-box {

        .topic-title {
          font-size: 24px;
          font-weight: 500;
        }
      }
      .topic-info-Box {
        padding-top: 10px;
        span {line-height: 16px;}
      }
    }
    .topic-content {
      padding: 10px 0;
    }
  }
  .reply-box {

    .reply-item {
      padding: 15px 15px;
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      margin-top: 20px;
      .reply-header {
        display: flex;
        .user-info {
          margin-left: 10px;
          div {
            height: 50%;
            line-height: 20px;
          }
        }
      }
    }
    .reply-content {
      padding: 10px 0;
    }
  }
  .editor-box {
    padding-top: 20px;
    .btn-group {
      margin-top: 15px;
      text-align: right;
    }
  }
  .userInfo-box {

  }
}
</style>
