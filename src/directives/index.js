import Vue from 'vue'
import moment from 'moment'

Vue.directive('localtime', {
  bind (el, binding) {
    console.log(moment(binding.value).isValid())
    el.innerHTML = moment(binding.value).format('YYYY-MM-DD HH:mm:ss')
  }
})
