import {SETIHOMEDATA} from "../mutations-type.js"
import {GETHOMEDATA} from "../actions-type.js"

const state={
	initData:"hello",
	homeData:{}
}
const mutations={
	[SETIHOMEDATA](state,data){
		console.log(state);
		state.homeData = data
	}
}
const actions={
	async [GETHOMEDATA]({commit}){
		let result = await this.$request("/getIndexData");
		commit(SETIHOMEDATA,result)
	}
}
const getters={}

export default {
	state,
	mutations,
	actions,
	getters
}