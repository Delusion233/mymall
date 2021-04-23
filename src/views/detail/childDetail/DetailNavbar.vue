<template>
  <div class="detailNavbar">
    <navbar :headColor="color.headerColor" :color="color.color" class="navbar">
      <div slot="left" class="back" @click="backClick()">
        <img src="~assets/image/common/back.svg" alt="arrow-left">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title" 
        :key="item" class="title_txt"
         :class="{active:index==currentIndex}" 
         @click="titleClick(index)">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/Navbar'
export default {
  name:'DetailNavbar',
  components: {
    navbar
  },
  data () {
    return {
      color:{
        headColor:'#fff',
        color:'#000'
      },
      title:['商品','评论','推荐','详情'],
      currentIndex:0
    }
  },
  methods: {
    titleClick(index){
      this.currentIndex = index;
      //子传父，把点击按钮的index传过去
      this.$emit('clickIndex',index);
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
  font-weight: normal;
}
.back img{
  margin: 10px auto 0;
}
.title_txt{
  flex:1;
}
.active{
  color: var(--color-high-text)
}
</style>