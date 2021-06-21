/**
 * 获取七牛KEY
 */
export const getQiniuKey = (contxt) => {
  return contxt.$axios.get(`https://api.easyapi.com/qiniu/key`)
}


/**
 * 获取七牛空间TOKEN
 */
export const getQiniuToken = (contxt) => {
  return contxt.$axios.get(`https://api.easyapi.com/qiniu/upToken`)
}
