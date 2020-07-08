/* 
品牌管理相关接口请求函数
*/
import request from '@/utils/request'
const BASE_PATH = '/admin/product/baseTrademark'

export default {

  /* 
  获取品牌的分页列表
  page: 页码
  limit: 每页最多几条数据
  */
  getList (page, limit) {
    return request({
      url: `${BASE_PATH}/${page}/${limit}`,
      method: 'GET'
    })
  },

  /* 
  添加品牌
  POST /admin/product/baseTrademark/save
  */
  add (trademark) {
    return request({
      url: `${BASE_PATH}/save`,
      method: 'POST',
      data: trademark
    })
  },

  /* 
  更新品牌
  PUT /admin/product/baseTrademark/update
  */
  update (trademark) {
    return request({
      url: `${BASE_PATH}/update`,
      method: 'PUT',
      data: trademark
    })
  },

  /* 
  删除品牌
  DELETE /admin/product/baseTrademark/remove/{id}
  */
  remove(id) {
    return request({
      url: `${BASE_PATH}/remove/${id}`,
      method: 'DELETE'
    })
  }
}
