import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import modules from './modules'

Vue.use(
    Vuex
)
export default new Vuex.Store({
    mode: 'history',
    state,
    mutations,
    actions,
    getters,
    modules
    // module: {}
})