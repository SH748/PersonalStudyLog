import {combineReducers} from 'redux'

import { CHANGEUSER, CHANGELOADING, CHANGEERROR, CHNAGEFILTER } from "./actionsTypes"

const initData = {
    users: [],
    loading: false,
    error: false,
}
function users(state = initData, action) {
    switch (action.type) {
        case CHANGEUSER:
            console.log(action);
            return {
                ...state,
                loading: false,
                    users: action.data
            }
            break;
        case CHANGELOADING:
            return {
                ...state,
                loading: action.data
            }
            break;
        case CHANGEERROR:
            return {
                ...state,
                loading: false,
                    error: true
            }
            break;

        default:
            return state;
    }
}
const initFilter = {
    filter:'all'
}
function filter(state=initFilter,action){
    switch (action.type){
        case CHNAGEFILTER:
            return {
                ...state,
                filter:action.data
            }
        default:
            return state;
    }
}
export default combineReducers({
    users,
    filter
})