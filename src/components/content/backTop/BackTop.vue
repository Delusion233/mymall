<template>
  <div class="backtop">
    <img src="~assets/image/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop'
}
</script>

<style>
.backtop{
  position: fixed;
  right: 10px;
  bottom: 55px;
  z-index: 999;
}
.backtop img{
  max-width: 43px;
  height: auto;
}
</style>