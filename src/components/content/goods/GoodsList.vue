<template>
  <div class="goods">
    <goodsListItem v-for="(item,index) in goods" :goodsItem="item" :key="Math.random()*100+1+index"/>
  </div>
</template>

<script>
import goodsListItem from './GoodsListItem'
export default {
  name:'GoodsList',
  components: {
    goodsListItem
  },
  props: {
    goods:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style>
.goods{
  width: 100%;
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
}
</style>