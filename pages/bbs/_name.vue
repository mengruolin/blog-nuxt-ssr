<template>
  <div>------->{{ r }}</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  // data () {
  //   return {
  //     // r: ''
  //   }
  // },
  async asyncData ({ app, params }) {
    // context.app.$axios.get('/api/cheshi', { name: 'java' }, context.params)

    const r = await app.$axios.$get('/api/cheshi', { params })
    // console.log(r.message)

    return {
      r: r.message
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
