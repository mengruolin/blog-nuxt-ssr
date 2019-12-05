<template>
  <div>
    blog
  </div>
</template>

<script>
export default {
  layout: 'blog',
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      // setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  }
}
</script>
