import {reqBaseCategoryList,reqBanners,reqFloors} from '@/api'
const state = {
    baseCategoryList: [],
    banners:[],
    floors:[]
}

const mutations = {
    setBaseCategoryList(state, baseCategoryList) {
        // state.baseCategoryList = baseCategoryList;
        state.baseCategoryList = baseCategoryList.splice(0,baseCategoryList.length-2);
    },
    setBanners(state,banners){
        state.banners = banners
    },
    setFloors(state,floors){
        state.floors = floors
    }
}

const actions = {
    async getBaseCategoryList({ commit }) {
        const result = await reqBaseCategoryList()
        if (result.code === 200) {

            const baseCategoryList = result.data
            commit('setBaseCategoryList', baseCategoryList)
        }
    },
    async getBanners({commit}){
        const result = await reqBanners()
        if(result.code  === 200){
            const banners = result.data
            commit('setBanners',banners)
        }
    },
    async getFloors({commit}){
        const result = await reqFloors()
        if(result.code  === 200){
            const floors = result.data
            commit('setFloors',floors)
        }
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}