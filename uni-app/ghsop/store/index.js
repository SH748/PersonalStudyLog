import Vue from "vue"
import Vuex from "vuex"
import request from "../utils/request.js"
/*********modules**********/
import home from "./modules/home.js"

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		home
	}
})
store.$request = request
export default store

