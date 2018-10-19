import axios from 'axios'
import { Message, Loading } from 'element-ui'

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

// 设置基本的配置（URL，Token)
const AUTO_TOKEN = 'Bearer ' + (localStorage.getItem('access_token') ? localStorage.getItem('access_token') : '')
const instance = axios.create({
  baseURL: 'http://192.168.5.182:8080',
  headers: {
    'Authorization': AUTO_TOKEN
  }
})

// 请求拦截
instance.interceptors.request.use(config => {
  // 发起http请求时，显示loading动画
  startLoading()
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(response => {
  // http响应完成时，停止动画； 返回获取的对象
  endLoading()
  return response
}, error => {
  endLoading()
  Message.error('获取数据失败！')
  return Promise.reject(error)
})

export default instance
