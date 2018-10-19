import Vue from 'vue'
import moment from 'moment'

Vue.directive('localtime', {
  bind (el, binding) {
    el.innerHTML = moment(binding.value).format('YYYY-MM-DD HH:mm:ss')
  }
})
