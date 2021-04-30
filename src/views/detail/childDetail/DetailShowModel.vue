<template>
  <div class="showSelect" v-show="showModel" v-if="Object.keys(selectParams).length !== 0">
    <div class="top"  @click="closeSelect()"></div>
    <div class="bottom">
      <div class="detail">
        <!-- 图片 -->
        <img :src="selectParams.skus[0].img" alt="">
        <!-- 价格 -->
        <span><span class="yuan">￥</span>{{(selectParams.skus[0].nowprice/100).toFixed(2)}}</span>
      </div>
      <div class="selectParams">
        <div class="select_color">
          {{selectParams.color.label}}
          <div class="select_box">
            <div class="select_content" v-for="(item,index) in selectParams.color.list" 
            :key="item.index" 
            @click="selectColor(index)" 
            :class="{'selected' : isSelectColor===index}">{{item.name}}</div>
          </div>
        </div>
        <div class="select_size">
          {{selectParams.size.label}}
          <div class="select_box">
            <div class="select_content" v-for="(item,index) in selectParams.size.list" 
            :key="item.index" 
            @click="selectSize(index)"
            :class="{'selected' : isSelectSize===index}">{{item.name}}</div>
          </div>
        </div>
        <div class="select_count">
          <span>购买数量:</span>
          <div class="select_box">
            <button class="button substract" @click="sub()">-</button>
            <div class="count">{{count}}</div>
            <button class="button addition" @click="add()">+</button>
          </div>
        </div>
      </div>
      <div class="select_button">
        <div class="addCart" @click="addCart()">
          <span>加入购物车</span>
        </div>
        <div class="buy">
          <span>立即购买</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailShowModel',
  data () {
    return {
      showModel:false,
      isSelectColor:-1,
      isSelectSize:-1,
      selectedColor:'',
      selectedSize:'',
      count:1
    }
  },
  props: {
    selectParams:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    //关闭选择页面
    closeSelect(){
      this.showModel = false;
    },
    //选择颜色
    selectColor(index){
      this.isSelectColor = index
      this.selectedColor = this.selectParams.color.list[index].name
      console.log(this.selectedColor);
    },
    //选择Size
    selectSize(index){
      this.isSelectSize = index
      this.selectedSize = this.selectParams.size.list[index].name
      console.log(this.selectedSize);
    },
    //count--
    sub(){
      if (this.count==1) {
        return
      }else{
        this.count--
      }
    },
    //count++
    add(){
      this.count++
    },
    //加入购物车
    addCart(){
      const goods = {}
      goods.color = this.selectedColor
      goods.size = this.selectedSize
      goods.count = this.count
      goods.img = this.selectParams.skus[0].img
      goods.nowprice = (this.selectParams.skus[0].nowprice/100).toFixed(2);
      if (goods.color === '' || goods.size === '') {
        console.log('请选择分类');
      }else{
        this.$emit('addCart',goods);
      }
    }
  }
}
</script>

<style scoped >
.showSelect{
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.top{
  height: 100px;
}
.bottom{
  height: calc( 100vh - 100px);
  background-color: #fff;
  color: #000;
  font-weight: normal;
  font-size: 14px;
  padding: 0 10px;
  position: relative;
}
.detail{
  display: flex;
  padding: 20px 0 10px;
  border-bottom: 1px solid #eee;
}
.detail img{
  max-height: 50px;
  width: auto;
  border-radius: 5px;
}
.detail>span{
  font-size: 24px;
  color: #FF5678;
  margin-top: 5px;
  margin-left: 20px;
}
.yuan{
  font-size: 14px!important;
  margin: 0!important;
}
.selectParams {
  padding: 20px 0;
}
.select_box{
  display: flex;
  flex-wrap: wrap;
}
.select_content{
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin: 10px 10px 0 0;
  border: 1px solid rgba(0, 0, 0, 0);
}
.select_size {
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #eee;
}
.select_size .select_content{
  padding: 5px 20px;
}
.select_count{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #eee;
  height: 50px;
}
.select_count>span{
  line-height: 30px;
}
.button{
  margin: 0;
  width: 30px;
  border-width: 0;
  font-size: 24px;
  font-weight: normal;
  color: #8f8d8d;
  background: #f3f3f3;
  padding: 0;
}
.substract{
  border-radius: 5px 0 0 5px;
}
.addition{
  border-radius: 0 5px 5px 0;
}
.count{
  line-height: 30px;
  width: 35px;
  text-align: center;
  margin: 0 1px;
  background-color: #f0f0f0;
}
.selected{
  border: 1px solid #FF5678;
  color: #FF5678;
}
.select_button{
  display: flex;
  flex-wrap: nowrap;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  padding: 0 10px;
  line-height: 35px;
}
.addCart{
  background-color: #ffe817;
  color: #333;
  height: 35px;
  width: 50%;
  border-radius: 20px 0 0 20px;
}
.buy{
  background-color: #f69;
  height: 35px;
  width: 50%;
  border-radius: 0 20px 20px 0;
}
</style>