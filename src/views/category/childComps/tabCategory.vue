<template>
  <scroll class="scroll" :bounce="true">
    <div class="tabCategory" v-if="categoryData.list">
      <div v-for="(item,index) in categoryData.list" :key="index" class="item">
        <a :href="item.link">
          <img class="item_img" :src="item.image" alt="">
          <div class="item_text">{{item.title}}</div>
        </a>
      </div>
    </div>
  </scroll>
</template>

<script>
import scroll from 'components/common/scroll/Scroll'
export default {
  name:'TabCategory',
  components: {
    scroll
  },
  props: {
    categoryData:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.scroll{
  height: calc(100vh - 44px - 49px);
  width: calc(100vw - 100px);
  overflow: hidden;
  width: 100%;
}
.tabCategory{
  padding: 10px 3%;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  text-align: center;
  font-size: 12px;
  font-weight: normal;
}
a{
  display: block;
}
.item{
  width: 32%;
  margin-top: 10px;
}
.item_img{
  width: 100%;
}
</style>