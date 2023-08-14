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
