// 封装目的：让.vue（业务层）和网络层分离
// 按需导入/导出：不同的页面需要调用不同的接口

// 导入request
import request from '@/utils/request.js'

// 登录
export const UserLogin = ({ username, password }) => {
  return request.post('/h5/user/login', { username, password })
}

// 注册
export const UserRegister = obj => {
  return request.post('/h5/user/register', obj)
}
