<template>
  <div class="toast">
    <div class="toastMsg" v-show="show">{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data () {
    return {
      show:false
    }
  },
  props: {
    message:{
      type:String,
      default(){
        return ''
      }
    }
  },
  watch: {
    show(newValue){
      if (newValue===true) {
        setTimeout(() => {
          this.show = false
        }, 2000);
      }
    }
  }
}
</script>

<style>
.toastMsg{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, .7);
  color: #fff;
  padding: 10px 30px;
  z-index: 9999;
  text-align: center;
  border-radius: 10px;
  animation: all .5s ease;
}
</style>