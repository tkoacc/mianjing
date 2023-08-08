// axios第一次封装：封装基地址+拦截器
// 默认导入导出，这个模块只封装了一个对象request

// 下载和导入axios
import axios from 'axios'

// 创建一个新的axios实例，设置基地址
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    return config
  }, error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    return response
  }, error => {
    return Promise.reject(error)
  }
)

// 导出request
export default request
