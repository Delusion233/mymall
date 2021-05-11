import Vue from 'vue'
import App from './App.vue'
import router from './router'//引入创建的router
import store from './store'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
//添加时间格式
Date.prototype.toLocaleDateString = function () {
  return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate();
}
//添加事件总线$bus
Vue.prototype.$bus = new Vue()
//添加图片懒加载插件
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  attempt: 1,
  observer: true
})

//路由守卫
router.beforeEach((to, from, next) => {//无论是刷新还是跳转路由，首先进入的都是这个路由前置钩子函数
  store.commit('setToken', localStorage.getItem('token'));//把本地存储的token存到vuex中，是否有都存
  if (to.meta.requireAuth) {//判断是否有我们设置的meta
    if (store.state.token) {//判断vuex中token是否有数据，有就正常跳转
      next();
    } else {//没有就跳到登录页面,且重定向跳转地址,否则登录后会返回上一个页面
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {//没有就正常跳转
    next()
  }
  //console.log(from);
})

new Vue({
  render: h => h(App),
  router,//引入
  store
}).$mount('#app')
