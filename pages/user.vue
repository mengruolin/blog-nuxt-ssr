<template>
  <div>
    <nuxt :user-info="userInfo" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'empty',
  computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>
