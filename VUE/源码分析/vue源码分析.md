# 文件结构

> js
>
> > MVVM.js
> >
> > 
> >
> > c
> >
> > d



# 数据代理

==vue中的data属性对象中的值可以直接通过 <vue对象.属性名> 的方式获取，实现这种形式的行为叫做数据代理==

```js
/*原Vue代码*/
let vm = new({
    el:'#app',
    data:{
        msg:'123'
    }
})

console.log(vm.data.msg)//报错
conolse.log(vm)//查看vm实例的内部属性结构 ==>  $data  _data
conolse.log(vm.$data.msg)//通过$data.msg访问
console.log(vm._data.msg)//通过_data.msg访问
console.log(vm.msg)
/*vue中的data属性对象中的值可以直接通过 <vue对象.属性名> 的方式获取，实现这种形式的行为叫做数据代理*/
```



## MVVM中数据代理的相关代码

==原理分析==

文件位置：js/MVVM.js

```js
/*github中他人实现的vue核心功能的一些代码*/
function MVVM(options) {
    this.$options = options || {};
    var data = this._data = this.$options.data;
    var me = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    Object.keys(data).forEach(function(key) {
        me._proxyData(key);
    });

    this._initComputed();

    observe(data, this);

    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype={
     _proxyData: function(key, setter, getter) {
        var me = this;
        setter = setter || 
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    },
}
```

==调用==

```js
let mm = new  MVVM({
    el:'#app',
    data:{
        msg:'123'
    }
})
```

## 分析

1. new MVVM()中的操作

   ==涉及代码==

   ```js
   function MVVM(options) {
       this.$options = options || {};
       var data = this._data = this.$options.data;
       var me = this;
   
       // 数据代理
       // 实现 vm.xxx -> vm._data.xxx
       Object.keys(data).forEach(function(key) {
           me._proxyData(key);
       });
   
       this._initComputed();
   
       observe(data, this);
   
       this.$compile = new Compile(options.el || document.body, this)
   }
   ```

   * options是什么

     * 类型：Object

     * 是new MVVM()中传入的参数

       ```js
       {
           el:'#app',
           data:{
               msg:'123'
           }
       }
       ```

       ==$options== MVVM对象中用于存放传入的options对象的一个属性

   * _data

     * 类型： Object

     * 是$options 中的data属性

       ```js
       data:{
           msg:'123'
       }
       ```

       ==data== 

       ```js
       var data = this._data = this.$options.data; 
       /**
       * 把$options中的data赋值给data 和6his._data
       * 	this._data给了当前MVVM对象作为属性，可以通过 <vm实例对象._data> 访问
       *	data只是一个局部变量，不可访问
       */
       ```

       

   * var me = this

     * ==当前vm实例对象==

   * Object.key(data)是什么

     * 获取对象的所有属性的属性名，将对象所哟的属性名形成一个数组，返回

     ```js
     Object.keys(data).forEach(function(key) {
         me._proxyData(key);
         /*
         1.给当前实例对象添加所有data中的数据
         */
     });
     ```

     ```js
     _proxyData: function(key, setter, getter) {
         /*key:data中的属性名  setter:und   getter:und*/
         var me = this;//当前实例对象
         setter = setter || 
             Object.defineProperty(me, key, {//me:当前实例对象，key：data中的属性名
             configurable: false,//不能被delete
             enumerable: true,//可以在 for in 中被遍历
             get: function proxyGetter() {
                 return me._data[key];
                 //<vm实例对象.属性名>获取时，从对象的_data中对应的属性名取值
             },
             set: function proxySetter(newVal) {
                 me._data[key] = newVal;
             }
         });
     },
     ```

     

 

