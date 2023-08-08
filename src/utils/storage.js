// 封装的目的：本地存储的语法，存，取，删
// 按需导入导出：要封装三个函数，并且这三个函数在三个不同的页面使用
const KEY = 'inter'

export const setToken = token => {
  localStorage.setItem(KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(KEY)
}

export const removeToken = () => {
  localStorage.removeItem(KEY)
}
