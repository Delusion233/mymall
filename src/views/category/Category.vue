<template>
  <div class="category">
    <navbar>
      <div slot="center">
        分类
      </div>
    </navbar>
    <div class="contanier">
      <tabMenu :getList="getList" @itemClick="itemClick"/>
      <div class="rightItem">
        
      </div>
    </div>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/Navbar'
import scroll from 'components/common/scroll/Scroll'

import tabMenu from './childComps/tabMenu'

import {getCategory, getSubcategory, getCategoryDetail} from "network/category";

export default {
  name:'category',
  components: {
    navbar,
    scroll,
    tabMenu
  },
  data () {
    return {
      getList:[]
    }
  },
  created() {
    getCategory().then(res=>{
      console.log(res.data.category.list);
      this.getList = res.data.category.list
    })
  },
  methods: {
    itemClick(index){

    }
  },
}
</script>

<style scoped>
.contanier{
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
}

.rightItem{

}
</style>