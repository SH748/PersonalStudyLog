# 自定义redux思路
## redux内容解析
* createStore
  * 返回一个store对象
    * store对象
      * dispatch
      * getState
      * subscribe
* combineReducers
  * 将多个reducer对象合并为一个reducer对象
  * 将多个reducer所代表的state对象合并为一个对象
    * 举例
      * users的reducer
        * 返回
```js
    {
        users:[],
        loading:false,
        error:false
    }
```
* filter的reducer
    * 返回
```js
    {
        filter:'all'
    }
```
* 合并文件
  * 返回值
```js
    {
        users:{
            users:[],
            loading:false,
            error:false
        },
        filter:{
            filter:'all'
        }
    }....
```
### createStore代码解析
```js
    /*调用createStore传入一个reducer对象*/
    function createStore(reducer) {
    /*state对象初始化为undefi*/
    let state = undefined
    /*监听回调，如果*/
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
```






