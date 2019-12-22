<template>
  <div class="scrollList">
    <slot />
    <slot name="list" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

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
      timerId: null,
      scrollTop: 0,
      singLeton: true
    }
  },
  computed: {
    ...mapGetters(['hiddenHeader'])
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    this.handleHiddenHeader(true)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapMutations(['handleHiddenHeader']),
    handleScroll (event) {
      if (this.singLeton) {
        this.scrollTop = event.target.scrollingElement.scrollTop
        this.singLeton = false
      }

      const t = event.target.scrollingElement.scrollTop
      if (t > this.scrollTop && t > 100) {
        this.hiddenHeader && this.handleHiddenHeader(false)
      } else {
        !this.hiddenHeader && this.handleHiddenHeader(true)
      }

      // 节流函数 执行触底检测

      if (this.timerId) {
        return false
      }

      this.timerId = setTimeout(() => {
        this.scrollTop = event.target.scrollingElement.scrollTop
        this.scrollEvent(event)
        this.timerId = null
      }, this.timer)
    },
    scrollEvent (event) {
      const scrollBottom = event.target.scrollingElement.scrollHeight - event.target.scrollingElement.scrollTop - event.target.scrollingElement.clientHeight

      if (scrollBottom < 300) {
        this.$emit('scroll')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
