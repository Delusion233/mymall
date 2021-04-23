<template>
  <div class="goodsItem">
    <div class="goodImg">
      <img :src="showImage" :alt="goodsItem.title" @load="loadImage">  
    </div>
    <div class="goodInfo">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="cfav">⭐{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props: {
    goodsItem:{
      type:Object,
      default:''
    }
  },
  computed: {
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    loadImage(){
      // console.log('loadfinish');
      this.$bus.$emit('loadImage');
    }
  }
}
</script>

<style>
.goodsItem{
  padding: 5px;
  width: 50%;
  border-radius: 5px;
}
.goodImg{
  background-color: #fff;
  border-radius: 5px 5px 0 0;
}
.goodImg img{
  width: 100%;
  border-radius: 5px 5px 0 0;
}
.goodInfo{
  font-size: 12px;
  overflow: hidden;
  padding: 5px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
}
.goodInfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goodInfo .price{
  color: var(--color-high-text);
  float: left;
}
.goodInfo .cfav{
  float: right;
}
</style>