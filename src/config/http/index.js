import axios from 'axios'
import router from '@/router/index.js'
import store from '@/store'
import { Loading, Message } from 'element-ui'

let loading
function startLoading () {
  loading = Loading.service({
    lock: true,
    text: '拼命加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
function endLoading () {
  loading.close()
}

function initLoginStatus () {
  store.dispatch('auth/clearToken')
  store.dispatch('tab/clearRoutes')

  axios.defaults.headers.common['Authorization'] = ''

  router.push({ name: 'LoginUsername' })
}

/* 设置axios全局配置 */
axios.defaults.baseURL = process.env.VUE_APP_BASEURL

// 处理页面刷新时，重新设置Token;
if (store.getters['auth/token']) {
  const { type, access, sessionId } = store.getters['auth/token']
  axios.defaults.headers.common['Authorization'] = `${type} ${access}`
  axios.defaults.headers.common['sessionId'] = `${sessionId}`
}

// 请求拦截
axios.interceptors.request.use(config => {
  // 发起http请求时，显示loading动画
  startLoading()
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
  // http响应完成时，停止动画； 返回获取的对象
  endLoading()

  // 在登录Token已过期下返回的状态码
  if (response.status === 401) {
    initLoginStatus()

    Message.warning('登录Token已过期，请重新登录。')

    return response

  // 在其他设备登录下返回的状态码
  } else if (response.data.status === -9998 || response.data.status === -9999) {
    initLoginStatus()
    Message.warning('该账户已在其他设备登录')
  }

  return response
}, error => {
  endLoading() // 停止加载动画
  console.dir(error)

  // token验证后台有两种不同验证，分别要处理
  if (error.response && error.response.status === 401) {
    initLoginStatus()

    Message.warning('登录Token已过期，请重新登录。')
  }
  //
  // switch (error.status) {
  //   case '401':
  //     store.dispatch('CLEAR_TOKEN')
  //     axios.defaults.headers.common['Authorization'] = ''
  //     router.push({ name: 'LoginUsername' })
  //     Message.warning('登录Token已过期，请重新登录。')
  //     break
  //   case '403':
  //     console.log('未授权，请检查HTTP请求头是否携带Token。')
  //     break
  //   case '404':
  //     console.log('没有找到对应的请求，请核对HTTP请求地址。')
  //     break
  //   case '500':
  //     console.log(`系统错误：请刷新页面或联系管理员。`)
  //     break
  //   default:
  //     console.log(`获取数据异常。`)
  // }
  return Promise.reject(error)
})

export default axios
