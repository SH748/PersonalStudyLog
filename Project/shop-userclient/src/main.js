import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import '@/mock/mockServer'

Vue.$bus = new Vue();

Vue.config.productionTip = false 

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
