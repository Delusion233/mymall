<template>
  <div class="checkButton" :class="{check:isChecked}">
    <img src="~assets/image/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props: {
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style>
.checkButton{
  border-radius: 50%;
  border: 2px solid #ccc;
  width: 20px;
  height: 20px;
}
.checkButton img{
  display: block;
  margin: 3px auto 0;
  width: 11px;
}
.check{
  border-color: palevioletred;
  background-color: palevioletred;
}
</style>