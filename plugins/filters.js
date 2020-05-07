import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFromNow', function (date) {
  moment.locale('zh-cn')
  return moment(date).fromNow()
})

Vue.filter('DateFormat', function (date) {
  return moment(date).format('YYYY-MM-DD DD:mm')
})