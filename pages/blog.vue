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
      this.$loading()

      this.$nuxt.$loading.start()

      setTimeout(() => this.$loading().close(), 5000)
    })
  }
}
</script>
