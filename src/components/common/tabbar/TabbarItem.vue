<template>
  <div class="tabbar_item" @click="click()">
    <div v-if="isActive"><slot name="item_img"></slot></div>
    <div v-else ><slot name="item_img_active"></slot></div>
    <div :class="{active:!isActive}"><slot name="item_txt"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item:0,
    }
  },
  props:{
    path:String
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path);//检测router的地址跟传的地址是否相等
    }
  },
  methods:{
    click(){
      this.$router.replace(this.path).catch(err=>err)
    }
  }
}
</script>

<style>
  .tabbar_item{
    flex: 1;
    font-size: 12px;
  }
  .tab_img{
    width: 25px;
    height: auto;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active{
    color: var(--color-tint);
  }
</style>