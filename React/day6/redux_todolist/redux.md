# redux学习
## 项目初始化 
 1. 创建项目
```shell
npx create-react-app 项目名
```
 2. 添加redux
```shell
npm i react-redux
```
## antd之按需加载
* 万恶的react认为他们已经帮程序员配置好了所有的配置，于是把所有的配置内容都隐藏了起来
* 所以，如果想diy一下react脚手架的配置打一下Facebook的脸，我们需要一个繁琐的配置

### 重写覆盖react默认配置之路
 1. 安装依赖包
    1. react-app-rewired
    2. react-app-rewired的依赖包customize-cra
    3. 本次是为了antd的按需加载，所以同时安装babel-plugin-import
```shell
npm i react-app-rewired customize-cra babel-plugin-import
```
 2. 修改pakeage.json
```js
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test"
}
```
 3. 在项目根目录中创建config-overrides.js文件用以重写覆盖默认配置项
```js
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    /*这里是写需要覆盖的内容，更多内容请百度解决*/
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
```






