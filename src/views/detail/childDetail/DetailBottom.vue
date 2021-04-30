<template>
  <div class="detailBottom">
    <div class="itemBar itemLeft">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="itemBar itemRight">
      <div class="cart" @click="addToCart()">加入购物车</div>
      <div class="buy" @click="toBuy()">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottom',
  methods: {
    addToCart(){
      this.$emit('addToCart')
    },
    toBuy(){
      this.$emit('toBuy')
    }
  }
}
</script>

<style scoped>
.detailBottom{
  height: 49px;
  background: #fff;
  width: 100%;
  z-index: 9999;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 7px 0px rgb(0 0 0 / 10%);

  display: flex;
  text-align: center;
}
.itemBar{
  flex: 1;
  display: flex;
}
.itemBar>div{
  font-size: 13px;
  flex: 1;
}
.itemLeft .text{
  font-size: 13px;
}
.itemLeft .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px;
  background: url("~assets/image/detail/detail_bottom.png") 0 0/100%;
}
.itemLeft .service{
  background-position: 0 -54px;
}
.itemLeft .shop{
  background-position: 0 -98px;
}
.itemRight{
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}
.itemRight .cart{
  background-color: #ffe817;
  color: #333;
}
.itemRight .buy{
  background-color: #f69;
}
.sportBall{
  position: absolute;
  left: 225px;
  bottom: 20px;
}
</style>