<template>
    <el-dialog
      :visible.sync="loginDialog"
      class="loginDialog"
      title="登录"
    />
</template>

<script>
export default {
    props:[{
        name: loginType,
        type: String,
    }],
    data () {
        return {

         }
    }
}
</script>

<style lang="scss" scoped>

</style>
