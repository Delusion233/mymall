<template>
  <div class="TabControl">
    <div class="tabControlItem"  v-for="(item,index) in tabTitle"
    :class="{active:index===currentIndex}"
    :key="item" @click="click(index)" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props: {
    tabTitle:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      currentIndex:0
    }
  },
  methods: {
    click(index){
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style>
.TabControl{
  width: 100%;
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #fff;
}
.tabControlItem{
  flex: 1;
}
.tabControlItem span{
  padding: 5px;
}
.active{
  color: var(--color-high-text)
}
.active span{
  border-bottom: 2px solid var(--color-tint);
}
</style>