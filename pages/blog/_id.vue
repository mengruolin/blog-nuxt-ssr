<template>
  <div class="_layout">
    <el-row>
      <el-col
        :span="16"
        :xs="24"
        :sm="24"
        :md="16"
        :lg="16"
        :xl="16"
      >
        <el-card>
          <div class="_header">
            <div>
              <el-avatar shape="square" size="medium" :src="topicData.author_id.avatarUrl" />
            </div>

            <div class="topic_info">
              <div>
                <nuxt-link :to="`/user/${topicData.author_id._id}`">
                  {{ topicData.author_id.nickName }}
                </nuxt-link>
              </div>
              <div>
                <span>{{ topicData.create_at | DateZnFormat }}</span>
                <span class="c-ml10">{{ topicData.visit_count }}&nbsp;阅读</span>
              </div>
            </div>
          </div>

          <div class="cover_box">
            <el-image style="width: 100%; height: 100%" :src="topicData.cover_img" fit="fill" alt="" />
          </div>
          <div class="title_box">
            <span>{{ topicData.title }}</span>
          </div>
          <div class="content-box" />
          <mavon-editor-show :value="topicData.content" />
        </el-card>

        <div v-if="replyData[0]" class="user_replys_box">
          <div class="user_replys_header">
            <span class="c-mr10">{{ replyData.length }}</span>回复
          </div>
          <blog-reply-list :list-data="replyData" />
        </div>

        <div class="edit_box">
          <isLoginEditor v-if="!userInfo" />
          <div v-else class="c-mt20">
            <el-input
              v-model="replyText"
              type="textarea"
              maxlength="200"
              autosize
              show-word-limit
              placeholder="请输入回复内容"
            />

            <el-row class="c-mt10" style="text-align: right;">
              <el-button type="primary" icon="el-icon-edit" circle title="发布" @click="handleSubmitReply" />
            </el-row>
          </div>
        </div>
      </el-col>

      <el-col :span="6" :offset="2" class="hidden-sm-and-down">
        <user-info-menu :user-info="topicData" class="c-mb20" />
        <login-menu v-if="!userInfo" class="c-mb20" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getOneBlogTopics, createBlogReply, getBlogReply } from '@/store/api/global'
import mavonEditorShow from '@/components/editor/mavonEditorShow'
import loginMenu from '@/components/globalMenu/loginMenu.vue'
import isLoginEditor from '@/components/isLoginEditor'
import blogReplyList from '@/components/blogList/blogReplyList.vue'
import UserInfoMenu from '@/components/globalMenu/UserInfoMenu.vue'

export default {
  components: {
    mavonEditorShow,
    loginMenu,
    isLoginEditor,
    blogReplyList,
    UserInfoMenu
  },
  data () {
    return {
      replyText: '',
      replyData: []
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  async asyncData ({ params, error }) {
    const res = await getOneBlogTopics({ '_id': params.id })

    if (res.code !== '0') { error({ statusCode: 404, message: '页面消失了' }) }
    return {
      topicData: res.data || []
    }
  },
  mounted () {
    this.$nuxt.$loading.finish && this.$nuxt.$loading.finish()
    this.requstReplys()
  },
  methods: {
    async handleSubmitReply () {
      const params = {
        'author_id': this.userInfo._id,
        content: this.replyText,
        'topic_id': this.topicData._id
      }

      const res = await createBlogReply(params)

      if (res.code === '0') {
        this.$message.success('发布回复成功')
        this.replyText = ''
        this.requstReplys()
      }
    },
    async requstReplys () {
      const params = {
        'topic_id': this.topicData._id
      }

      const res = await getBlogReply(params)

      if (res.code === '0') {
        this.replyData = res.data
      } else {
        this.$message.error(res.message)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
._layout {
  padding-bottom: 30px;
  ._header {
    height: 50px;
    display: flex;
    .topic_info {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      div {
        line-height: 20px;
      }
    }
  }
  .cover_box {
    margin-top: 20px;
    height: 200px;
    width: 100%;
    overflow: hidden;
  }

  .title_box {
    margin-top: 30px;
    span {
      font-size: 28px;
      font-weight: 700;
    }
  }

  .content-box {
    margin-top: 20px;
  }

  .user_replys_box {
    padding: 10px 10px 0 10px;
    margin-top: 20px;
    border: solid 1px #e2e2e2;
    .user_replys_header {
      font-weight: 700;
    }
  }

}
</style>
