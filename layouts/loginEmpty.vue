<!--
 * @Descripttion:
 * @version:
 * @Author: Meng Ruolin
 * @Date: 2019-12-02 18:23:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-12-02 18:23:26
 -->
<template>
  <div class="_empty">
    <nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      link: [
        // https://elrumordelaluz.github.io/csshake/
        { rel: 'stylesheet', href: 'https://csshake.surge.sh/csshake.min.css' }
      ]
    }
  }
}
</script>
