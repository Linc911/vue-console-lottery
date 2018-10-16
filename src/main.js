import Vue from 'vue'
import router from './router'
import store from './store'

// CSS Reset and Others
import 'normalize.css/normalize.css'
import '@/styles/base.scss'

// FontAwesome
import 'font-awesome/css/font-awesome.css'

// ElementUI
import ElementUI from 'element-ui'
import './styles/element-variables.scss'

// HTTP拦截处理文件
import axios from './config/http'

import App from './App.vue'

Vue.use(ElementUI)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
