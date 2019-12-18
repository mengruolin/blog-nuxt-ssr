<template>
  <div>
    ------->{{ r }}
    {{ userInfo }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getTest } from '@/store/api/global.js'
export default {
  computed: {
    ...mapGetters(['userInfo'])
  },
  async asyncData ({ app, params }) {
    const res = await getTest()
    return {
      r: res
    }
  },
  async mounted () {
    // this.$axios.$get('/api/cheshi', { params: { id: 1 } })
    // const res = await this.test({ id: 1 })
    // console.log(res)
  },
  methods: {
    ...mapActions(['test'])
  }
}
</script>
