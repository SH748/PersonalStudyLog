# Promise

## 区分实例对象和函数对象

> 实例对象
>
> > ```js
> > function Fn (){}
> > const fn = new Fn();
> > /*class和function类通过实例化后构造的对象
> >  * 代码表示: new XXX
> > */
> > ```
>
> 函数对象
>
> > ```js
> > function fn(){};
> > fn.prototy //fn就是函数对象，即：函数被当做对象使用
> > ```

## 同步回调和异步回调

* JS是单线程的，异步函数声明后将函数交由异步管理器调用，只用当JS的所有同步代码执行后才会执行异步代码

```javascript
let arr = [1,2,3,4]
arr.forEach(element=>{
    console.log(element)
})
console.log("外部")
/*
同步结果：
	1,2,3,4 外部
*/
setTimeout(()=>{
    console.log("定时器")
}，0)
console.log("外部")
/*
异步结果：外部 定时器
*/
```

## JS错误处理

### JS错误类型

1. Error: 所有错误的父类型

2. ReferenceError: 引用的变量不存在

3. TypeError: 数据类型不正确的错误

4. RangeError: 数据值不在其所允许的范围内

5. SyntaxError: 语法错误

### js错误处理

* 捕获错误 try{…}catch(e){…}
* 抛出错误 throw error

## Promise的理解和使用

### 是什么

* 抽象

  * 一门新的ES6技术规范

  * JS中进行异步编程的新的解决方案

    备注：旧方案使用回调函数

* 具体

  * 一个对象

### 优点

* 更加灵活的指定回调函数
* 支持链式调用，可以解决回调地狱

