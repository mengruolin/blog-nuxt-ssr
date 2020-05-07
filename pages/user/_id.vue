<template>
  <div v-if="userInfo" class="_user">
    <div class="_user-bg-wall" />
    <div class="_content-swiper">
      <div class="_user-bg-box" @mouseenter="editUser = true" @mouseleave="editUser = false">
        <div class="_avatar-box">
          <el-image fit="fit" :preview-src-list="[userInfo.avatarUrl]" :src="userInfo.avatarUrl" />
        </div>
        <div v-if="editUser" class="_user-config" @click="handleGoEdit">
          <span><i class="iconfont">&#xe65c;</i>编辑</span>
        </div>
        <div class="_user-info">
          <el-row>
            <span class="_user-name">{{ userInfo.nickName }}</span>
            <span class="_user-sex"><svg-icon icon-class="woman" /></span>
          </el-row>
          <el-row class="_user-slogan">
            <el-col :span="12">
              <span>
                <i class="iconfont">&#xe60d;</i>
                我的口号是：xxxx！！
              </span>
            </el-col>
            <el-col :span="12">
              <i class="iconfont">&#xe679;</i>
              <span>现居地：xx</span>
            </el-col>
          </el-row>
          <el-row class="_user-job">
            <el-col :span="12">
              <span>
                <i class="iconfont">&#xe623;</i>
                我这这里工作：xx
              </span>
            </el-col>
            <el-col :span="12">
              <span>
                <i class="iconfont">&#xe608;</i>
                我的职业是：xxxx
              </span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="_main">
        <el-menu mode="horizontal" class="_main-nav" default-active="dynamic" @select="handleSelectNav">
          <el-menu-item index="dynamic">
            <span class="lightNav">我</span>的动态
          </el-menu-item>
          <el-menu-item index="focus">
            <span class="lightNav">我</span>的关注
          </el-menu-item>
          <el-menu-item index="quiz">
            <span class="lightNav">我</span>的提问
          </el-menu-item>
          <el-menu-item index="article">
            <span class="lightNav">我</span>的博客
          </el-menu-item>
        </el-menu>
        <div class="_main-content">
          <nuxt :user-info="userInfo" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    该用户不存在
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { getUserInfo } from '@/store/api/global.js'
export default {
  data () {
    return {
      editUser: false
    }
  },
  // middleware: 'noLogin',
  layout: 'default',
  computed: {
    // ...mapGetters(['userInfo'])
  },
  async asyncData ({ params }) {
    const res = await getUserInfo({ userName: params.id })
    return res ? { userInfo: res.data } : { userInfo: null }
  },

  methods: {
    handleSelectNav (index) {
      console.log(index)

      this.$router.push(`/user/asas/${index}`)
    },
    handleGoEdit () {
      this.$router.push('/my/config')
    }
  }
}
</script>

<style lang="scss" scoped>
$userBgWallHeight: 260px;
$paddTopHeight: 100px;

.lightNav {
  color: rgb(0, 125, 241);
  font-size: 16px;
  font-weight: 500;
  margin-right: 3px;
  vertical-align: bottom;
}
._user {
  ._user-bg-wall {
      position: absolute;
      left: 0px;
      width: 100%;
      padding: 0 20px;
      height: $userBgWallHeight;
      background: rgba(199, 199, 199, .3);
      // background: url('http://pic.netbian.com/uploads/allimg/191105/233840-157296832060ab.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 0 1px 1px rgb(240, 219, 219);
    }
  ._content-swiper{
    position: relative;
    max-width: $headerWidth;
    padding: 120px 10px 120px 10px;
    margin: 0 auto;
    overflow: hidden;
    ._user-bg-box {
      width: 100%;
      height: $userBgWallHeight - 40px;
      top: 0;
      // border: #cccccc solid 1px;
      border-radius: 3px;
      position: relative;
      margin: 0 auto;
      // overflow: hidden;
      background: #ffffff;
      // box-shadow: 2px  0 #ffffff;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      ._avatar-box {
        position: absolute;
        top: -35px;
        left: 30px;
        width: 150px;
        height: 150px;
        overflow: hidden;
        border: #ffffff solid 3px;
        border-radius: 5px;
        // z-index: 100;
        .el-image {
          width: 100%;
          height: 100%;
        }
      }
      ._user-config {
        position: absolute;
        right: 80px;
        top: 30px;
        width: 80px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: rgba(0,0,0,.2);
        // border: salmon solid 1px;
        border-radius: 12px;
        cursor: pointer;
        z-index: 1;
        span {
          i {font-size: 14px; margin-right: 10px;}
          font-size: 14px;
          font-weight: 300;
        }
      }
      ._user-info {
        padding: 30px 40px  30px 210px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow: hidden;
        ._user-name {
          line-height: 40px;
          font-size: 24px;
          font-weight: 500;
        }
        ._user-sex {
          display: inline-block;
          height: 40px;
          width: 40px;
          overflow: hidden;
          vertical-align: bottom;
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
    ._main {
      position: relative;
      top: 20px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      padding: 0 30px 20px 30px;
      box-sizing: content-box;
      overflow: hidden;
      ._main-nav {
        // height: 30px;
        position: static;
        top: 50px;
        border-bottom: none;
        overflow-x: auto;
      }
      ._main-content {
        width: 100%;
        padding: 20px 0;
      }
    }
  }
}
</style>
