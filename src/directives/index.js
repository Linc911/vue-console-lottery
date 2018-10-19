import Vue from 'vue'
import moment from 'moment'

Vue.directive('localtime', {
  bind (el, binding) {
    el.innerHTML = moment(binding.value).format('YYYY-MM-DD HH:mm:ss')
  }
})

// 随机背景颜色
Vue.directive('rainbow', {
  bind (el) {
    el.style.backgroundColor = '#' + Math.random().toString().slice(2, 8)
  }
})
