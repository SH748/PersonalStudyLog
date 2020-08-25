// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/**
 * 首先执行的就是man.js 执行后Vue的所有实例对象都可以访问$bus
 * $bus总线是一个Vue实例对象，可以通过$on、$emit和$off来操作通信，从而传输需要的数据
 */
// 事件总线
Vue.prototype.$bus = new Vue(
//   {
//   data: {
//     mainData: {}
//   },
//   methods: {
//     set (name, val) {
//       if(this.mainData[name]){
//       }
//     }
//   }
// }
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
