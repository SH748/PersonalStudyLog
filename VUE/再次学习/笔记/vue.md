# VUE

## 基础

### 计算属性

* 声明在computed中
* 当你需要一个数据，但没有直接可用的数据，需要根据已有的数据计算而来时，就是用计算属性
* 特点：
  * 响应式：当依赖的数据(data中的数据)发生变化，计算属性的结果也会变化
  * 缓存：多次调用计算属性的结果，只要所依赖的数据没有发生变化，就不会再次执行，而是会使用缓存了的数据(==这是和method的区别==)

```vue
new Vue({
	...
	data(){
		return{
			m1:"1",
			m2:"2"
		}
}
	computed:{
		/*计算属性在这里声明*/
		//方式1
		demo(){
			return 1+2
		},
		//方式2
		demo2:{
			get(){
				return this.m1 + "-" +this.m2
			},
			set(data){
				//data为修改demo2时的值时传入的值
					...	
			}
		}
	}
})
```

* 当只需要单向绑定时使用方式1
* 当需要双向绑定时使用方式2  



-------------------------------------



## 指令

- v-if,v-else,v-else-if
- v-for
- v-model
- v-bind=>@
- v-on=>:
- v-html
- v-text



-------------------------------------------

## 生命周期

<img src="D:\个人前端学习日志\VUE\再次学习\vue.assets\7. vue生命周期1.png" alt="7. vue生命周期1" style="zoom:150%;" />



-----------------------------------

##自定义指令

* 语法

  * ```js
    Vue.directive("指令名",回调函数)
    ```

* 示例

```js
/* 全局定义
 * directive：vue对象的一个方法，用于自定义指令
 * 参数：指令名
 					指令名中不需要包含v-,调用自定义指令时通过 v-指令名 使用。指令名中不能使用大写字母，必须全小写
 				回调函数
 					自定义指令在被解析时调用
 					参数：
 						element: 使用了该指令的element对象
 						bindings: 使用该指令时引用的数据
*/
Vue.directive("upper",function(element,bindings){
	//代码块
})

/* 局部定义
 *
*/
new Vue({
  el:""
  ...
  directives:{
  	upper(element,bindings){
  
		}
	}
  ...
})
```



------------

## 自定义过滤器

* 语法

  * ```js
    Vue.filter("过滤器名",回调)
    ```

* 示例

```js
/**全局定义 
 * filter: Vue对象的方法，用于定义过滤器
 * 参数：
 * 	 过滤器名：
 *  	回调函数：
 *			当过使用了该过滤器的模板被解析时调用，调用时会将过滤器前面对应的状态数据传入回调函数
*/
Vue.filter("timeFormat",function(value){
  return ..............
})

//使用
// <div> {{msg | timeFormat}} </div>
```



----------------------------------------------------------------------------

## 自定义组件

* 语法：

  * ```js
    //定义组件
    const VueComponent = Vue.extend({
      data(){
        return {
          //组件状态数据...
        }
      },
      template:"<button @click='count++'></button>",//jsx语法
      //...
      /*自定义组件和vue对象几乎一致，有生命周期，method等等，除了不能指定el*/
    })
    //注册组件(全局)
    Vue.component("自定义组件名"，VueComponent)//VueComponent是对应刚刚定义组件时存放组件的变量
    
    //注册组件(局部)
    new Vue({
      //...
      components:{
        "组件名":VueComponent
      }
      //...
    })
    
    
    /*************简化版本************/
    //已经注册
     Vue.component("组件名",{
      data(){
        return{
          
        }
      }
      //其他...
      template:''//jsx语法
    })
    ```

    * 定义组件

      > 本质上是定义了一个实例化组件对象的构造函数(类)

    * 注册组件

      > 本质是给对应的组件取别名，通过==<别名></别名> 或则 <别名/>== 的语法使用组件

    * 自定义组件的使用
      * <别名></别名>
      * <别名/>



*******************************************

## 插槽

### 默认插槽

* 声明插槽 ： <slot></slot>

* 示例：

```vue
<template>
	<div>
    <slot>
      <!--默认插槽内容区域-->
    </slot>
  </div>
</template>
```

* 使用: <template></template>

```vue
<temlate>
	<Child>
  	<template>
    	<!--需要传入给子组件默认插槽的内容-->
    </template>
  </Child>
</temlate>
```

