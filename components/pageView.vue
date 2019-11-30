<template>
  <div class="page-view">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page-view {
  width: $contentWidth;
  position: relative;
  margin: 0 auto;
}
</style>
