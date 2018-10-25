import Vue from 'vue'
import router from './router'
import store from './store'
// import App from './App.vue'

/* 引入其他插件 */
import _ from 'lodash'
import ElementUI from 'element-ui'

// 引入自定义指令、自定义过滤器
import './directives'
import './filters'

// HTTP拦截处理文件
import axios from './config/http'
import API from './config/http/API'

/* CSS 文件引入 */
// ElementUI；样式引入必须在其他CSS引入文件之前引入，以便后续的样式覆盖原ElementUI的初始样式
import './styles/element-variables.scss'
// CSS Reset and Others
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
// FontAwesome
import 'font-awesome/css/font-awesome.css'

import App from './App.vue'

Vue.use(ElementUI)

Vue.prototype.$axios = axios
Vue.prototype.$httpAPI = API
Vue.prototype.$_ = _
Vue.prototype.myWindow = window

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
