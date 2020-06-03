import Vue from 'vue'

import Router from 'vue-router'
// import routerhead from '@/pages/head'

import routes from './routes'

Vue.use(Router)
export default new Router({
  mode: 'history', // 路由模式 -abstract 所以js端都可以运行：例：nodejs端，如果发现没有浏览器的 API，路由会自动强制进入这个模式
  // routes: [
  //   {
  //     path: '/head', // 必须
  //     name: 'routerhead',
  //     component: routerhead // 必须
  //   }
  // ]
  routes
})
