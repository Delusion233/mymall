import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import('views/home/Home')
const category = () => import('views/category/Category')
const shopcart = () => import('views/shopcart/Shopcart')
const profile = () => import('views/profile/Profile')

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/shopcart',
    component: shopcart
  },
  {
    path: '/profile',
    component: profile
  },
]

const router = new Router ({//实例
  mode:'history',
  routes
})

export default router;//导出