## 说明

* ES6依赖模块需要编译打包处理

## 语法

* 导出:export
* 导入:import

## 实现（浏览器端）

* 使用[Babel](www.babeljs.cn)将ES6编译为ES5
* 使用Browserify编译打包js


## 准备
 1. npm init
 2. npm安装babel-cli,babel-preset-es2015,browserify
    * npm i babel-cli browserify -g //装在全局才可以使用命令
    * npm i babel-preset-es2015
    * babel配置文件： .babelrc  //rc: run control(运行时控制文件)
```json
{
    "presets":["es2015"]
}
```

## 编译
  * 使用Babel将ES6编译为ES5: babel js/src -d js/lib   // js/XXX 名字随意 
  * 使用browserify编译babel编译后的文件 browserify js/build/main.js -o js/build/build.js  
    * js/build/main.js:需要编译的文件
    * js/build/build.js:编译后的js文件位置和名字，随意





