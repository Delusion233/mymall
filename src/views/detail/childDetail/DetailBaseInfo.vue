<template>
  <div class="detailBaseInfo" v-if="Object.keys(goods).length !== 0">
    <div class="d_goods">{{goods.itemInfo.title}}</div>
    <div class="d_price">
      <span class="d_newPrice">{{goods.itemInfo.price}}</span>
      <span class="d_oldPrice">{{goods.itemInfo.oldPrice}}</span>
      <span class="d_discount">{{goods.itemInfo.discountDesc}}</span>
    </div>
    <div class="d_column">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.columns[2]}}</span>
    </div>
    <div class="d_services">
      <span class="d_services_items" v-for="index in goods.services.length-2" :key="index">
        <img :src="goods.services[index].icon" alt="">
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props: {
    goods:{
      type:Object,
      default:{}
    }
  }
}
</script>

<style scoped>
.detailBaseInfo {
  font-size: 15px;
  padding: 15px 10px 10px;
  color: #000;
  line-height: 20px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
}
.d_goods {
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.d_price {
  margin-top: 15px;
  position: relative;
}
.d_newPrice {
  color: #FF5777;
  font-size: 28px;
}
.d_oldPrice {
  text-decoration: line-through;
  color: #8C8C8C;
  margin: 0 5px;
}
.d_discount {
  padding: 0px 4px 0px 4px;
  line-height: 18px;
  position: absolute;
  top: -2px;
  font-size: 10px;
  background-color: #FF5777;
  color: #fff;
  border-radius: 8px;
}
.d_column {
  font-size: 12px;
  color: #666666;
  display: flex;
  margin: 20px 0 10px 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}
.d_column span{
  flex: 1;
}
.d_column span:nth-child(2){
  text-align: center;
}
.d_column span:last-child{
  text-align: right;
}
.d_services {
  display: flex;
  margin: 15px 0;
}
.d_services_items {
  display: flex;
  flex: 1;
  font-size: 12px;
  line-height: 10px;
}
.d_services_items img{
  max-width: 10px;
  max-height: 10px;
}
</style>