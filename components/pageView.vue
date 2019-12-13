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
  max-width: $contentWidth;
  position: relative;
  margin: 0 auto;
}
</style>
