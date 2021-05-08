<template>
  <div>
    <div v-if="goods.length>0">
      <div class="shopItem" v-for="(item,index) in goods" :key="index">
        <div class="itemSelector">
          <checkButton :isChecked="item.isChecked" @click.native="checked(index)"/>
        </div>
        <div class="itemImg">
          <img :src="item.img" alt="">
        </div>
        <div class="itemInfo">
          <div class="itemTitle">{{item.title}}</div>
          <div class="itemParams">{{item.color}};{{item.size}}</div>
          <div class="infoBottom">
            <div class="itemPrice left"><span>￥</span>{{item.nowprice}}</div>
            <div class="itemCount right">
              <span class="minus" @click="minusCount(index)">-</span>
              <span class="input_wrap">
                <input class="num" type="number" v-model="item.count" @input="changeInput(index,item.count)">
              </span>
              <span class="plus" @click="plusCount(index)">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="shopcart_empty_wrap">
      <img src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
      <p>购物车空空如也，去逛逛吧~</p>
    </div>
    <div class="shopcart_mod_title">
      <span>可能你还想要</span>
    </div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkButton/CheckButton'

export default {
  name:'CartItem',
  props: {
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    checkButton
  },
  methods: {
    checked(index){
      this.goods[index].isChecked = !this.goods[index].isChecked
    },
    //数量-1
    minusCount(index){
      if (this.goods[index].count==1) {
        return;
      }else{
        this.$store.commit('minusCount',index);
      }
    },
    //数量+1
    plusCount(index){
      this.$store.commit('plusCount',index);
    },
    //输入数量
    changeInput(index,count){
      this.$emit('changeInput',index,count);
    }
  }
}
</script>

<style scoped>
.shopItem{
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 15px 5px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
}
.itemSelector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.itemTitle, .itemParams{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.itemImg{
  margin-left: 5px;
}
.itemImg img{
  width: 80px;
  display: block;
  border-radius: 5px;
}
.itemInfo{
  font-size: 14px;
  color: #000;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.itemInfo .itemParams{
  font-size: 12px;
  color: #9f9d9d;
  margin-top: 5px;
  background-color: #f1f1f1;
  display: inline-block;
  border-radius: 2px;
  padding: 2px 5px;
}
.infoBottom{
  margin-top: 10px;
  position: absolute;
  bottom: 0px;
  left: 10px;
  right: 10px;
}
.infoBottom .itemPrice{
  font-size: 18px;
  color: orangered;
}
.itemPrice>span{
  font-size: 12px;
}
.itemCount{
  display: flex;
  line-height: 25px;
  width: auto;
}
.minus,.plus{
  width: 25px;
  height: 25px;
  text-align: center;
  border: 1px solid #9c9a9a;
}
.minus{
  border-radius: 8px 0 0 8px;
}
.plus{
  border-radius: 0 8px 8px 0;
}
input.num {
  width: 30px;
  height: 25px;
  text-align: center;
  line-height: 20px;
  border-right: 0px;
  border-left: 0px;
  border-top: 1px solid #9c9a9a;
  border-bottom: 1px solid #9c9a9a;
  font-size: 12px;
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