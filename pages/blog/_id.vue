<template>
  <div>
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
              <div>{{ topicData.author_id.nickName }}</div>
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
      </el-col>
      <el-col :span="6" :offset="2" class="hidden-sm-and-down">
        <el-card>
          <div class="user_register_Info">
            <el-avatar
              class="avatar_box"
              shape="circle"
              :size="60"
              :src="topicData.author_id.avatarUrl"
            />
            <div class="name_box">
              <div class="nickName_text ">
                {{ topicData.author_id.nickName }}
              </div>
              <div class="time_text">
                {{ topicData.create_at | DateZnFormat }}
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getOneBlogTopics } from '@/store/api/global'
import mavonEditorShow from '@/components/editor/mavonEditorShow'

export default {
  components: {
    mavonEditorShow
  },
  async asyncData ({ params }) {
    const res = await getOneBlogTopics({ '_id': params.id })

    return {
      topicData: res.data || []
    }
  }
}
</script>

<style lang="scss" scoped>
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
  border-bottom: solid 1px #e2e2e2;
  .avatar_box {
    border: solid 1px #b4b4b4;
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
    }
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
</style>
