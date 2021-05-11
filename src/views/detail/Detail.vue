<template>
  <div class="detail">
    <detailNavber class="detail_nav" @clickIndex="clickIndex" ref="navbar"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detailSwiper :swiperImage="swiperImage" />
      <detailBaseInfo :goods="goods" />
      <detailSelectGoods :selectParams="selectParams" @showSelect="showSelect" />
      <detailShopInfo :shop="shopInfo" />
      <detailCommentInfo ref="commentInfo" :commentInfo="commentInfo"/>
      <detailGoodsInfo ref="goodsInfo" :detail="detailInfo" @imageLoad="imageLoad"/>
      <detailParams :params="goodsParams"/>
      <detailRecommend ref="recommend" :recommend="recommend"/>
    </scroll>
    <detailBottom @addToCart="addToCart" @toBuy="toBuy"/>
    <backtop @click.native="clickToTop()" v-show="isshowBackTop"/>
    <detailShowModel :selectParams="selectParams" ref="showmodel" @addCart="addCart"/>

    <toast :message="'添加成功'" ref="toast"/>
  </div>
</template>

<script>
import detailNavber from './childDetail/DetailNavbar'
import detailSwiper from './childDetail/DetailSwiper'
import detailBaseInfo from './childDetail/DetailBaseInfo'
import detailSelectGoods from './childDetail/DetailSelectGoods'
import detailShopInfo from './childDetail/DetailShopInfo'
import detailGoodsInfo from './childDetail/DetailGoodsInfo'
import detailParams from './childDetail/DetailParams'
import detailCommentInfo from './childDetail/DetailCommentInfo'
import detailRecommend from './childDetail/DetailRecommend'
import detailBottom from './childDetail/DetailBottom'
import detailShowModel from './childDetail/DetailShowModel'

import backtop from 'components/content/backTop/BackTop'
import scroll from 'components/common/scroll/Scroll'
import toast from 'components/common/toast/Toast'

import {getDetailData,Goods,ShopInfo,GoodsParams,getRecommend,SelectGoods} from 'network/detail'
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
      currentIndex:0,
      isshowBackTop:false,
      selectParams:{}
    }
  },
  components: {
    detailNavber,
    detailSwiper,
    detailBaseInfo,
    detailSelectGoods,
    detailShopInfo,
    detailGoodsInfo,
    detailParams,
    detailCommentInfo,
    detailRecommend,
    detailBottom,
    detailShowModel,
    backtop,
    scroll,
    toast
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
        // console.log(data.skuInfo);
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
        //获取选择商品参数
        this.selectParams = new SelectGoods(data.skuInfo)

        this.$nextTick(()=>{//获取每个标签所在的位置
          this.tabY.push(0,
          this.$refs.commentInfo.$el.offsetTop-100,
          this.$refs.recommend.$el.offsetTop-100,
          this.$refs.goodsInfo.$el.offsetTop-100)
          // console.log(this.tabY);
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

      //判断滚动位置显示toTop按钮
      this.isshowBackTop = positionY > 1000;
    },
    //按钮回到顶部的方法监听
    clickToTop(){
      //通过$refs拿到bscroll里的data的scrollElement对象
      this.$refs.scroll.scrollTo(0,0);
    },
    //监听加入购物车按钮显示商品选择参数页面
    addToCart(){
      this.showSelect(true);
    },
    //监听立即购买按钮
    toBuy(){
      this.showSelect(true);
    },
    //监听展示商品选择参数页面
    showSelect(e){
      this.$refs.showmodel.showModel = e
    },
    //监听商品选择参数页面的按钮事件
    addCart(good){
      let goods = good
      goods.iid = this.iid
      goods.title = this.goods.itemInfo.title
      goods.isChecked = true
      //判断是否登录
      if(window.localStorage.getItem('token')&&this.$store.state.token){
        this.$store.dispatch('addCart', goods).then(res=>{
          // console.log('商品添加成功');
          this.$refs.toast.show = true;
        })
      }else{
        this.$router.push({path:'/login'});
        return false;
      }

      //判断是否登陆才能添加商品
      // if(window.localStorage.getItem('token')&&this.$store.state.token){
      //   this.$store.commit('addToCart',goods);
      // }else{
      //   this.$router.push({path:'/login'});
      //   return false;
      // }

      this.$refs.showmodel.showModel = false;
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
  height: calc(100vh - 44px - 49px);
}
.detail_nav{
  position: relative;
}
</style>