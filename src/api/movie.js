import request from './request'

/** 拉取最近电影列表 */
export const getRecentMovie = () => {
  return request.get('recentMovie')
}

/** 按分类拉取电影列表 */
export const fetchAllMovie = (type) => {
  return request.get('all', {
    params: {
      type
    }
  })
}

/** 获取电影分类 */
export const fetchCategory = () => {
  return request.get('/category')
}
