<template>
  <quiz :the-user-info="theUserInfo" />
</template>

<script>
import quiz from './quiz.vue'
export default {
  components: {
    quiz
  },
  props: {
    theUserInfo: {
      type: Object,
      required: true
    }
  }
}
</script>
