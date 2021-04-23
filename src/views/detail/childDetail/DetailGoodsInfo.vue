<template>
  <div class="detailGoodsInfo" v-if="Object.keys(detail).length !== 0">
    <div class="d_desc">{{detail.desc}}</div>
    <div class="d_detailImage">
      <img v-for="item in detail.detailImage[0].list" :src="item" :key="item" alt="" @load="imageLoad()">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  props: {
    detail:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
      counter:0,
      imageLength:0
    }
  },
  methods: {
    imageLoad(){
      if (++this.counter == this.imageLength) {
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detailImageLength(){
      this.imageLength = this.detail.detailImage[0].list.length
    }
  }
}
</script>

<style>
.detailGoodsInfo{
  background-color: #fff;
  margin-top: 10px;
  border-radius: 10px;
}
.d_desc {
  color: #E65777;
  padding: 20px 10px;
  font-size: 14px;
  text-indent: 2rem;
}
.d_detailImage img{
  width: 100%;
}
</style>