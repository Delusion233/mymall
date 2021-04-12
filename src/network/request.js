import axios from 'axios'

export function request(config){//封装基本地址便于调用
  const baseUrl = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout:5000
  })
  //axios请求拦截
  baseUrl.interceptors.request.use(res=>{
    return res
  },err=>{
    console.log(err);
  })
  //响应拦截
  baseUrl.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return baseUrl(config)
}