* ==一般来说：一个区域组件内的默认插槽只有一个==



### 具名插槽

* 声明：<slot name="slotName"></slot>

* 示例：

```vue
<template>
	<div>
    <slot name="slotName0">
      <!--名为slotName0插槽内容区域-->
    </slot>
    <slot name="slotName1">
      <!--名为slotName1插槽内容区域-->
    </slot>
  </div>
</template>
```

* 使用:<template name="sloatName"></template>

```vue
<temlate>
	<Child>
  	<template slot="slotName0">
    	<!--需要传入给子组件插槽slotName0的内容-->
    </template>
    <template slot="slotName1">
    	<!--需要传入给子组件插槽slotName1的内容-->
    </template>
  </Child>
</temlate>
```

* ==具名插槽使用时在template标签中传入slot属性，属性值为插槽的name,这样template中的jsx内容就会显示在对应name的插槽中==



### 作用域插槽

* 声明： <slot :xxx=xxx></slot>
* 示例：

```vue
<template>
	<div>
    <slot :arr="{{[1,2,3]}}">
      <!--作用域插槽内容区域-->
    </slot>
  </div>
</template>
```

* 使用： <template slot-scope="slotProps"></template>

```vue
<temlate>
	<Child>
  	<template slot-scope="slotProps">
    	<li v-for="item in slotProps.arr" v-key="item">{{item}}</li>
    </template>
  </Child>
</temlate>

<!--直接在slot-scope中解构数据-->
<temlate>
	<Child>
  	<template slot-scope="slotProps">
    	<li v-for="item in slotProps.arr" v-key="item">{{item}}</li>
    </template>
  </Child>
</temlate>

```

* ==重点理解==
  * 声明插槽时向slot占位中绑定数据，当使用插槽时可以获取到声明时传入的数据
  * 接收数据：在template标签中使用属性slot-scope接收包含有传入数据的obj
    * Tips:可以直接在slot-scope中解构出需要的数据
  * ==作用域插槽实现了子组件向父组件传递数据==
    * 使用作用域插槽时接受到的数据是存放在带有插槽位的子组件中
    * 使用作用域插槽时，可以定义数据展示的结构
  * 何时使用作用域插槽：
    * 当局部的数据展示需要根据使用场景的不同而改变展示结构时，可以使用作用域插槽



**************************************************************

## 组件间传值

### 父传子-props

* 基础使用

```vue
<!--父组件向子组件传值-->
<子组件 propsName="propsValue" />
<!--子组件接收-->
<!--vue文件中,写在script中-->
props:["propsName"]
```

* 传递父组件状态--动态传值

```vue
<!--父组件-->
<!--vue文件中,写在script中-->
data(){
  return{
	num:1	
  }
}
<!--模板结构-->
<子组件 :num="num" />

<!--子组件接收-->
<!--vue文件，script中-->
props:["num"]
```

* 父组件传递动态数据(非值类型数据)给子组件时，需要使用v-bind
* 简写-> :属性名=“值”
* 如果传递动态数据给子组件时没有使用bind，会把写在引号中间的数据属性名当做字符串传递给子组件



* 子组件校验props类型——-==属性验证==

```vue
<!--父组件向子组件传值-->
<子组件 :propsName="false" />
<!--子组件-->
props:{
propsName:{
	type:Boolean
}
}
<!--或-->
props:{
	propsName:Boolean
}
<!--不限制类型，不验证时，type设置为null-->
```



### 子传父

* 子组件推送

```vue
<父组件>
  1. 父组件向子组件中传递一个事件
	<子组件 @myevent="myevent"></子组件>  
</父组件>

<子组件>
 	<button @clikc="myClick($event)">
    点击
  </button> 
 </子组件>
<script>
	method:{
    myClick(){
      2.子组件在需要的时候分发事件
      this.$emint("myevent",需要传递的数据)
    }
  }
</script>
```

**==重点==**

1. 在组件标签中使用==@+事件名==的方式向子组件传递事件

   1. 如果标签中使用的是==@+事件名==的方式传递事件，父组件中对应的方法可以接受到一个event参数，这个参数就是子组件传递过来的数据
   2. 如果标签中使用的是==@+事件名()==的方式传递事件，都需要在括号中写入$event，这样父组件中对应的方法才可以接收到对应的参数，若果写了括号，没有写$event，那么对应方法中的event为==undefined==
   3. 使用==this.$emint(“事件名”,需要传递的数据)==的方式分发(调  用)事件
