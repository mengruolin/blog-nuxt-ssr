<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      default: () => '',
      required: false
    },
    className: {
      type: String,
      default: () => '',
      required: false
    }
  },
  computed: {
    svgClass () {
      if (this.className) {
        return 'svg-icon' + ' ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    iconName () {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  padding: 10px 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
