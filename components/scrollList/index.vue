<template>
  <div class="scrollList">
    <slot name="list" />
  </div>
</template>

<script>
export default {
  props: {
    timer: {
      type: Number,
      required: false,
      default: () => 500
    }
  },
  data () {
    return {
      flag: true,
      timerId: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      if (this.timerId) {
        return false
      }

      this.timerId = setTimeout(() => {
        this.scrollEvent(event)
        this.timerId = null
      }, this.timer)
    },
    scrollEvent (event) {
      const scrollBottom = event.target.scrollingElement.scrollHeight - event.target.scrollingElement.scrollTop - event.target.scrollingElement.clientHeight

      if (scrollBottom < 300) {
        this.$emit('scroll')
      }
    },
    beforeDestroy () {
      window.removeEventListener('scroll')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
