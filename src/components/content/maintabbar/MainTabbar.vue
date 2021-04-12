<template>
  <div class="maintabbar">
    <tabbar>
      <tabbarItem path="/home">
        <img slot="item_img" src="~assets/image/tabbar/home.svg" class="tab_img">
        <img slot="item_img_active" src="~assets/image/tabbar/home_active.svg" class="tab_img">
        <p slot="item_txt">首页</p>
      </tabbarItem>
      <tabbarItem path="/category">
        <img slot="item_img" src="~assets/image/tabbar/category.svg" class="tab_img">
        <img slot="item_img_active" src="~assets/image/tabbar/category_active.svg" class="tab_img">
        <p slot="item_txt">分类</p>
      </tabbarItem>
      <tabbarItem path="/shopcart">
        <img slot="item_img" src="~assets/image/tabbar/shopcart.svg" class="tab_img">
        <img slot="item_img_active" src="~assets/image/tabbar/shopcart_active.svg" class="tab_img">
        <p slot="item_txt">购物</p>
      </tabbarItem>
      <tabbarItem path="/profile">
        <img slot="item_img" src="~assets/image/tabbar/profile.svg" class="tab_img">
        <img slot="item_img_active" src="~assets/image/tabbar/profile_active.svg" class="tab_img">
        <p slot="item_txt">我的</p>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from 'components/common/tabbar/Tabbar'
import tabbarItem from 'components/common/tabbar/TabbarItem'
export default {
  name:'main_tabbar',
  components:{
    tabbar,
    tabbarItem
  }
}
</script>

<style>

</style>