<template>
  <div class="detailShopInfo" v-if="Object.keys(shop).length !== 0">
    <div class="d_shopBase">
      <img :src="shop.shopLogo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="d_shopDetail">
      <div class="d_shopD d_shopLeft">
        <div class="d_shopMsg">
          <p>{{shop.cFans}}</p>
          <p class="d_txt">粉丝人数</p>
        </div>
        <div class="d_shopMsg">
          <p>{{shop.cGoods}}</p>
          <p class="d_txt">全部商品</p>
        </div>
      </div>
      <div class="d_shopD d_shopRight">
        <div v-for="item in shop.score" :key="item.name">
          <span>{{item.name}}</span>
          <span :class="[item.isBetter?'colorRed':'colorGreen']" class="d_shopScore">{{item.score}}</span>
          <span :class="[item.isBetter?'colorRed':'colorGreen']">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="button">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props: {
    shop:{
      type:Object,
      default:{}
    }
  },
}
</script>

<style>
.detailShopInfo {
  padding: 30px 10px 10px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
}
.d_shopBase{
  position: relative;
}
.d_shopBase img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #eee;
  display: inline-block;
}
.d_shopBase span{
  position: absolute;
  bottom: auto;
  left: 50px;
  top: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
}
.d_shopDetail {
  margin-top: 15px;
  display: flex;
}
.d_shopD{
  flex:1;
  display: flex;
  text-align: center;
  font-size: 16px;
  color: #000;
}
.d_shopLeft{
  border-right: 1px solid #eee;
  padding-right: 30px;
  padding-top: 10px;
}
.d_shopMsg{
  flex:1;
}
.d_txt{
  font-size: 12px;
  margin-top: 5px;
}
.d_shopRight{
  font-size: 12px;
  display: inline;
  text-align: left;
  padding-left: 30px;
  line-height: 20px;
}
.colorGreen{
  color: aquamarine;
}
.colorRed{
  color: red;
}
.d_shopScore{
  padding: 0 10px;
  display: inline-block;
  width: 50px;
}
.button{
  width: 40%;
  border-radius: 8%;
  color: #666666;
  background-color: #eee;
  text-align: center;
  margin: 20px auto 10px;
  font-size: 14px;
  padding: 6px;
}
</style>