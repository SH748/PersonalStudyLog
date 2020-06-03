# vue

## 基础

## vue-cli

## vue-router

### 安装

```shell
npm install vue-router
```
==接下来是在vue-cli中使用vue-router==

```js
/*路由相关的文件系统*/
|--src
|--|--pages  用于存放路由组件的文件夹
|--|-router  用于存放路由器设置文件的文件夹
|--|--|--index.js  路由器配置文件
|--|--|--router.js   路由文件设置(模块编程的产物，当右大量模板需要被路由器映射时，写在index中会非常累赘，把路由映射规则写在专门的文件夹中，在通过模块化，导入到index中，方便后期维护)
|--|--App.vue  
|--|--main.js 主入口
```

### 引入&挂载

引入和挂载位置：main.js

```js
//main.js
import Vue from 'vue'
import App from './App'
import router from './router'          //这里引入了router!!!!!!!!!!
/*这里引入的是在src文件下的router(路由器)文件夹，文件夹下有index.js文件*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,       //这里挂载了router!!!!!!!!!!!!!!!
  template: '<App/>',
  components: { App }
})
```


### 路由模板

* 文件位置: @/pages/head.vue

```vue
<!--路由模板和普通的vue模板在编写的本质上是没有去别的  -->
<template>
    <h1>vue-router</h1>
</template>
<script>
export default {
  name: 'routerhead'
}
</script>
<style scoped>

</style>

```



### 路由器设置

* 路由器设置文件位置：@/router/index.js

```js
import Vue from 'vue'  //1.引入vue模块
import Router from 'vue-router' //2.引入router模块

/*导入路由模板*/
import routerhead from '@/pages/head'

/*vue安装Router插件*/
Vue.use(Router)
export default new Router({//对外暴露一个路由器对象
    mode: 'history'
  //mode: 'hash' 
  //mode: 'abstract', // 路由模式 -abstract 所以js端都可以运行：例：nodejs端，如果发现没有浏览器的 API，路由会自动强制进入这个模式
  routes: [//路由映射规则，可以有很多个，所以是一个数组类型
    {
      path: '/head',
      name: 'routerhead', //命名路由组件
      component: routerhead
    }
  ]
})
```

==Tips：==

* [Vue.use()](https://vue.docschina.org/v2/api/?#Vue-use) 在Vue中安装插件
* @：表示src文件夹

#### 路由器中的mode

+ 类型: `string`

+ 默认值: `"hash" (浏览器环境) | "abstract" (Node.js 环境)`

+ 可选值: `"hash" | "history" | "abstract"`

  配置路由模式:

  + `hash`: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
  + `history`: 依赖 HTML5 History API 和服务器配置。查看 [HTML5 History 模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)。
  + `abstract`: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。**如果发现没有浏览器的 API，路由会自动强制进入这个模式**

History 接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录。

history.back() =\== history.go(-1)  后退
 history.forward() =\==\= history.go(1)  前进
 history.go() 跳转

history根据路径跳转 hash根据锚点跳转

### Vue中使用路由模板

==重点==

* router-link标签

```vue
<router-link to="/head">点击进入head</router-link> 
```

声明一个可以点击转跳的链接文本，其编译后的本质是超链接标签(a标签)

![image-20200529231848730](./vue.assets\image-20200529231848730.png)

* router-view标签

```vue
<router-view name="routerhead"></router-view>
```

用来显示渲染对应的router-link的路由组件的标签，name对应路由规则中的name属性

```vue
<template>
  <div id="app">
    <div class="first">
      <fieldset>
        <legend>router基础测试</legend>
        <router-link to="/head">点击进入head</router-link> 
        <router-view></router-view>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .first {
  font-size: 14px;
}
</style>

```



## vuex