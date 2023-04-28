// axios
import request from '@/utils/request'

// post 方法
export function getUserInfo(data) {
  return request({
    url: '/user/userinfo',
    method: 'post',
    data,
    hideloading: false
  })
}

// get 方法
export function getUserName(params) {
  return request({
    url: '/user/name',
    method: 'get',
    params,
    hideloading: true
  })
}