2. 子组件不允许修改父组件数据
   1. 如果父组件传入子组件的数据是引用类型数据，子组件修改数据，父组件的数据也会修改
   2. 如果父组件传入子组件的数据时基础数据类型（值传递），子组件修改数据，父组件的值不会修改。

### 全局事件总线

* 适用于任何关系的组件进行事件传递


…

------------------------

 ## 路由 Vue-Router

> 概念

*  Vue官方的一个插件
* 专门用来实现一个SPA应用(Single Page Web Application)
  * 将多个页面以组件的形式放入一个页面
  * 跳转页面变成了跳转组件
  * 点击链接不会刷新页面，本身也不会向服务器发送请求
  * 点击链接时，只会做页面局部更新（组件切换）
  * 数据通过ajax请求获取，并在前端异步展现

* 用来实现不同组件的跳转

 ### ==路由概念==

* 是一个key=>value的映射关系
  * 页面路径和组件的映射关系
  * 路由可以让我们实现组件的切换和跳转：
  * 点击链接，匹配路由，显示对应的组件
* 后端：请求路径和预设路径的匹配

* 路由组件，非路由组件
  * 路由组件：
    * 在路由器中注册了路由的组件，可以通过路由跳转进行访问
  * 非路由组件
    * 没有在路由器中注册路由的组件 
* 注册路由器的作用
  * 注册路由器，注册之后，每个路由组件内部都可以通过==this.$router==拿到路由器对象
  * ，每个路由组件内部都可以通过==this.$route==拿到当前的路由对象
* 区别：
  * 路由组件的生命周期是点击链接的时候，才开始的，路由组件才会创建，mounted才能执行
  * 路由组件在切换的时候，会被销毁，显示的时候重新创建
  * 同一个路由组件传参显示不同数据，mounted回调只会执行一次，因为是一个组件

### 在Vue项目中使用路由

* 安装vue-router

```shell
npm i vue-router -S
```



>  vue-router使用

#### router->index.js文件概况

```js
// router文件夹------存放路由相关的文件的文件夹--src下

import Vue from 'vue'
import VueRouter from "vue-router"
/*VueRouter是一个Vue的插件*/
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    /*********路由内容********/
  ]
})


//main.js中注册Router
//....
import router from "xxxx"//导入刚刚定义的Router文件夹的内容
new Vue({
  el:"#root",
  //...
  router
})
```

#### 注册路由组件

```js
//router->index文件下注册路由

/************基础版本*****************/
//.........省略一些代码
import XXX from "........"//导入需要注册路由的组件
new VueRouter({
  routes:[
    {
      path:"/home",//需要映射的路径
      component:XXX,//对应路径的组件
    },
    //重定向路由
    {
      path:"/",//需要重定向的地址
      redirect:"/homt"//重定向后的目标地址
    }
    
  ]
})
```

####  router-link&router-view

* router-link:    路由链接，就是点哪，可以让你的路径变为你指定的 to
  * to: 指定该链接的目标路由地址
  * 本质是一个a标签
* router-view：路由组件显示区域，就是组件需要在哪显示

```vue
<template>
<!--路由链接-->
	<router-link to="/home">HOME</router-link>
<!--路由展示区-->
	<router-view></router-view>
</template>

```

### ***二级路由（多级路由）***

* 实现

```js
 routes:[
    {
      path:"/home",//需要映射的路径
      component:XXX,//对应路径的组件,
      children:[
        {
          /*path的两种写法:
          		1.从最上级的路由开始，一级一级的写全
          		2.只写当前路由的path,但是路由的/不能写，需要省略掉
          	对应的router-link
          		<router-link to="/home/message">>xxx</router-link>
          */
          //path:"/home/message",
          path:"message",
          component:xxx，
          children:[
          	{
  						.....        		
        		}
          ]
        }
      ]
    }
  ]
```



### 路由传参

#### params

* 声明参数

```js
/*在路由器中声明参数*/
    {
      path:"/home/:参数名",//需要映射的路径/:参数名
      component:XXX,//对应路径的组件
    }	
```
  * 传递参数

