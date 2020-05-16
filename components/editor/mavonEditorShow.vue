<template>
  <div class="mavonEditor">
    <client-only>
      <mavon-editor
        class="md"
        :style="{'z-index': 0, 'background-color': '#ffffff', 'box-shadow': 'none'}"
        :value="value"
        :subfield="false"
        :default-open="'preview'"
        :toolbars-flag="false"
        :editable="false"
        :scroll-style="true"
        :ishljs="true"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
.mavonEditor {
  .md {
    z-index: 0;
    box-shadow: none;

    min-height: auto;
    min-width: auto;
    & /deep/ .v-show-content {
      background-color: #ffffff !important;
    }
  }
}
</style>
