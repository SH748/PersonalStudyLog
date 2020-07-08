import { reqSearch } from '@/api'
const state = {
    searchResult: {}
}

const mutations = {
    setSearchResult(state, result) {
        state.searchResult = result
    },

}

const actions = {
    // 获取产品信息数据
    async getProductList({ commit }, searchParams) {
        // 在不想修改原来参数对象中的数据的情况下,进行优化操作
        searchParams = { ...searchParams }
        // 过滤掉内部空串的参数数据
        Object.keys(searchParams).forEach(key => {
            if (searchParams[key] === '' || searchParams[key] instanceof Array && searchParams[key].length === 0) {
                delete searchParams[key]
            }
        })

        // 调用接口,发送异步请求,并传入参数数据---对象(包含了很多的参数)
        const result = await reqSearch(searchParams)
        if (result.code === 200) {
            commit('setSearchResult', result.data)
        }
    }
}

const getters = {
    getPagination(state) {
      let {
        pageNo,
        pageSize,
        total,
        totalPages
    } = state.searchResult
        return {
          pageNo,
          pageSize,
          total,
          totalPages
      }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}