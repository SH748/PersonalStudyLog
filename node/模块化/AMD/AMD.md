## 特点
1.  专门用于浏览器端
2.  模块的异步加载

## 定义暴露模块

```js
//定义没有依赖的模块
define(faction(){
    return 模块;
})

//定义有依赖的模块  **$$显示声明依赖注入**
define(["module1","module2"],function(m1,m2){
    return 模块;
})
```

## 实现（浏览器端）
  > [Require.js](https://github.com/requirejs/requirejs)  
  >
  > > ECMA6模块化出现后被逐渐抛弃

## 使用

* 文件目录结构

![image-20200511211551739](D:\个人前端学习日志\node\模块化\AMD\AMD.assets\image-20200511211551739.png)

> AMD  - 项目名(随便取)
>
> > js - 用于存放js文件
> >
> > > libs - 用于存放js库的位置
> > >
> > > modules -用于存放自己定义模块的位置
> >
> > main.js - 模块的主入口
>
> index.html -位置随意，名字随意



* module 模块定义

```js
/*module1*/
//定义无依赖模块

define(function () {
    let name = "奇衡三";

    function getName() {
        return name;
    }

    return {
        getName
    };
})

/*module2*/
//定义有依赖的参数

define([
    'module1',
    "jquery"
], function (module1, $) {

    let msg = "Hello"

    function sayHello() {

        alert(msg + module1.getName())
    }

    $("body").css("background", "lightblue")

    return {
        sayHello
    }
});
```



* 模块主入口

```js
(function () {

    requirejs.config({//配置
        baseUrl: "js/", //基本路径  出发点在根目录

        paths: {//模块注册
            module1: "./modules/module1", //不要加后缀名，requirejs会自动添加后缀 ./代表baseUrl
            module2: "./modules/module2",
            jquery: "./libs/jquery-1.10.1", //jQ支持amd规范，但使用AMD规范导入就Q对象是jQ对象名必须是小写:jq
        },

        shim: {//模块配置
            //如果第三方库不支持amd规范时,需要额外配置时，配置内容写在这里


        }
    })

    requirejs(["module2"], function (m2) {//使用引入的模块
        m2.sayHello();
    })
})()
```



* html页面导入

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <script data-main="js/main.js" src="./js/libs/require.js"></script>
    <!-- 引入requirejs即可，data-main为requirejs的模块主入口-->
</body>

</html>
```



总结：

​	流程：

		1.  加载requirejs 	
  		2. 根据data-main解析模块主入口
  		3. 根据主入口中的config来找各个模块的名字对应的文件路径
  		4. 使用模块时：

```js
requirejs(["module2"], function (m2) {//使用引入的模块
        m2.sayHello();
    })
/*requirejs是一个方法，参数有两个
	所需的模块名组成的数组
	回调
*/
```

