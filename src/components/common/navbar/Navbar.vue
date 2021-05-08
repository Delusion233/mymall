<template>
  <div class="navbar" :style="'background:'+headColor+';'+'color:'+color">
    <div class="left"><slot name="left"/></div>
    <div class="center"><slot name="center"/></div>
    <div class="right"><slot name="right"/></div>
  </div>
</template>

<script>
export default {
  name:'navbar',
  props:{
    headColor:{
      type:String,
      default:'palevioletred'
    },
    color:{
      type:String,
      default:'#fff'
    }
  }
}
</script>

<style>
.navbar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
}
.left,.right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>