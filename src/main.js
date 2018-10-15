import Vue from 'vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import './styles/element-variables.scss'

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
