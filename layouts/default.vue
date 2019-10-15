<template>
  <div class="_lay">
    <m-header />
    <nuxt />
    <m-footer />
  </div>
</template>

<script>
import mHeader from '@@/components/header/header.vue'
import mFooter from '@@/components/footer/footer.vue'

export default {
  components: {
    mHeader,
    mFooter
  }
}
</script>

<style lang="scss">
@import url('./default.scss');
</style>
