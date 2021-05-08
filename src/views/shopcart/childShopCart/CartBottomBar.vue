<template>
  <div class="bottomBar">
    <div class="checkBtn">
      <checkButton :isChecked="isSelectedAll" @click.native="checkAll"/>
      <span>全选</span>
    </div>
    <div class="main">
      <span class="main_txt">合计:</span>
      <span class="main_price">￥{{priceSum}}</span>
      <div class="main_btn">结算<span>{{sum}}</span></div>
    </div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkButton/CheckButton'

import {mapState,mapGetters} from 'vuex'//vuex封装的方法，可以让我们快速拿到vuex中的数据
export default {
  name:'CartBottomBar',
  components:{
    checkButton
  },
  computed: {
    ...mapState({
      goods:state=>state.goods
    }),
    ...mapGetters({//vuex getters写法,引用vuex中getters方法的变量prosSum
      prosSum:'prosSum',
      priceSum:'prosPrice'
    }),
    //判断全选按钮
    isSelectedAll(){
      //判断goods数组是否有数据
      if(this.goods.length>0){
        return this.goods.every(v=>{
          return v.isChecked
        })
      }else{//没有数据则全选按钮返回false,不选
        return false
      }
    },
    sum(){
      if (this.prosSum > 0) {
        return '(' + this.prosSum + ')';
      }
    }
  },
  methods: {
    //点击全选按钮取反
    checkAll(){
      this.$store.commit('selectedAll',!this.isSelectedAll);
    }
  }
}
</script>

<style scoped>
.bottomBar{
  height: 46px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 49px;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  box-shadow: 0 -1px 1px #f0f0f0;
  align-items: center;
  padding: 0 10px;
}
.checkBtn{
  display: flex;
  font-size: 14px;
  width: 30%;
}
.checkBtn>span{
  margin-left: 5px;
}
.main{
  line-height: 46px;
  width: 60%;
  display: flex;
  justify-content: flex-end;
}
.main_txt{
  color: #000;
  font-size: 14px;
}
.main_price{
  color: #ca6787;
  font-size: 14px;
}
.main_btn{
  padding: 0 27px;
  height: 35px;
  text-align: center;
  background-color: palevioletred;
  margin: 5px 0;
  line-height: 37px;
  color: #fff;
  margin-left: 5px;
  border-radius: 15px;
  font-size: 14px;
  display: flex;
}
.main_btn>span{
  display: inline;
  font-size: 12px;
}
</style>