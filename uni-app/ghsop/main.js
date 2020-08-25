import Vue from 'vue'
import App from './App'
import store from "./store/index.js"

//request
import request from "./utils/request.js"



Vue.prototype.$request = request; 
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
