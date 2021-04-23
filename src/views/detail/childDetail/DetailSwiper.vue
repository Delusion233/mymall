<template>
  <div class="detailSwiper">
    <Swiper class="topImage">
      <SwiperItem v-for="item in swiperImage" :key="item">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:'detailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    swiperImage:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style scoped>
.topImage{
  height: 300px;
  overflow: hidden;
}
.slide img{
  width: auto;
  max-height: 300px;
  margin: 0 auto;
}
</style>