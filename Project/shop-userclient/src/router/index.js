import Vue from 'vue'

import VueRouter from 'vue-router'

import routes from '@/router/routes.js'


/* 重写Router的push方法 */
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push=function(location,onComplete=()=>{},onAbort){
    return originPush.call(this,location,onComplete,onAbort)
}
const originReplace = VueRouter.prototype.push;
VueRouter.prototype.replace=function(location,onComplete,onAbort=()=>{}){
    return originReplace.call(this,location,onComplete,onAbort)
}



Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes
})