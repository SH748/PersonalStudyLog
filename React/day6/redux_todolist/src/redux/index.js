function createStore(reducer) {
    let state = undefined
    let cb = null

    function getState() {
        return state
    }

    function dispatch(action) {
        state = reducer(state, action)
        cb && cb()
    }


    function subscribe(listener) {
        cb = listener
        return () => {
            cb = null
        }
    }
    state = reducer(state, { type: "asdfjasfjaweo" })
    return {
        dispatch,
        getState,
        subscribe
    }
}
/**
 * 传入一个reducer对象
 * 返回一个结合的reducer数组，调用这个结合的reducer返回一个合体的state
 * {
 *  users,
 * filter
 * }
 */
function combineReducers(reducers) {
    return (state = {}, action) => {
        let currentState = {}
        let keys = Object.keys(reducers)
        keys.forEach(key => {
            currentState[key] = reducers[key](state[key], action)
        })
        return currentState;
    }
}

/**
 * reducers:{
 *  users:function(state,action){
 *  return state
 *  }
 * filter:function(state,action){
 *  return state
 *  }
 * }
 */