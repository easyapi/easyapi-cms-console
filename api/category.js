import { serviceUrl } from './api'

/**
 * 获取文章分类
 */
export const getCategories = (params, contxt) => {
  return contxt.$axios.get(`${serviceUrl}/api/article/categories`, params)
}

/**
 * 获取文章信息
 */
export const getCategory = (id, params, contxt) => {
  return contxt.$axios.get(`${serviceUrl}/api/article/category/${id}`, params)
}

/**
 * 新增文章分类
 */
export const postCategory = (data, contxt) => {
  return contxt.$axios.post(`${serviceUrl}/api/article/category`, data)
}

/**
 * 修改文章分类
 */
export const updateCategory = (id, data, contxt) => {
  return contxt.$axios.put(`${serviceUrl}/api/article/category/${id}`, data)
}

/**
 * 删除文章分类
 */
export const deleteCategory = (id, data, contxt) => {
  return contxt.$axios.delete(`${serviceUrl}/api/article/category/${id}`, data)
}
