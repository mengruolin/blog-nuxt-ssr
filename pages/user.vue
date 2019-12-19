<template>
  <div class="_user">
    <div class="_user-bg-wall">
      <div class="_user-bg-box">
        <div class="_avatar-box">
          <el-image fit="fit" :preview-src-list="[userInfo.imgTitle + userInfo.avatarUrl]" :src="userInfo.imgTitle + userInfo.avatarUrl" />
        </div>
        <div class="_user-info">
          <el-row>
            <span class="_user-name">{{ userInfo.nickName }}</span>
          </el-row>
          <el-row class="_user-slogan">
            <el-col :span="12">
              <span>
                我的口号是：没有蛀牙！！
              </span>
            </el-col>
            <el-col :span="12">
              <span>现居地：上海</span>
            </el-col>
          </el-row>
          <el-row class="_user-job">
            <el-col :span="12">
              <span>
                我这这里工作：小米
              </span>
            </el-col>
            <el-col :span="12">
              <span>
                我的职业是：前端工程师
              </span>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <el-card class="_main">
      <nuxt :user-info="userInfo" />
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: 'noLogin',
  layout: 'default',
  computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>

<style lang="scss" scoped>
$userBgWallHeight: 260px;
$paddTopHeight: 100px;

._user {
  min-height: calc(100vh - 80px);
  width: 100%;
  margin-top: -10px;
  // border: salmon solid 1px;
  ._user-bg-wall {
    //height:
    position: absolute;
    left: 0px;
    width: 100vw;
    padding: 0 20px;
    height: $userBgWallHeight;
    background: rgba(199, 199, 199, .3);
    // background: url('http://pic.netbian.com/uploads/allimg/191105/233840-157296832060ab.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 1px 1px rgb(199, 199, 199);
    ._user-bg-box {
      max-width: $headerWidth;
      height: $userBgWallHeight - 40px;
      top: $paddTopHeight;
      border: #cccccc solid 1px;
      border-radius: 3px;
      position: relative;
      margin: 0 auto;
      // overflow: hidden;
      background: #ffffff;
      // box-shadow: 2px  0 #ffffff;
      ._avatar-box {
        position: absolute;
        top: -35px;
        left: 30px;
        width: 150px;
        height: 150px;
        overflow: hidden;
        border: #ffffff solid 2px;
        border-radius: 5px;
        // z-index: 100;
        .el-image {
          width: 100%;
          height: 100%;
        }
      }
      ._user-info {
        padding: 40px 40px  40px 210px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        ._user-name {
          line-height: 40px;
          font-size: 24px;
          font-weight: 500;
        }
        ._user-slogan {
          line-height: 60px;
          span {
            color: rgb(48, 128, 32);
            font-size: 16px;
          }
        }
        ._user-job {
          line-height: 60px;
          span {
            color: rgb(96, 160, 244);
            font-size: 16px;
          }
        }
      }
    }
  }
  ._main {
    position: relative;
    top: $userBgWallHeight + $paddTopHeight;
  }
}
</style>
