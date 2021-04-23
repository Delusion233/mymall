<template>
  <div class="detailRecommend">
    <goods :goods="recommend" />
  </div>
</template>

<script>
import goods from 'components/content/goods/GoodsList'
export default {
  name:'DetailRecommend',
  props: {
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    goods
  }
}
</script>

<style>

</style>