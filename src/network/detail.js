import { request } from './request'

export function getDetailData(iid) {
  return request({
    url: '/detail/',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend/'
  })
}

export class Goods{
  constructor(itemInfo, columns, services){
    this.itemInfo = itemInfo;
    this.columns = columns
    this.services = services
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo;
    this.cFans = shopInfo.cFans;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}

export class GoodsParams{
  constructor(info,rule){
    this.info = info.set
    this.rule = rule.tables
  }
}

export class SelectGoods{
  constructor(skuInfo){
    this.defaultPrice = skuInfo.defaultPrice
    this.color = skuInfo.props[0]
    this.size = skuInfo.props[1]
    this.skus = skuInfo.skus
  }
}