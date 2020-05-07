import Vue from 'vue'
import svgIcon from '@/components/svgIcon.vue'
import pageView from '@/components/pageView.vue'

Vue.component('svgIcon', svgIcon)
Vue.component('pageView', pageView)
// 引入SVg
require.context('@/assets/svg', false, /\.svg$/).keys().map(require.context('@/assets/svg', false, /\.svg$/))
