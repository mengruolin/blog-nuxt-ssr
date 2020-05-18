<template>
  <div>跳转中...</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted () {
    if (this.userInfo) {
      this.$router.replace(`/user/${this.userInfo._id}`)
    } else {
      this.$router.replace(`/`)
    }
  }
}
</script>
