import {request} from './request'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return axios({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}