<template>
  <div class="home">
    <!-- 导航 -->
    <navbar :color="color.color" :headColor="color.headColor">
      <div slot="center">购物街</div>
    </navbar>
    <!-- 浮动导航 -->
    <tabControl :tabTitle="tabTitle" 
    @tabClick="tabClick"
     class="tabSticky" 
     ref="tabControl1"
     v-show="isshowTabControl"/>

    <bscroll class="bscroll" 
    ref="bscroll" 
    :probeType="3" 
    @scroll="scroll"
    :pullUpLoad="true"
    @pullingUp="pullingUp">
      <!-- 轮播图 -->
      <homeSwiper :banners="banners"/>
      <!-- 推荐 -->
      <recommendView :recommends="recommends"/>
      <!-- 特点 -->
      <feature/>
      <!-- 分类 -->
      <tabControl :tabTitle="tabTitle" @tabClick="tabClick" ref="tabControl2"/>
      <!-- 商品 -->
      <!-- <goods :goods="showGoods"/> -->
      <waterfallGoods :getGoodsList="showGoods" />
    </bscroll>

    <backtop @click.native="clickToTop()" v-show="isshowBackTop"/>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/Navbar'
import bscroll from 'components/common/scroll/Scroll'
import tabControl from 'components/content/tabControl/TabControl'
import goods from 'components/content/goods/GoodsList'
import waterfallGoods from 'components/content/waterfallGoods/WaterfallGoodsList'
import backtop from 'components/content/backTop/BackTop'

import homeSwiper from './childCp/HomeSwiper'
import recommendView from './childCp/RecommendView'
import feature from './childCp/Feature'

import {getHomeMultidata,getHomeGoods} from 'network/home'

import {debounce} from 'common/utils'

export default {
  name:'home',
  components:{
    navbar,
    bscroll,
    tabControl,
    goods,
    waterfallGoods,
    backtop,
    homeSwiper,
    recommendView,
    feature
  },
  data () {
    return {
      color:{
        headColor:'palevioletred',
        color:'#fff'
      },
      banners:[],
      recommends:[],
      tabTitle:['流行','新款','精选'],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      tabOffsetTop:0,
      isshowTabControl:false,
      isshowBackTop:false,
      requestNetwork:true,
      saveY:0
    }
  },
  computed: {
    //展示goods列表数据
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created () {
    //调用接口获取数据
    this.getHomeMultidata();//前面加this,调用methods方法的函数,而不是引入的接口函数
    this.getHomeGoods('pop')//前面加this,调用methods方法的函数
  },
  mounted () {
    //图片加载完成的事件监听
    const refresh = debounce(this.$refs.bscroll.refresh,300);
    // this.$bus.$on('loadImage',()=>{//监听每张图片加载完成时刷新scroll
    //   refresh()
    // })
    this.$bus.$on('loadWaterfallImage',()=>{//监听每张图片加载完成时刷新scroll
      refresh()
    })
  },
  updated () {
    //获取tabControl的offsetTop悬浮
    //所有组件都有一个属性 $el , 用于获取组件中的元素
    this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
  },
  activated(){//使用keep-alive才有的两个函数
    this.scrollToY(this.saveY,1);
  },
  deactivated () {
    this.saveY = this.$refs.bscroll.scrollElement.y
  },
  methods: {
    /*
    事件监听相关方法
    */
    tabClick(index){//获取tabControl点击的index,展示对应的goods
      // console.log('加载中....');
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      if(this.goods[this.currentType].page==0){
        this.getHomeGoods(this.currentType)
      }
      if(-this.$refs.bscroll.scrollElement.y !== this.tabOffsetTop){//判断滚动的位置大于tabControl的位置才返回tabControl的位置
        //每次点击tabControl返回按钮顶部
        this.scrollToY(-this.tabOffsetTop,500)
      }
    },
    clickToTop(){//按钮回到顶部的方法监听
      //通过$refs拿到bscroll里的data的scrollElement对象
      this.$refs.bscroll.scrollTo(0,0);
    },
    scroll(position){//监听滚动的位置
      //1.判断滚动位置显示toTop按钮
      this.isshowBackTop = (-position.y) > 1000;
      //2.判断滚动位置与tabControl位置一样时，tabControl吸顶
      if(-position.y >= this.tabOffsetTop){
        this.isshowTabControl = true
      }else{
        this.isshowTabControl = false
      }
    },
    pullingUp(){//监听上拉加载更多
      this.getHomeGoods(this.currentType);
    },
    scrollToY(positionY,delay=0){
      this.$refs.bscroll.scrollTo(0,positionY,delay)
      this.$refs.bscroll.refresh()
    },
    /*
    网络请求相关方法
    */
    getHomeMultidata(){
      getHomeMultidata().then(res=>{//调用接口的函数,轮播图和推荐
        // console.log(res);
        const result = res.data
        //暂存数据到data
        this.banners = result.banner.list
        this.recommends = result.recommend.list
      }).catch(err=>{
        console.log(err);
      })
    },
    getHomeGoods(type){//请求goods
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{//调用接口的函数,分类
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list)//...表示每个页面的数据都添加到lists里面
        this.goods[type].page += 1;
        this.$refs.bscroll.finishPullUp();
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style>
.home{
  margin-top: 44px;
  background-color: #eee;
}
.tabSticky{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 999;
}
.bscroll{
  height: calc(100vh - 93px);
  overflow: hidden;
}
.tabControlToTop{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>