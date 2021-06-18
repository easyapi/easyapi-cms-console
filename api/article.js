import { serviceUrl } from './api'

/**
 * 获取文章列表
 *
 * @see https://www.easyai.com
 */
export const getArticles = (params, contxt) => {
  return contxt.$axios.get(`${serviceUrl}/api/articles`, params)
}

/**
 * 添加文章
 */
export const postArticle = (data, contxt) => {
  return contxt.$axios.post(`${serviceUrl}/api/article`, data)
}

/**
 * 修改文章
 */
export const updateArticle = (data, id, contxt) => {
  return contxt.$axios.put(`${serviceUrl}/api/article/${id}`, data)
}

/**
 * 删除文章
 */
export const deleteArticle = (data, id, contxt) => {
  return contxt.$axios.delete(`${serviceUrl}/api/article/${id}`, data)
}
