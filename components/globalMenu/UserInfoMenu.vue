<template>
  <el-card>
    <div class="user_register_Info">
      <el-avatar
        class="avatar_box"
        shape="circle"
        :size="60"
        :src="userInfo.author_id.avatarUrl"
      />
      <div class="name_box">
        <div class="nickName_text">
          <nuxt-link :to="`/user/${userInfo.author_id._id}`">
            {{ userInfo.author_id.nickName }}
          </nuxt-link>
        </div>
        <div class="time_text">
          {{ userInfo.createTime | DateZnFormat }}
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
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
