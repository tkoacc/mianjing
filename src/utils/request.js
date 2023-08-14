// axios第一次封装：封装基地址+拦截器
// 默认导入导出，这个模块只封装了一个对象request

// 下载和导入axios
import axios from 'axios'

import { getToken } from '@/utils/storage.js'
import { Toast } from 'vant'
import router from '@/router'

// 创建一个新的axios实例，设置基地址
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  timeout: 5000
})
// 添加请求拦截器
request.interceptors.request.use(
  config => {
    // 发送请求之前做些什么
    if (getToken()) {
      // 请求头中发送token
      config.headers.Authorization = `Bearer ${getToken()}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 添加响应拦截器
request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log('Error:', error) // 打印错误
    // 对响应错误做些什么
    // 统一错误提示
    Toast.fail(error.response.data.message)
    // 判断是否为401，token过期需要跳转到登录页
    if (error.response.status === 401) {
      Toast.fail('登录状态过期，请重新登录')
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

// 导出request
export default request
