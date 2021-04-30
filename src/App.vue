<template>
  <div id="app">
    <keep-alive exclude="Detail,Shopcart"><router-view/></keep-alive>
    <maintabbar/>
  </div>
</template>

<script>
import maintabbar from 'components/content/maintabbar/MainTabbar'
export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
@import '~@/assets/css/base.css';
</style>
