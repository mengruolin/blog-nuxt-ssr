<template>
  <div>
    blog

    <login-menu />
  </div>
</template>

<script>
import loginMenu from '@/components/globalMenu/loginMenu.vue'

export default {
  layout: 'blog',
  components: {
    loginMenu
  },
  asyncData (context) {
    console.log(context)
  },
  mounted () {
    this.$nextTick(() => {
      // this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
}
</script>
