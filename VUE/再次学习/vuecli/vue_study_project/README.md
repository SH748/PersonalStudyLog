# Vue-cli下的使用记录

## 一
* 项目启动命令
```shell
npm run serve
```
* 查看项目的依赖包
```shell
npm list --depth 0 [-g]# -g 查看全局
```

* 配置自动启动浏览器
  > 在vue.config.js的devserver中配置如下代码
```js
module.exports = {
  //..
  devServer:{
    //...
    open:true
    //...
  }
  //...
}
```

* 关于modules文件夹
> 本项目用于不同的vue知识点的学习
> 不同module用于存放不同知识点
> 每个module都有各自的page、view、component
> 所有的module共用同一个路由和vuex
> 路由采用分文件管理
> Vuex采用模块化管理，不同的module不能使用其他的module的数据（Vuex的练习例外）

### Element-UI 
* 安装
```shell
  npm i element-ui 
```
* 按需引入
  1. 安装babel-plugin-component
  ```shell
    npm install babel-plugin-component -D
  ```
  2.  在babel.config.js中添加
  ```js
    module.exports = {
      presets: [
        '@vue/cli-plugin-babel/preset'
      ]
      /**以下为添加内容**/
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
  ```
  3.  组件内使用组件
      1.  导入
      ```js
        import {组件名} from "element-ui"
      ```
      2.  注册
      ```js
        components:{
          "el-xxx":导入的组件名
        }
      ```
      3.  使用(具体的组件使用方法请访问element官网查询  )
      ```js
        <el-xxx />
      ```


