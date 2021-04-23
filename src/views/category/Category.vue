<template>
  <div class="category">
    <!-- <tabControl :tabTitle="tabTitle" 
    @tabClick="tabClick"></tabControl> -->
    <waterfallGoods :getGoodsList="showGoods"></waterfallGoods>
  </div>
</template>

<script>
import tabControl from 'components/content/tabControl/TabControl'
import waterfallGoods from 'components/content/waterfallGoods/WaterfallGoodsList'

import bscroll from 'components/common/scroll/Scroll'

import {getHomeGoods} from 'network/home'
export default {
  name:'category',
  components: {
    tabControl,
    waterfallGoods,
    bscroll
  },
  data () {
    return {
      tabTitle:['流行','新款','精选'],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop'
    }
  },
  created () {
    this.getHomeGoods('pop');
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    getHomeGoods(type){
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          // console.log(this.goods[this.currentType].list);
      })
    },
    tabClick(index){
      console.log(index);
    }
  }
}
</script>

<style>
</style>