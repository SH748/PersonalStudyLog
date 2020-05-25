# VUE

## 基础

### 导入VUE

```js
//1.cdn

//2.导入本地js

```



### 声明

```html
<div id="app">
</div>

<script>
const vm = new Vue({
    el:"#app",
})
</script>
```



### 插值表达式

* data对象中定义的属性和值的关系---->键值对的关系

* data中的msg叫属性

*  html容器中的插值语法中：msg----->表达式

* html容器中的插值语法用 {{}} 双大括号声明,中间写入表达式

* 插值语法的使用总结：

* 一般，插值语法用在成对的标签中间

```html
 <!--html中的容器，目的是为了vue找到当前的html容器，以便进行操作-->
    <div id="app" v-cloak>
        <!--这个div是vue在的html容器，容器中所有的内容都可以叫做模板-->
        <h1>{{msg}}</h1>
        <!--{{xxxx}},在vue中叫插值语法-->
        <h2>{{content}}</h2>
    </div>

    <script>
        //实例化Vue, vm--->Vue的实例化对象
        let vm = new Vue({
            el: "#app",//el:element的简写，元素：找的是id为app的html容器
            //数据对象，用于存储数据
            data: {
                msg: "Hello World!",
                content: "开始VUE学习和使用"
            }
        })
    </script>
```

### 强制数据绑定

* 强制数据绑定：为一个属性动态的绑定一个表达式 ps:该属性的值时动态的

* v-bind:在vue中叫指令(其中一个指令)，该指令作用：强制数据绑定

* v-bind:属性名="属性值" 简写： ':属性名="表达式"'  
  * 例如： :name  :href :src  :type

```html
<a v-bind:href="url">Bilibili</a>
<a :href="url">Bilibili</a>
<input type="text" :value="shi">
 <script>
        const vm = new Vue({
            el: "#app",
            data: {
                msg: "Lorem ipsum dolor sit amet.",
                url: "https://www.bilibili.com",
                shi: "除却巫山不是云"
            },
        })
</script>

```



### 绑定监听事件

* 绑定事件监听： 为一个html标签动态的绑定一个事件，

* ps:为html标签添加一个事件，该事件的回调函数需要在十里换的Vue的配置对象中methods对象中定义

* v-on:事件名  或则 v-on:事件类型

* v-on:事件名字="回调函数"

* v-on:vue的指令之一，用来绑定事件监听的

```html
<button @click="butclick2">2</button>
<button @click="butclick3">获取对象</button>
<p ref="p1">Lorem ipsum dolor sit amet.</p>

 <script>
        const vm = new Vue({
            el: "#app",
            data: {
                msg: "Lorem ipsum dolor sit amet.",
                url: "https://www.bilibili.com",
                shi: "除却巫山不是云"
            },
            methods: {
                butclick0: function () {
                    console.log('btn0');
                },
                butclick1: function () {
                    console.log('btn1');
                },
                butclick2: function () {
                    console.log('btn2');
                },
                butclick3: function () {
                    console.log('btn3');
                    console.log(this.$refs["p1"]);
                    this.$refs["p1"].innerText = "别点我"
                },
            }
        })
</script>
```

#### 计算属性

