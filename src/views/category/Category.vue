<template>
  <div class="category">
    <navbar>
      <div slot="center">
        分类
      </div>
    </navbar>
    <div class="contanier">
      <tabMenu :getList="getList" @itemClick="itemClick"/>
      <tabCategory :categoryData="showSubcategory" />
    </div>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/Navbar'
import scroll from 'components/common/scroll/Scroll'

import tabMenu from './childComps/tabMenu'
import tabCategory from './childComps/tabCategory'

import {getCategory, getSubcategory, getCategoryDetail} from "network/category";

export default {
  name:'category',
  components: {
    navbar,
    scroll,
    tabMenu,
    tabCategory
  },
  data () {
    return {
      getList:[],
      categoryData:{},
      currentIndex:-1
    }
  },
  created() {
    this.getCategory()
  },
  computed: {
    showSubcategory(){
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    }
  },
  methods: {
    //获取分类目录
    getCategory(){
      getCategory().then(res=>{
        //储存分类目录
        this.getList = res.data.category.list
        //初始化每个类别的子数据
        for (let i = 0; i < this.getList.length; i++) {
          this.categoryData[i] = {
            subcategories:{}
          }
        }
        //获取第一个分类内容
        this.getSubcategory(0)
      })
    },
    //获取分类内容详细
    getSubcategory(index){
      this.currentIndex = index
      const maitKey = this.getList[index].maitKey
      getSubcategory(maitKey).then(res=>{
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
      });
    },
    //点击分类
    itemClick(index){
      this.getSubcategory(index)
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