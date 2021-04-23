<template>
  <div class="tabbar">
    <slot>
      <slot slot="tarbar_img"></slot>
      <slot slot="tarbar_txt"></slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .tabbar{
    height: 49px;
    display: flex;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: #fff;
    box-shadow: 0 -1px 1px #f0f0f0;
  }
  
</style>
