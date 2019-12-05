<template>
  <div v-if="loading" class="loading-page" />
</template>

<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  // header: {

  // },
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      NProgress.start()
    },
    finish () {
      NProgress.done()
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
