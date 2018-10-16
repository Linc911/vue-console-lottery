import Vue from 'vue'
import router from './router'
import store from './store'

import '@/styles/base.scss'
// CSS Reset Library
import 'normalize.css/normalize.css'

// ElementUI
import ElementUI from 'element-ui'
import './styles/element-variables.scss'

// HTTP拦截处理文件
import axios from './config/http'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
