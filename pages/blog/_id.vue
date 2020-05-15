<template>
  <div>
    <el-card>
      <mavon-editor-show :value="topicData.content" />
    </el-card>
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
