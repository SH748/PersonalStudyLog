import {createStore,applyMiddleware} from 'redux'

// import reducer from './reducer'

import reducer from './usersReducer'


import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

/**
 * 一个项目只能有一个store
 * 但是可以有多个reducer
 * 可以通过combineReducers来统一管理所有的reducer
 */
// const Reducers = combineReducers({todosReducer})

// const store = createStore(reducer,applyMiddleware(thunk))
// const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store 