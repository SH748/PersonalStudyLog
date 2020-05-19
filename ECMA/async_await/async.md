# async

## 使用

```js
async function fun(){
   // 
}
```

* 使用了 async 关键字修饰的 function 的返回值是一个 Promise 对象
* function 中 return 的值是非 Promise 实例的情况
  * function 结果是一个 resolved 状态的 Promise 实例
* function 中 return 的值是 Promise 实例的情况

* function 报错，并且抛出

# await

**==awiat 只能在被 async 修饰的 function 中使用==**

