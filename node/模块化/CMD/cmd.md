## 特点
1. 专门用于浏览器端
2. 模块加载是异步的
3. 模块只有使用时才会加载

 ## 定义
```js
define(function(require,exports,module){
    //同步引入模块
    var md = require("XXX")
    
    //异步引入模块
    require.async("XXX",function(XX){
        
    })
    
    exports.xxx = value
})
```

## 引入使用模块

```js
define(function(require){//汇聚其他模块
     var xx = require("XXX")
     xx.xx();
    
    require.async("XXX",function(XX){
        
    })
})
```

## 实现

* [seajs](https://github.com/seajs/seajs) 多年无人更新，了解实现思路就好了

