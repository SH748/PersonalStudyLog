import Vue from 'vue' // 引入Vue对象
import Vuex from 'vuex' // 引入Vuex对象

Vue.use(Vuex) // Vue对象中注册Vuex对象

const state = {
  // 用于存放状态数据
  count: 0

}
const mutations = {
  // 用于存放可以直接操作存放在state中的状态数据的方法
  add (state) {
    // console.log(state) //Observer对象，里面有state对象中的所有的状态值属性
    state.count++
  },
  reduc (state) {
    state.count--
  }
}
const actions = {
  // 用于存放可以间接修改状态数据的方法
  add_action (context) {
    console.log(context)
    context.commit('add')
  },
  reduc_action ({commit}) {
    commit('reduc')
  },
  odd_reduc_action ({commit, state}) {
    if (state.count % 2 !== 0) {
      commit('reduc')
    }
  },
  reduce_asyc_action ({commit}) {
    console.log('1')
    setTimeout(() => {
      commit('reduc')
    }, 1000)
  }

}
const getters = {
  // 用于存放相关数据的计算属性的get方法
  word_OddOrEven_getter (state) {
    if (state.count % 2 !== 0) {
      return '奇数'
    }
    return '偶数'
  }
}

/** mutations能直接修改而actions只能间接修改的原因
 *  muctions中的方法被调用时，会被传入一个state参数，这个参数对应值state对象，
 * 可以通过 <state.属性名> 的方式直接修改
 *  actions中的方法被调用时，会被传入一个context参数对象，context对象中有一个commit方法，
 * 可以通过 <context.commit(mutation方法名)> 的方式调用mutations中的方法
 * 因此，muctation可以直接修改状态数据，而action不可以
 */

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
