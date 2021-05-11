<template>
  <div class="login">
    <input type="text" v-model="model.username" class="input">
    <input type="text" v-model="model.password" class="input">
    <input type="submit" @click="submitHandler" class="input" value="登录">
  </div>
</template>
<script>
export default {
  name:'Login',
  data () {
    return {
      model:{
        username:'keke',
        password:'123'
      }
    }
  },
  methods:{
    async submitHandler(e){
      e.preventDefault();//取消默认事件
      let tokenkey = 'mypro';
      //console.log(this.model);
      let username = this.model.username;
      let password = this.model.password;
      try {
        // const result = await this.$axios.get('/api/login',{params:this.model});
        if(username == 'keke' && password == '123' || username == 'admin' && password == '123'){
          //这里$store即是vuex的方法，commit是调用vuex中的mutations中的函数，setToken是函数名，后面是传的值
          let token = tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
          this.$store.commit('setToken',token);
          //把token存入本地存储
          window.localStorage.setItem('token',token);
          //this.$router.replace({path:$router.redirect});//登录成功后跳转到首页
          //判断跳转路由是否带参，带参则跳到参数地址，没有则跳到首页
          console.log(this.$route);
          const redirect = this.$route.query.redirect;
          if(redirect){
            this.$router.replace({ path : redirect });//要使用replace，如果使用push则用户回退时会返回到登录界面，这是不希望的
          }else{
            this.$router.replace({ path : '/shopcart' });
            //this.$router.go(-1);
          }
        }else{
          
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style>
.login{
  position: relative;
  z-index: 9999;
  background-color: #fff;
  height: 100vh;
  text-align: center;
}
.input{
  height: 40px;
  width: 80%;
  font-size: 14px;
  margin-top: 10px;
  padding: 0 10px;
}
</style>