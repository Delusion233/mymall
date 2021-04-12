<template>
  <div class="home">
    <!-- 导航 -->
    <navbar :headColor="color.headColor" :color="color.color">
      <div slot="center">购物街</div>
    </navbar>
    <!-- 轮播图 -->
    <HomeSwiper :banners="banners"/>
    <!-- 推荐 -->
    <RecommendView :recommends="recommends"/>
    <!-- 特点 -->
    <Feature/>
    <!-- 占位 -->
    <div class="blank"></div>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/Navbar'
import {getHomeMultidata} from 'network/home'
import HomeSwiper from './childCp/HomeSwiper'
import RecommendView from './childCp/RecommendView'
import Feature from './childCp/Feature'
export default {
  name:'home',
  components:{
    navbar,
    HomeSwiper,
    RecommendView,
    Feature
  },
  data () {
    return {
      color:{
        headColor:'palevioletred',
        color:'#fff'
      },
      banners:[],
      recommends:[]
    }
  },
  created () {
    getHomeMultidata().then(res=>{//调用接口获取数据
      console.log(res);
      const result = res.data
      //暂存数据到data
      this.banners = result.banner.list
      this.recommends = result.recommend.list
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style>
.home{
  padding-top: 44px;
}
.blank{
  height: 400px;
}
</style>