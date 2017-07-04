import axios from 'axios'
import progress from './progress'

const instance = axios.create({
  baseURL: '/api/',
  responseType: 'json'
})

/** 请求开始前的处理 */
instance.interceptors.request.use(config => {
  progress.start()
  return config
}, error => {
  progress.done()
  return Promise.reject(error)
})

/** 请求得到后台响应后的处理 */
instance.interceptors.response.use(response => {
  progress.done()
  return response
}, error => {
  progress.done()
  return Promise.reject(error)
})

export default instance
