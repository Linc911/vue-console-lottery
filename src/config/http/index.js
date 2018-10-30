import axios from 'axios'
import router from '@/router'
import { Loading } from 'element-ui'

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

/* 设置axios全局配置 */
axios.defaults.baseURL = 'http://192.168.5.182:8080'
// 处理页面刷新时，设置Token; Token的初始设置在登录模块;
if (localStorage.getItem('access_token')) {
  const AUTO_TOKEN = `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
  axios.defaults.headers.common['Authorization'] = AUTO_TOKEN
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
  return response
}, error => {
  endLoading() // 停止加载动画

  if (error.error === 'invalid_token') {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('token_type')

    axios.defaults.headers.common['Authorization'] = ''
    console.log('Token已过期，请重新登录。')
    return
  }

  switch (error.toString().substr(-3)) {
    case '401':
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('token_type')

      router.push('/login/username')
      axios.defaults.headers.common['Authorization'] = ''
      console.log('Token已过期，请重新登录。')
      break
    case '403':
      console.log('未授权，请检查HTTP请求头是否携带Token。')
      break
    case '404':
      console.log('没有找到对应的请求，请核对HTTP请求地址。')
      break
    case '500':
      console.log(`系统错误：${error.data.messge}，请刷新页面或联系管理员。`)
      break
    default:
      console.log(`获取数据异常：${error.data.messge}。`)
  }
  return Promise.reject(error)
})

export default axios
