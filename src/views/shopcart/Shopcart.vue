<template>
  <div class="cart">
    <navbar :headColor="color.headColor" :color="color.color">
      <div slot="center">
        购物车
        <span class="count">({{goodsLength}})</span>
      </div>
    </navbar>
    <section v-if="checktoken">
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
    </section>
    <section v-else>
      <div v-if="goods.length>0">
        <div v-for="(item,index) in goods" :key="index">
          <img :src="item.img" alt="">
        </div>
      </div>
      <div v-else class="shopcart_empty_wrap">
        <img src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
        <p>购物车空空如也，去逛逛吧~</p>
      </div>
      <div class="shopcart_mod_title">
        <span>可能你还想要</span>
      </div>
      <div class="fixBar">
        
      </div>
    </section>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/Navbar'
import {mapState,mapGetters} from 'vuex'//vuex封装的方法，可以让我们快速拿到vuex中的数据

export default {
  name:'Shopcart',
  data () {
    return {
      checktoken:true,
      color:{
        headColor:'palevioletred',
        color:'#fff'
      },
    }
  },
  components: {
    navbar
  },
  computed: {
    ...mapState({//vuex state写法
      goods:state=>state.goods
    }),
    ...mapGetters({//vuex getters写法,引用vuex中getters方法的变量prosSum
      prosSum:'prosSum',
      priceSum:'prosPrice',
      goodsLength:'goodsLength'
    }),
  },
  methods: {
    //商品数量+1
    minusCount(index){
      this.$store.commit('minusCount',index);
    },
    //商品数量-1
    plusCount(index){
      this.$store.commit('plusCount',index);
    },
    //输入改变数量
    changeInput(index){
      const count = this.goods[index].count
    }
  },
  created () {
    if(this.$store.state.goods.length>0){//判断vuex中存在token或者Pros添加了商品则显示完整购物车，否则显示登录部分
      this.checktoken = false
    }else{
      this.checktoken = true
    }
  }
}
</script>

<style scoped>
.cart{
  margin-top:44px;
  font-weight: normal;
  background-color: #f7f7f7;
  height: calc(100vh - 44px - 49px);
}
.count{
  font-size: 13px;
}
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
.fixBar{
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 50px;
  background: hsla(0,0%,100%,.95);
  color: #333;
  font-size: 14px;
  position: fixed;
  z-index: 120;
  bottom: 49px;
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: 40px;
  border-top:1px solid #ddd;
}
</style>