// 导入request
import request from '@/utils/request'

// 面经列表
export const getArticleList = ({ current, pageSize, sorter }) => {
  return request({
    url: '/h5/interview/query',
    method: 'get',
    params: {
      current,
      pageSize,
      sorter
    }
  })
}
// 文章详情
export const getArticleDetail = id => {
  return request({
    url: '/h5/interview/show',
    method: 'get',
    params: {
      id
    }
  })
}
// 添加喜欢
export const updateLike = id => {
  return request({
    url: '/h5/interview/opt',
    method: 'post',
    data: {
      id,
      optType: 1 // 喜欢
    }
  })
}
// 添加收藏
export const updateCollect = id => {
  return request({
    url: '/h5/interview/opt',
    method: 'post',
    data: {
      id,
      optType: 2 // 收藏
    }
  })
}
// 获取我的收藏
export const getArticlesCollect = obj => {
  return request({
    url: '/h5/interview/opt/list',
    method: 'get',
    params: {
      optType: 2,
      pageSize: 10,
      page: obj.page
    }
  })
}
