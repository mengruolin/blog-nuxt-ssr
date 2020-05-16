<template>
  <div class="container">
    <template v-if="error.statusCode === 404">
      <not-found-page />
    </template>
    <template v-else>
      An error occurred
    </template>
  </div>
</template>

<script>
import notFoundPage from '@/components/errPage/notFoundPage'

export default {
  components: {
    notFoundPage
  },
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
  // layout: 'blog' // you can set a custom layout for the error page
}
</script>
