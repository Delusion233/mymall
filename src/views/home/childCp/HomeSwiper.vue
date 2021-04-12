<template>
  <div class="HomeSwiper">
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name:'HomeSWiper',
  props: {
    banners:{
      type:Array,
      default:[]
    }
  },
  components:{
    Swiper,SwiperItem
  }
}
</script>

<style>
</style>