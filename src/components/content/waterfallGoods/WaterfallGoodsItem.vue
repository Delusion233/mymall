<template>
  <div class="wfGoodsListItem" @click="click(goodsItem)">
    <div class="goodImg">
      <img v-lazy="goodsItem.show.img" :alt="goodsItem.title"  @load="loadWaterfallImage">  
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
  name:'wfGoodsListItem',
  props: {
    goodsItem:{
      type:Object,
      default: ""
    }
  },
  methods: {
    loadWaterfallImage(){
      this.$bus.$emit('loadWaterfallImage');
    },
    click(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>
<style scoped>
.wfGoodsListItem{
  width: 100%;
  padding: 5px;
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