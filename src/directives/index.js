import Vue from 'vue'

// 随机背景颜色
Vue.directive('rainbow', {
  bind (el) {
    el.style.backgroundColor = '#' + Math.random().toString().slice(2, 8)
  }
})
