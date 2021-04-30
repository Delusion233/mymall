import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    goods:[]
  },
  mutations: {
    //1. 添加商品到购物车
    addToCart(state,payload){
      //判断商品是否存在
      let oldValue = state.goods.find(v =>{
        v.iid === payload.iid && v.color === payload.color && v.size === payload.size
      })
      //存在+1
      if(oldValue){
        oldValue.count += 1
      }else{//不存在直接push
        state.goods.push(payload);
      }
    },
    //商品数量-1
    minusCount(state, index) {
      let count = state.goods[index].count;
      if (count == 1) {
        //如果数量为1减后直接删除该商品
        state.goods.splice(index, 1);
      } else {
        state.goods[index].count--;
      }
      console.log('-1')
    },
    //商品数量+1
    plusCount(state, index) {
      state.goods[index].count++;
      console.log('+1')
    }
  },
  actions: {
    
  },
  getters: {
    prosSum: state => {
      let sum = 0
      state.goods.forEach(v => {
        sum += Number(v.count)//需转成number，不然购物车页面数量自己改变的时候变成字符相加
      })
      return sum;
    },
    prosPrice: state => {
      let sum = 0
      state.goods.forEach(v => {
        sum += Number(v.nowprice * v.count)//需转成number，不然购物车页面数量自己改变的时候变成字符相加
      })
      return sum;
    },
    goodsLength:state=>{
      return state.goods.length
    }
  },
  modules: {
    
  }
})

export default store