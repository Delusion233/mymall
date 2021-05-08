<template>
  <div>
    <div class="shopcart_login_bar">
      登录后可同步账户购物车中的商品
      <router-link to='/login'>登录</router-link>
    </div>
    <div class="shopcart_empty_wrap">
      <img src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
      <p>登录后可同步购物车中商品</p>
    </div>
    <div class="shopcart_mod_title">
      <span>更多精选</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.shopcart_login_bar{
  text-align:center;
  height:60px;
  line-height:60px;
  font-size:14px;
  color:#333;
  background-color:#fff;
}
.shopcart_login_bar a{
  display:inline-block;
  margin-left:10px;
  padding:0 21px;
  height:30px;
  border-radius:4px;
  line-height:30px;
  text-align:center;
  color:#fff;
  background-color:palevioletred;
}
.shopcart_empty_wrap{
  padding:70px 0 65px;
  text-align:center;
}
.shopcart_empty_wrap img{
  width:90px;
  height:90px;
  margin: 0 auto;
}
.shopcart_empty_wrap p{
  font-size:16px;
  color:#333;
  line-height:16px;
  margin-top:15px;
}
.shopcart_mod_title{
  position:relative;
  margin:15px 0;
  height:12px;
  line-height:12px;
  text-align:center;
  font-size:12px;
  color:#999;
}
.shopcart_mod_title span{
  z-index:2;
  position:relative;
  padding:0 15px;
  background-color:#f7f7f7;
}
.shopcart_mod_title::after{
  content:"";
  position:absolute;
  z-index:1;
  pointer-events:none;
  background-color:#ccc;
  height:1px;
  left:0;
  right:0;
  top:0;
  left:10px;
  right:10px;
  top:50%;
}
.shopcart_mod_title span::before{
  content:"";
  position:absolute;
  top:50%;
  left:0;
  margin-top:-2px;
  width:4px;
  height:4px;
  background-color:#ccc;
  -webkit-transform:rotate(45deg);
  transform:rotate(45deg);
}
.shopcart_mod_title span::after {
  content:"";
  position:absolute;
  top:50%;
  right:0;
  margin-top:-2px;
  width:4px;
  height:4px;
  background-color:#ccc;
  -webkit-transform:rotate(45deg);
  transform:rotate(45deg);
}
</style>