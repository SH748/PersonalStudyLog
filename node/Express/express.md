## 安装Express
    1. npm init初始化
    2. npm i express 安装


## 使用
1. 引入模块
*  const express = require("express);

2. 创建对象
```js
 const app = express();
```
3. 路由规则
```js
app.get('/', (request, response)=>{
response.end('home page');
});

/**
app.请求方式(get/post)('请求路径',(res,rep)=>{
	处理代码
})
*/
```

4. 启动服务
```js
app.listen(8000, ()=>{
console.log('express 服务已经启动, 8000 端口监听中....');
})
```