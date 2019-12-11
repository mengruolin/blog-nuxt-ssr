<template>
  <div>
    222
  </div>
</template>

<script>
export default {
  header: {
    meta: {}
  },
  async asyncData ({ query }) {
    await console.log(query)
  }
}
</script>
