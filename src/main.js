import Vue from 'vue'
import App from './App.vue'
import router from './router'//引入创建的router
import store from './store'

Vue.config.productionTip = false
Date.prototype.toLocaleDateString = function () {
  return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate();
}
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,//引入
  store
}).$mount('#app')
