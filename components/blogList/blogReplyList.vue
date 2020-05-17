<template>
  <div class="_layout">
    <div v-for="item of listData" :key="item._id" class="reply_item">
      <div class="item_header">
        <el-avatar size="small" :src="item.author_id.avatarUrl" />
        <nuxt-link class="c-ml10" :to="`/user/${item.author_id._id}`">
          {{ item.author_id.nickName }}
        </nuxt-link>
      </div>
      <div class="item_content">
        {{ item.content }}
      </div>
      <div class="item_footer">
        {{ item.create_at | dateFromNow }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
._layout {
  padding: 20px 10px;
  .reply_item {
    padding-bottom: 10px;
    border-bottom: 1px solid #e2e2e2;
    .item_header {
      height: 40px;
      overflow: hidden;
      display: flex;
      align-items: center;
    }
    .item_content {
      padding: 5px 5px 15px 37px;
    }
    .item_footer {
      line-height: 20px;
      padding-left: 37px;
      color: #858585;
    }
  }
}
</style>
