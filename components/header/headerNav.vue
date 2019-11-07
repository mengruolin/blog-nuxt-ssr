<template>
  <div class="header-nav">
    <div class="header-all-nav">
      <div class="container header-nav-list">
        <div v-for="(item, k) of navHeardList" :key="k" class="header-nav-list-items">
          <nuxt-link
            class="nav-btn"
            :to="item.urlTo"
            :style="item.name == clickBtn ? 'color: #CDC9C9;': ''"
            @click="handleClickNav(item.name)"
          >
            {{ item.label }}</a>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navHeardList: [
        {
          label: '全部',
          name: 'all',
          urlTo: '/bbs/all'
        },
        {
          label: '前端',
          name: 'web',
          urlTo: '/bbs/web'
        },
        {
          label: 'php',
          name: 'php',
          urlTo: '/bbs/php'
        }
      ],
      clickBtn: ''
    }
  },
  methods: {
    handleClickNav (name) {
      this.clickBtn = name
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-btn {
  color: black;
  font-size: 16px;
  &:hover {
    color: #CDC9C9;
    cursor: pointer;
  }
}
.header-nav {
    position: relative;
    top: 0px;
    .header-all-nav {
        width: 100%;
        height: 50px;
        background-color: rgb(255, 255, 255);
        box-shadow: 6px 4px 2px 1px rgba(204, 204, 206, 0.2);
        .header-nav-list {
          display: flex;
          flex-direction: row;
          align-items: center;
          .header-nav-list-items {
            height: 100;
            width: 100px;
          }
        }
    }
}
</style>
