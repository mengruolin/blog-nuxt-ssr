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
              <nuxt-link :to="`/user/${topicData.author_id._id}`">
                作者：{{ topicData.author_id.nickName }}
              </nuxt-link>
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
                <div>
                  <nuxt-link :to="`/user/${item.author_id._id}`">
                    {{ item.author_id.nickName }}
                  </nuxt-link>
                </div>
                <div>{{ item.create_at | DateFormat }}</div>
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
          <is-loginEditor />
        </div>
      </el-col>
      <el-col :span="7" :offset="1" class="right-menu hidden-sm-and-down">
        <login-menu :is-login="userInfo" class="c-mb20" />
        <hotQuestions
          :hot-list="bbsBrowseListTopicsList"
          header-font-color="#fff"
          header-bg-color="#e41749"
          header-title="问答浏览榜"
          item-jump-link="/bbs?_id="
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getOneBbsTopics, createBbsReply, getBbsReply } from '@/store/api/global'
import mavonEditorShow from '@/components/editor/mavonEditorShow'
import mavonEditor from '@/components/editor/mavonEditor'
import isLoginEditor from '@/components/isLoginEditor'
import loginMenu from '@/components/globalMenu/loginMenu.vue'
import hotQuestions from '@/components/globalMenu/hotQuestions.vue'

export default {
  header: {
    meta: {}
  },
  components: {
    mavonEditorShow,
    mavonEditor,
    isLoginEditor,
    loginMenu,
    hotQuestions
  },
  data () {
    return {
      content: '',
      replyList: []
    }
  },
  computed: {
    ...mapGetters(['userInfo', 'bbsBrowseListTopicsList']),
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
  async asyncData ({ query, error }) {
    const res = await getOneBbsTopics(query)

    if (res.code !== '0') { error({ statusCode: 404, message: '页面消失了' }) }
    return {
      topicData: res.data || []
    }
  },
  mounted () {
    this.handleGetReply()
    this.$nuxt.$loading.finish && this.$nuxt.$loading.finish()
    this.getBbsBrowseListTopics()
  },
  methods: {
    ...mapActions(['getBbsBrowseListTopics']),
    async handleSubmit () {
      const res = await createBbsReply(this.createReplayParams)
      if (res.code === '0') {
        this.$message.success('发布成功 ')
        this.content = ''
        this.handleGetReply()
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
  padding-bottom: 30px;
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
