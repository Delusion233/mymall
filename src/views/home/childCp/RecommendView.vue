<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'recommend',
  props: {
    recommends:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid #eee;
  padding: 10px 0 20px;
  background-color: #fff;
}
.recommendItem{
  flex: 1;
  padding: 0 1%;
}
.recommendItem img{
  max-width: 100%;
  margin-bottom: 10px;
}
</style>