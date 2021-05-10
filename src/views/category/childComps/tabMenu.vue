<template>
  <scroll class="tabMenu" :bounce="true">
    <div v-for="(item,index) in getList" 
    :key="item.title"
    class="listItem"
    :class="{active: index===currentIndex}"
    @click="itemClick(index)">
      {{item.title}}
    </div>
  </scroll>
</template>

<script>
import scroll from 'components/common/scroll/Scroll'

export default {
  name:'tabMenu',
  data () {
    return {
      currentIndex:0
    }
  },
  props: {
    getList:Array
  },
  components: {
    scroll
  },
  methods: {
    itemClick(index) {
      if(index !== this.currentIndex){
        this.$emit('itemClick',index)
        this.currentIndex = index
      }
    }
  }
}
</script>

<style scoped>
.tabMenu{
  width: 100px;
  background-color: #f6f6f6;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
.listItem{
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
}
.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>