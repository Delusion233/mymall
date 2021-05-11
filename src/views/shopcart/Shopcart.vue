<template>
  <div class="cart">
    <navbar>
      <div slot="center">
        购物车
        <span class="count">({{goodsLength}})</span>
      </div>
    </navbar>
    <section v-if="checktoken">
      <unLogin />
    </section>
    <section v-else>
      <cartItem class="contanier" :goods="goods" @changeInput="changeInput"/>
    </section>
    <cartBottomBar />
  </div>
</template>

<script>
import navbar from 'components/common/navbar/Navbar'

import unLogin from './childShopCart/UnLogin'
import cartItem from './childShopCart/CartItem'
import cartBottomBar from './childShopCart/CartBottomBar'

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
    navbar,
    unLogin,
    cartItem,
    cartBottomBar
  },
  computed: {
    ...mapState({//vuex state写法
      goods:state=>state.goods
    }),
    ...mapGetters({//vuex getters写法,引用vuex中getters方法的变量prosSum
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
    changeInput(index,count){
      console.log(count);
      this.goods[index].count = count
    }
  },
  created () {
    if(this.$store.state.token || this.$store.state.goods.length>0){//判断vuex中存在token或者Pros添加了商品则显示完整购物车，否则显示登录部分
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
.contanier{
  padding-bottom: 95px;
}
</style>