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
              <span class="c-ml20">更新时间：{{ topicData.create_at | dateFromNow }}</span>
              <span class="c-ml20">回复数：{{ topicData.reply_count }}</span>
              <span class="c-ml20">浏览量：{{ topicData.visit_count }}</span>
            </div>
          </div>
          <div class="topic-content">
            {{ topicData.content }}
          </div>
        </div>
      </el-col>
      <el-col :span="7" :offset="1" class="right-menu hidden-sm-and-down">
        2
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getOneBbsTopics } from '@/store/api/global'
export default {
  header: {
    meta: {}
  },
  async asyncData ({ query }) {
    const res = await getOneBbsTopics(query)

    return {
      topicData: res.data || []
    }
  }
}
</script>

<style lang="scss" scoped>
._index {
  padding: 10px 10px;
  padding-top: 40px;
  .topic-box {

    padding: 15px 15px;
    border-radius: 10px;
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
      }
    }
    .topic-content {
      padding: 10px 0;
    }
  }
}

</style>
