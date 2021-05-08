import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token:'1',
    goods: JSON.parse(localStorage.getItem('goods')) || [],//购物车商品数组
  },
  mutations: {
    //1.设置登陆token
    setToken(state, token) {
      state.token = token
    },
    //2. 添加商品到购物车
    addToCart(state, payload) {
      state.goods.push(payload);
    },
    //3. 添加商品，商品iid和参数相同则商品数量+1
    addToCartCount(state, payload) {
      payload.count++
    },
    //点击-按钮商品数量-1
    minusCount(state, index) {
      let count = state.goods[index].count;
      if (count == 1) {
        //如果数量为1减后直接删除该商品
        state.goods.splice(index, 1);
      } else {
        state.goods[index].count--;
      }
      // console.log('-1')
    },
    //点击+按钮商品数量+1
    plusCount(state, index) {
      state.goods[index].count++;
      // console.log('+1')
    },
    //点击全选按钮将goods里每个isSelected取反，为true or false;
    selectedAll(state, payload) {
      state.goods.forEach(v => {
        v.isChecked = payload
      })
    }
  },
  actions: {
    addCart({state,commit},payload){
      return new Promise((resolve, reject) => {
        //判断商品是否存在
        let oldValue = state.goods.find(v => {
          return v.iid === payload.iid && v.color === payload.color && v.size === payload.size
        })
        //存在+1
        if (oldValue) {
          // oldValue.count += 1
          commit('addToCartCount',oldValue)
          resolve('商品数量+1')
        } else {//不存在直接push
          // state.goods.push(payload);
          commit('addToCart', payload)
          resolve('商品添加成功')
        }
        console.log(state.goods);
      })
    }
  },
  getters: {
    //选择的商品的数量
    prosSum: state => {
      let sum = 0
      state.goods.forEach(v => {
        //需转成number，不然购物车页面数量自己改变的时候变成字符相加
        if (v.isChecked) { sum += Number(v.count) }
      })
      return sum;
    },
    //选择的商品的总价
    prosPrice: state => {
      let sum = 0
      state.goods.forEach(v => {
        //需转成number，不然购物车页面数量自己改变的时候变成字符相加
        if (v.isChecked) { sum += Number(v.nowprice * v.count) }
      })
      return sum.toFixed(2);
    },
    //总的商品的数量
    goodsLength: state => {
      return state.goods.length
    }
  },
  modules: {
    
  }
})

//当调用mutations里的方法的时候，都会进入这个方法，去存储我们的goods商品，这里可以做一些自己的处理
store.subscribe((mutations, state) => {
  localStorage.setItem('goods', JSON.stringify(state.goods))
})

export default store