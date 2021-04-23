<template>
  <div class="wfGoodsList">
    <div class="left" ref="leftDom">
      <waterfallGoodsItem v-for="item in leftGoodsList" 
      :key="Math.random()*100+item.shopId"
      :goodsItem="item">
      </waterfallGoodsItem>
    </div>
    <div class="right" ref="rightDom">
      <waterfallGoodsItem v-for="item in rightGoodsList" 
      :key="Math.random()*100+item.shopId"
      :goodsItem="item">
      </waterfallGoodsItem>
    </div>
  </div>
</template>

<script>
import waterfallGoodsItem from './WaterfallGoodsItem'
import {debounce} from 'common/utils'
export default {
  name:'wfGoodsList',
  components: {
    waterfallGoodsItem
  },
  data () {
    return {
      goodsListData:[],
      showGoodsList:{
        'left':[],
        'right':[]
      },
      oldLength:0
    }
  },
  props: {
    getGoodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed: {
    leftGoodsList(){
      return this.showGoodsList['left']
    },
    rightGoodsList(){
      return this.showGoodsList['right']
    }
  },
  watch: {
    getGoodsList(newValue,oldValue){
      this.setGoodsList(newValue);
    }
  },
  methods: {
    //存储props穿过来的getGoodsList,以免异步操作不能及时赋值
    setGoodsList(data){
      this.goodsListData = data
      // console.log(data);
      this.getGoods()
    },
    getGoods(){
      if(this.goodsListData){
        if (this.goodsListData.length >= this.oldLength) {
          this.goodsListData.forEach((item, index) => {
            // console.log(this.oldLength);
            if (index >= this.oldLength) {
              // // 通过$nextTick和setTimeout延时，保证每一条加载完再插入下一条
              this.$nextTick(() => {
                setTimeout(() => {
                  this.initData(item, index)
                }, 100)
              })
            }
          })
        }else{
          console.log('小');
          this.showGoodsList['left']=[]
          this.showGoodsList['right']=[]
          this.goodsListData.forEach((item, index) => {
            this.$nextTick(() => {
              setTimeout(() => {
                this.initData(item, index)
              }, 100)
            })
          })
        }
      }
    },
    //分别插入数据
    initData (item, index) {
      let leftHeight = this.$refs.leftDom.offsetHeight
      let rightHeight = this.$refs.rightDom.offsetHeight
      let likeDatas = []
      let likeDatas2 = []
      if (leftHeight > rightHeight) { // 左大于右 入右
        likeDatas2.push(item)
      } else if (leftHeight < rightHeight) { // 左小于右 入左
        likeDatas.push(item)
      } else if (leftHeight === rightHeight) { // 左右相等
        if (index % 2 === 0) { // 按0开始的顺序 %2 入左右
          likeDatas.push(item)
        } else {
          likeDatas2.push(item)
        }
      }
      this.showGoodsList['left'].push(...likeDatas)
      this.showGoodsList['right'].push(...likeDatas2)
    }
  },
  updated () {
    console.log(this.goodsListData.length);
    this.oldLength = this.goodsListData.length
  }
}
</script>

<style scoped>
.wfGoodsList{
  width: 100%;
  background-color: #eee;
  overflow: hidden;
}
.left{
  width: 50%;
}
.right{
  width: 50%;
}
</style>