```vue
<!--/home =>路由地址，15=>参数-->
<router-link :to="`/home/15`"></router-link>
```

* ==当to属性前添加:，表示为v-bind绑定数据，此时两个引号之间的写入的会被当做js解析==
* 只在路由器中声明路由时声明参数，传入的参数才会被解析为参数，否者会被解析为路由地址

* 接收参数

```js
this.$route.params.声明的参数名
```

**当注册了路由之后，可以在Vue实例对象中通过$route获取到当前路由对象**

* 路由对象:

```js
{
  path:"xxx",
  component:xxx
  //...其他属性
}
```

* 路由器对象：

```js
import vueRouter from "vue-router"

new vueRouter({//<=路由器对象
  routes:[
    /*路由对象数组*/
  ]
})
```



#### query

* 声明
  * 无需声明
* 传参

```vue
<router-link :to=`/home?queryName=${queryVale}`></router-link>
```

* 接收

```js
this.$router.query.queryName
```



#### ==props==

* 将路由数据放入props中

1. boolean ！

   * 示例

   ```js
   {
     	path:"/xx/:paramsName",
       component:xxx,
       props:true//表示只是针对==params==参数，属性传递给相应的路由组件对象
   }
   ```

   ==只能传递params数据==

2. object

   * 示例

   ```js
   {
     	path:"/xx/:paramsName",
       component:xxx,
       props:{
         userName:"xxx"
       }//当props属性是一个对象时，对象内部的数据会传递给路由组件的props中，但只能是静态数据，没有办法获取到路由路径中数据数据
   }
   ```

   

3. **==function==** 

   * 示例

   ```js
   {
     	path:"/xx/:paramsName",
       component:xxx,
       props(route){
         //route=>当前的路由对象
         return {
        xxx:route.params.paramsName,
           queryName:route.query.xxx
         }
       }
     //可以写成箭头函数 
   }
   ```

   ==可以为params和query使用==

#### 命名路由

* 命名

```js
{
  path:"xxx",
  component:xxx,
  name:"home"
}
```

* 使用

```vue
<router-link :to="{name:'home',params:{min:123},query:{msg:'xxx'}}">xxx</router-link>
<!--path和params的问题-->
<router-link :to="{path:`xxxx/${mid}`,params:{xxxx},query:{a:1}}">xxx</router-link>
<!--写了path,params参数需要在路径中传入，此时不能写params:{},如果需要在obj中写params，可以使用name -->
```



### 缓存路由组件

* vue内置组件—-> keep-alive

* 使用

```vue
<keep-alive include="XXX" exclude="AAA">
  <!--include和exclude对应的是组件的name
	既：export default{
		name:"Home"=>这个name
	}
-->
	<router-view></router-view>
</keep-alive>
```

**==被keep-alive包裹的router-view中渲染的组件，如果符合include或者exclude,在切换路由后，不会被销毁==**

### 编程式路由

* 通过路由器对象($router)进行路由

```js
this.$router.push("路由路径")
this.$router.push({/*路由对象*/})//添加,存在历史记录

this.$router.replace("路由路径")//替换，不会出现历史记录
this.$router.replace({/*路由对象*/})

this.$router.back()//返回上一层历史记录地址
this.$router.go(-1)//返回上一层历史记录地址
this.$router.go(1)//前往前一个历史记录
```

* $router.push()和$router.replace()的区别，返回有区别。
* $router.push()是往历史记录里面追加
* $router.replace()每一次都是覆盖添加

> 解决编程路由报错

```js

import Router from 'vue-router'
 
//修复push
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
//修复replace
const originalReplace= Router.prototype.replace;
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}
```



### 路由的mode

#### hash

hash模式:

* 路径中带#: http://localhost:8080/#/home/news
* 向后台服务器发请求的路径: http://localhost:8080/  项目根路径
* 响应: 返回的总是index页面  ==> path部分(/home/news)被解析为前台路由路径

#### history

history模式:

* 路径中不带#: http://localhost:8080/home/news
* 向后台服务器发请求的路径: http://localhost:8080/home/news
* 响应: 404错误
* 希望: 如果没有对应的资源, 返回index页面, path部分(/home/news)被解析为前台路由路径
解决: 添加配置
* devServer添加: historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
* output添加: publicPath: '/', // 引入打包的文件时路径以/开头