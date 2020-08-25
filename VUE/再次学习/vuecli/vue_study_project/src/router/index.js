import Vue from "vue"

import VueRouter from "vue-router"

/**分包路由导入区域**/
import pages from "./modules/pages"


Vue.use(VueRouter)

export default new VueRouter({
  mode:"history",
  routes:[
    ...pages
  ]
})