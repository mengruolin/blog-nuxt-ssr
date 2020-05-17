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
        <el-card class="c-mb20">
          <div class="user_register_Info">
            <el-avatar
              class="avatar_box"
              shape="circle"
              :size="60"
              :src="topicData.author_id.avatarUrl"
            />
            <div class="name_box">
              <div class="nickName_text">
                <nuxt-link :to="`/user/${topicData.author_id._id}`">
                  {{ topicData.author_id.nickName }}
                </nuxt-link>
              </div>
              <div class="time_text">
                {{ topicData.createTime | DateZnFormat }}
              </div>
            </div>
          </div>
          <div class="user_collection">
            <div class="wenda_box">
              <div class="wenda_text">
                问答
              </div>
              <div class="wenda_count">
                22
              </div>
            </div>
            <div class="boke_box">
              <div class="boke_text">
                博客
              </div>
              <div class="boke_count">
                22
              </div>
            </div>
          </div>
        </el-card>
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

export default {
  components: {
    mavonEditorShow,
    loginMenu,
    isLoginEditor,
    blogReplyList
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

  .user_register_Info {
    display: flex;
    padding-bottom: 10px;
    //border-bottom: solid 1px #e2e2e2;
    .avatar_box {
      //border: solid 1px #b4b4b4;
      &:hover {
        animation: $bgRotate;
      }
    }
    .name_box {
      margin-left: 20px;
      .nickName_text, .time_text {
        line-height: 29px;
        height: 29px;
        font-size: 14px;
        color: $blogHeaderColor;
        a {
          font-size: 14px;
          color: $blogHeaderColor;
        }
      }
    }
  }

  .user_replys_box {
    padding: 10px 10px;
    margin-top: 20px;
    border: solid 1px #e2e2e2;
    .user_replys_header {
      font-weight: 700;
    }
  }

  .user_collection {
    height: 70px;
    display: flex;
    .wenda_box, .boke_box {
      margin-top: 10px;
      flex: 1;
      text-align: center;
      .wenda_text, .boke_text {
        line-height: 30px;
        height: 30px;
        color: $blogHeaderColor;
        font-size: 16px;

      }
      .wenda_count, .boke_count {
        line-height: 30px;
        height: 30px;
        color: rgb(117, 175, 223);
        font-size: 14px;
      }
    }
    .wenda_box {
      border-right: solid 1px #e2e2e2;
    }

  }
}
</style>
