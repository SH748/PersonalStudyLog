import {createStore,combineReducers} from 'redux'

import todosReducer from './todosReducers'

/**
 * 一个项目只能有一个store
 * 但是可以有多个reducer
 * 可以通过combineReducers来统一管理所有的reducer
 */
const Reducers = combineReducers({todosReducer})

const store = createStore(Reducers)
export default store 