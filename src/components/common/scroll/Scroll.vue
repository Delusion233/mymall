<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ObserveDOM from '@better-scroll/observe-dom'
export default {
  name:'Scroll',
  data () {
    return {
      scrollElement:null
    }
  },
  props: {
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    },
    bounce:{
      type:Boolean,
      default:false
    }
  },
  mounted () {
    BScroll.use(ObserveDOM)
    //创建BScroll对象
    this.scrollElement = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,//监听滚动
      pullUpLoad: this.pullUpLoad,//开启上拉加载更多
      click:true,//开启点击事件
      bounce: this.bounce,
      observeDOM:true,
      observeImage:true
    })
    //监听滚动的位置
    if(this.probeType===2 || this.probeType===3){
      this.scrollElement.on('scroll',(position)=>{//监听滚动到的位置
        this.$emit('scroll',position)
      })
    }

    //监听上拉加载更多
    if(this.pullUpLoad){
      this.scrollElement.on('pullingUp',()=>{
        this.$emit('pullingUp');
      })
    }

  },
  methods: {
    //封装方法
    scrollTo(x,y,time=500){
      this.scrollElement && this.scrollElement.scrollTo(x,y,time);//为true才执行下一个
    },
    finishPullUp(){
      this.scrollElement && this.scrollElement.finishPullUp && this.scrollElement.finishPullUp();
    },
    refresh(){
      this.scrollElement && this.scrollElement.refresh && this.scrollElement.refresh();
      // console.log('refresh');
    }
  }
}
</script>

<style>

</style>