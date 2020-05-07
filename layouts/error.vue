<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Page not found 404
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <nuxt-link to="/">
      Home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
  // layout: 'blog' // you can set a custom layout for the error page
}
</script>
