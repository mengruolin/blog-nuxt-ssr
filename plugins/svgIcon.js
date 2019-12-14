import Vue from 'vue'
import svgIcon from '@/components/svgIcon.vue'

Vue.component('svgIcon', svgIcon)
// 引入SVg
require.context('@/assets/svg', false, /\.svg$/).keys().map(require.context('@/assets/svg', false, /\.svg$/))
