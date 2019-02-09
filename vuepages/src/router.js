import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Product from './views/Product'
import Detail from './views/Detail'
import Newactivity from './views/Newactivity'
import Product1 from './views/activity/Product1'
import Product2 from './views/activity/Product2'
import Product3 from './views/activity/Product3'
Vue.use(Router) // 注册这个路由模块

export default new Router({
  mode: 'history', // mode hash /#/film  history /film 
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'index',
      // component: Index,
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/newactivity',
      name: 'newactivity',
      component: Newactivity,
      children:[
        {
          path:'product1', // /film/
          component:Product1
        },
        {
          path:'product2',
          component:Product2
        },
        {
          path:'product3',
          component:Product3
        },
        {
          path:'',
          redirect:'/newactivity/product1'
        }
      ]
    },
    // {
    //   path: '*',
    //   redirect: '/index'
    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
