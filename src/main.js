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

new Vue({
  render: h => h(App),
  router,//引入
  store
}).$mount('#app')
