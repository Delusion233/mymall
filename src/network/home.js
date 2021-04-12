import {request} from './request'

export function getHomeMultidata(){//封装home数据的接口
  return request({ 
    url: '/home/multidata' 
  })
}