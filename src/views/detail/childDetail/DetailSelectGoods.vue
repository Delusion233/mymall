<template>
  <div class="detailSelectGoods" v-if="Object.keys(selectParams).length !== 0">
    <div class="select" @click="showSelect()">
      <div class="select-left">选择</div>
      <div class="select-right">
        <div>
          <span>选择&nbsp;&nbsp;尺码,颜色分类</span>
          <span>></span>
        </div>
        <div class="select-img">
          <img v-for="(item,index) in showImage" :src="item" alt="" :key="index">
          <span>共{{selectParams.color.list.length}}种颜色分类可选</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailSelectGoods',
  data () {
    return {
      isshow:true  
    }
  },
  props: {
    selectParams:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showImage(){
      const arrImage = []
      const colorLength = this.selectParams.color.list.length
      const params = this.selectParams.skus.splice(0,colorLength)
      for (const item of params) {
        arrImage.push(item.img)
        if (arrImage.length >= 3) {
          break;
        }
      }
      return arrImage
    }
  },
  methods: {
    showSelect(){
      this.$emit('showSelect',this.isshow);
    }
  }
}
</script>

<style scoped>
.detailSelectGoods{
  padding: 15px 10px 10px;
  color: #000;
  line-height: 20px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
  font-size: 13px;
  font-weight: normal;
}
.select{
  display: flex;
  justify-content: space-between;
}
.select-left{
  width: 10%;
  color: #666666;
}
.select-right{
  width: 80%;
}
.select-right span:last-child{
  float: right;
}
.select-img{
  display: flex;
  line-height: 30px;
  margin-top: 15px;
}
.select-img span{
  padding: 0 10px;
  border-radius: 10px;
  background-color: #eee;
  color: #666666;
}
.select img{
  margin-right: 5px;
  max-height: 30px;
  width: auto;
}

</style>