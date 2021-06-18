import { baseUrl } from './api'

/**
 * 获取用户信息
 *
 * @see https://www.easyai.com
 */
export const getUser = (contxt) => {
  return contxt.$axios.get(`${baseUrl}/api/account`)
}
