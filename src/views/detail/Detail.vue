<template>
  <div class="detail">
    <detailNavber class="detail_nav" @clickIndex="clickIndex" ref="navbar"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detailSwiper :swiperImage="swiperImage" />
      <detailBaseInfo :goods="goods" />
      <detailShopInfo :shop="shopInfo" />
      <detailCommentInfo ref="commentInfo" :commentInfo="commentInfo"/>
      <detailGoodsInfo ref="goodsInfo" :detail="detailInfo" @imageLoad="imageLoad"/>
      <detailParams :params="goodsParams"/>
      <detailRecommend ref="recommend" :recommend="recommend"/>
    </scroll>
  </div>
</template>

<script>
import detailNavber from './childDetail/DetailNavbar'
import detailSwiper from './childDetail/DetailSwiper'
import detailBaseInfo from './childDetail/DetailBaseInfo'
import detailShopInfo from './childDetail/DetailShopInfo'
import detailGoodsInfo from './childDetail/DetailGoodsInfo'
import detailParams from './childDetail/DetailParams'
import detailCommentInfo from './childDetail/DetailCommentInfo'
import detailRecommend from './childDetail/DetailRecommend'

import scroll from 'components/common/scroll/Scroll'

import {getDetailData,Goods,ShopInfo,GoodsParams,getRecommend} from 'network/detail'
export default {
  name:'Detail',
  data () {
    return {
      iid:null,
      swiperImage:[],
      goods:{},
      shopInfo:{},
      detailInfo:{},
      goodsParams:{},
      commentInfo:{},
      recommend:[],
      tabY:[],
      currentIndex:0
    }
  },
  components: {
    scroll,
    detailNavber,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParams,
    detailCommentInfo,
    detailRecommend
  },
  created () {
    //保存存入的id
    this.iid = this.$route.params.iid;
    this.getDetailData()
    this.getRecommend()
  },
  methods: {
    //调用详情页接口
    //根据id进行网络请求
    getDetailData(){
      getDetailData(this.iid).then(res=>{
        const data = res.result
        //获取详情页轮播图
        this.swiperImage = data.itemInfo.topImages
        //获取详情内容
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // console.log(data.rate.list);
        //获取店铺信息
        this.shopInfo = new ShopInfo(data.shopInfo);
        //获取详情图片
        this.detailInfo = data.detailInfo
        //获取商品参数信息
        this.goodsParams = new GoodsParams(data.itemParams.info,data.itemParams.rule)
        //获取评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }

        this.$nextTick(()=>{//获取每个标签所在的位置
          this.tabY.push(0,
          this.$refs.commentInfo.$el.offsetTop-100,
          this.$refs.recommend.$el.offsetTop-100,
          this.$refs.goodsInfo.$el.offsetTop-100)
          console.log(this.tabY);
        })
      })
    },
    //调用详情页推荐接口
    getRecommend(){
      getRecommend().then(res=>{
        // console.log(res.data.list);
        this.recommend = res.data.list
      })
    },
    //图片加载完成时调用refresh方法刷新高度
    imageLoad(){
      this.$refs.scroll.refresh()
    },
    //点击tab跳转对应的位置
    clickIndex(index){
      // console.log(index);
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0,0,200);
          break;
        case 1:
          this.$refs.scroll.scrollElement.scrollToElement(this.$refs.commentInfo.$el,200)
          break;
        case 2:
          this.$refs.scroll.scrollElement.scrollToElement(this.$refs.recommend.$el,200)
          break;
        case 3:
          this.$refs.scroll.scrollElement.scrollToElement(this.$refs.goodsInfo.$el,200)
          break;
      }
    },
    //监听滚动的位置
    contentScroll(position){
      //获取滚动的y值
      const positionY = -position.y;
      // console.log(positionY);
      //判断滚动的位置到达tab对应的标签位置
      // [0, 731, 9151, 966]
      // 0    1    3    2
      //0 ~ 731-100 , 731-100 ~ 966-100 , 966-50 ~ 9151 , >9151
      if (this.currentIndex !== 0 && positionY >= this.tabY[0] && positionY < this.tabY[1]) {
        // console.log(0);
        this.currentIndex = 0
        this.$refs.navbar.currentIndex = this.currentIndex
      }else if (this.currentIndex !== 1 && positionY >= this.tabY[1] && positionY < this.tabY[3]) {
        // console.log(1);
        this.currentIndex = 1
        this.$refs.navbar.currentIndex = this.currentIndex
      }else if (this.currentIndex !== 3 && positionY >= this.tabY[3] && positionY < this.tabY[2]) {
        // console.log(3);
        this.currentIndex = 3
        this.$refs.navbar.currentIndex = this.currentIndex
      }else if (this.currentIndex !== 2 && positionY >= this.tabY[2]) {
        // console.log(2);
        this.currentIndex = 2
        this.$refs.navbar.currentIndex = this.currentIndex
      }
    }
  }
}
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 9999;
  background-color: #eee;
}
.content{
  margin-top: 44px;
  height: calc(100vh - 44px);
}
.detail_nav{
  position: relative;
}
</style>