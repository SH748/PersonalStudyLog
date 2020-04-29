# Es6中的Symbol

## Symbol是什么
* symbol是es6新增的一个基本数据类型，保存在**栈内存**中，通常使用symbol来指代独一无二的属性。

## 声明

```js
    //声明一个Symbol
    let sy1 = Symbol();

    //声明Symbol时添加描述
    let sy2 = Symbol("唯一值描述");
    //通过 对象.description 的形式获取Symbol的描述
    console.log(sy2.description)

    //通过Symbol.for(描述)的形式声明
    let sy3 = Symbol.for("lishi");
    let sy4 = Symbol.for("lishi");
    //通过for声明的Symbol，如果声明时for中的描述一致，则第二次声明时不会创建一个新的变量，而是引用同一个Symbol
    console.log(sy3 === sy4) //true

    //不通过for，即使描述值唯一，也不相等，证明不是同一个
    let sy5 = Symbol("唯一值描述");
    console.log(sy2 === sy5); //false
```



## Symbol的特征

* 独一无二
* 基本数据类型，不能通过new Symbol()创建 即：不能通过构造函数创建
* 不可枚举

## Symbol的作用

做为对象属性名
由于每一个Symbol对象的值都是不相等的，利用这一特性，符号做为标识符使用。将其用于对象属性名时，可以保证对象每一个属性名都是唯一的，不会发生对象属性被覆盖的情况。

用符号做为对象属性名时，不能用**.**的形式添加对象属性：

```js
va···r sym = Symbol();
var a = {};
```



a.sym = 'itbilu.com';//以点的形式添加属性名其本质上还是一个字符串
a[sym] // undefined
a['sym'] // "itbilu.com"  

可以使用以下三种方式添加符号的对象属性：

用方括号添加

```js
var sym = Symbol();
var a = {};
a[sym] = 'itbilu.com';
```

在对象内部定义

```js
var a = {

[sym]: 'itbilu.com'

};
```

用defineProperty添加

```js
var a = {};
Object.defineProperty(a, sym, { value: 'itbilu.com' });
```

其他类型的具体细节也特别多，不一一列举了，可以直接参考

