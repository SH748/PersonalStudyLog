#  webpack

* 前端资源构建工具
* 静态模块打包器

**将前端所有的资源文件作为模块处理，根据模块的依赖关系进行静态分析，打包成对应的静态资源**



## 核心概念

Entry

* 入口
* 指示webpack以哪个文件为入口起点开始打包，分析建构内部依赖图

Output

* 输出
* 指示webpack打包资源后bundles输出到哪里去，以及如何命名

Loader

* 加载器
* 让webpack能够处理非JavaScript文件（webpack自身只能处理js和json文件）

Plugins

* 插件
* 可以用于执行范围更广的任务，插件的范围包括从打包优化到压缩，一直到重新定义环境中的变量名的

Mode

* 模式
* 指示webpack使用相应模式的配置



|    选项     |                             描述                             |            特点            |
| :---------: | :----------------------------------------------------------: | :------------------------: |
| development | 会将process.env.NODE_ENV的值设置为development 。<br />启用NameChunksPlugin和NameModulesPlugin |  能让代码本地测试运行环境  |
| production  | 会将process.env.NODE_ENV的值设置为production.<br />启用FlagDependencyUsagePlugin，FlagIncludedChunksPlugin<br />ModuleConcatenationPlugin,NoEmitOnErrorsPlugin,<br />OccurrenceOrderPlugin,SideEffectsFlagPlugin和UglifysPlugin | 能让代码优化上线运行的环境 |



## webpack初体验

### 安装

* 安装 webpack webpack-cli

```shell
npm webpack webpack-cli -g
```

 ### 运行指令

* 开发环境

```shell
webpack 入口文件路径 -o 输出文件路径(文件可以不存在) --mode=模式(development/production)
# 例
webpack ./src/index.js -o ./build/built.js -- mode=development
```

* 生产环境–打包的文件会被压缩

```shell
webpack 入口文件路径 -o 输出文件路径(文件可以不存在) --mode=production
# 例
webpack ./src/index.js -o ./build/built.js -- mode=production
```

 ==在不添加loader和plugin的情况下，webpack只能打包js和json，不能打包CSS和image等其他文件==

* webpack能将ES6模块化编译成浏览器能识别的模块化

### config配置文件

* 文件全名：webpack.config.js
* 文件位置：项目根目录
* 作用：对webpack的行为进行配置
* commontjs语法
  * 所有构建工具都是基于nodejs平台运行
  * nodejs目前只支持commontjs实现的模块化

```js
//导入node中的path中resolve用于绝对路径的需要
const {resolve) = require('path')

module.exports={
    //入口起点，webpack打包分析依赖图的起点
    entry:'',
    //输出
    output:{
        //输出文件名(取名随意)
        filename:'built.js',
        //输出路径，推荐使用绝对路径
        //__dirname nodejs的变量，代表当前文件的目录的绝对路径
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            //详细的loader配置
            {
                //loader匹配规则
                //被匹配的文件就会使用该配置的loaders进行处理
              	test:/\.css$/,
                //使用那些loader进行处理，多个loader类型时数组，单个可以直接写字符串
                //webpack调用loader的顺序为：从数组的后面开始调用
                use:[
                    //创建style标签，把css的commonjs添加到header中
                    "style-loader",
                    // .css => commonjs
                    "css-loader"
                ]
            },
        ]
    },
    plugins:[
        //详细的plugins配置
    ],
    //模式
    mode:'development',//开发模式
    //mode:'production',//生产模式
}
```

#### 打包css

```js
module:{
    rules:[
        {
            test:/\.css$/,
            use:[
                "style-loader",
                "css-loader"
            ]
        }
    ]
}
```

#### 打包less

```js
module:{
    rules:[
        {
            test:/\.less$/,
            use:[
                "style-loader",
                "css-loader",
                "less-loader"
            ]
        }
    ]
}
```

#### 打包html

```js
//引入html-webpack-plugin
const HWP =  require('html-webpack-plugin')

pluginsL[
    //在plugin中使用引入的HWP
    //功能：默认创建一个空的HTML，自动引入打包的所有资源
    //需求：需要创建的是一个有结构的HTML文件
    new HWP({
        //使用templete，使得HWP以目标路径文件为打包目标，复制一个文件，然后将打包的所有资源引入到复制的文件中
        template:'./src/index.html'
    })
]



```

#### 打包图片

```js
//默认处理不了html文件中引入的图片
{
    test:/\.(jpg|png|gif)$/,
       	//需要下载url-loader和file-loader
        loader:'url-loader',
        options:{
            //指定图片转base64的体积大小，小于指定体积的图片不会被转为base，单位b
        	limit:8*1024,
             //关闭url-loader的es6module导入，配合html-loader(使用的是commonjs导入)对html中的图片进行处理(备注：新版本可能已经处理了这个问题)
            esModule:false,
            //设置图片名的长度，hash长度:10,ext:文件原来的拓展名
            name:'[hash:10].[ext]'
        }
}
//处理html中的图片问题
{
    test:/\.html$/,
    loader:"html-loader"
}
```

==webpack对于同一个资源文件在项目多处引用，不会重复打包==

#### 打包其他资源

````js
{
    //使用file-loader打包其他资源
    //exclude:排除可以被匹配的资源(在项目中，如果某个类型的资源已经处理了，或者需要特殊处理，就需要在这里exclude排除掉)
    exclude:/\.(css|js|html|less)$/,
    loader:'file-loader',
    options:{
        name:'[hash:10].[ext]'
    }    
}
````



## devServer

* 开发服务器
* 自动化打包（自动编译，打开浏览器，刷新浏览器）
* 特点：只会在内存中打包，不会有任何输出(不会将打包资源生成文件)
* 启动指令：npx webpack-dev-server
* 安装：webpack-dev-server

```js
{
    entity:""
    ....
    devServer:{        		 
      contentBase:resolve(__dirname,'build'),
       //启用gzip压缩
       compress:true,
       //端口号
        port:3000,
        //自动打开浏览器
        open:true
    }
}
```

## 开发环境基本配置（简略）

```js
const { resolve } = require("path")
const HWP = require("html-webpack-plugin")
module.exports = {
    entry: './src/js/index.js', //配置webpack打包入口
    output: {
        filename: 'js/built.js', //打包后输入的文件名(把文件归类到js文件下)
        path: resolve(__dirname, "build")
    },
    module: {
        //loader配置
        rules: [{
                //less处理
                test: /\.less$/,
                user: ["style-loader", "css-loader", "less-loader"]
            },
            {
                //css处理
                test: /\.less$/,
                user: ["style-loader", "css-loader"]
            },
            {
                //处理图片资源(这个loader只能处理css中的图片资源，html的图片资源需要另外配置)
                test: /\.(jpg|png|git)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024, //转base64限制，8kb
                    name: '[hash:10].[ext]', //打包生成的资源的名字长度限制
                    //关闭es6模块，具体原因看上方
                    esModule: false，
                    outputPath:'images',//把图片资源打包后归类到images目录下
                }
            }， {
                //处理html中图片资源
                test: /\.html$/,
                loader: 'html-loader'
            }， {
                //处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|git)/,
                loader: "file-loader",
                options: {
                    name: "[hase:10].[ext]"，
    			   outputPath:'media',//把打包后的资源归类到media文件夹下
                }
            }

        ]
    },
    plugins: [
        //plugin配置
        new HWP({
            //html文件打包配置
            template: './src/index.html'
        })
    ]，
    devServer:{
        contentBase:resolve(__dirname,'build')，
        compress:true,
        port:3000,
        open:true
    },
    mode:"development",//开发
    //mode:"production",//生产
}
```



## 生产环境基本配置（简略）

```js
const { resolve } = require("path")
//打包处理html中引入的图片
const HWP = require("html-webpack-plugin")
//将css打包成单独的文件
const MCEP = require ('mini-css-extract-plugin')
//压缩css文件
const OCAWP = require("optimize-css-assets-webpack-plugin")
module.exports = {
    entry: './src/index.js', //配置webpack打包入口
    output: {
        filename: 'built.js', //打包后输入的文件名
        path: resolve(__dirname, "build")
    },
    module: {
        //loader配置
        /*提取css成单独文件*/
        rules: [{
                //less处理
                test: /\.less$/,
                user: ["style-loader", "css-loader", "less-loader"]
            },
            {
                //css处理(将css整合到js中在通过styleloader通过style标签写入html文件中)
                test: /\.less$/,
                user: [
                //    "style-loader", 
                 //取代styleloader，提取js中的css成单独文件   
                  	MCEP.loader,
                    "css-loader",
                    /******css兼容处理*******/
                    {
                        loader:"postcss-loader",
                        options:{
                            ident:"postcss",
                            //使用loader的插件postcess-preset-env
                            //作用:查找package.json中的browserslist配置(具体配置在github中搜索browserlist)
                            plugins:()=>{
                                reuqire("postcess-preset-env")
                            }
                        }
                    }
                ]
            },
            {
                //处理图片资源(这个loader只能处理css中的图片资源，html的图片资源需要另外配置)
                test: /\.(jpg|png|git)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024, //转base64限制，8kb
                    name: '[hash:10].[ext]', //打包生成的资源的名字长度限制
                    //关闭es6模块，具体原因看上方
                    esModule: false
                }
            }， {
                //处理html中图片资源
                test: /\.html$/,
                loader: 'html-loader'
            }， {
                //处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|git)/,
                loader: "file-loader",
                options: {
                    name: "[hase:10].[ext]"
                }
            }

        ]
    },
    plugins: [
        //plugin配置
        new HWP({
            //html文件打包配置
            template: './src/index.html'
        })，
        new MCEP({
        	//提取css成单独文件
        	//对打包输出的文件重命名（顺带把文件归类到css文件下）
        	filename:'css/main.css'
        }),
            //optimize-css-assets-webpack-plugin压缩css插件
            //默认配置够用，不单独配置
            new OCAWP()
    ]，
    devServer:{
        contentBase:resolve(__dirname,'build')，
        compress:true,
        port:3000,
        open:true
    },
    mode:"development",//开发
    //mode:"production",//生产
}
```

* 将css打包成单独的文件
  * 使用mini-css-extract-plugin插件
  * 1. 引入插件
    2. 在plugins中注册插件
    3. 使用MCEP.loader代替css打包配置中的styleloadeer
  * 优点
    * 将css打包成单独文件，html通过link引入，解决了页面闪屏问题
    * js文件中不再有css的内容，文件体积减小，减轻了网络压力，使得js文件可以快速加载，有利于用于体验
  
* css兼容性处理

  * 使用postcss-loader和postcss-preset-env 

  * 1. 配置loader

    ```js
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MCEP.loader,//css单独文件处理
                    'css-loader',
                    {
                        loader:"postcss-loader",
                        options:{
                            ident:"postcss",//固定语法
                            plugins:[
                                require("postcss-preset-env")//查找项目package.json中的browserlist(具体的browserlist配置，github中搜索browserlist)
                            ]
                        }
                    }
                ]
            }
        ]
    }
    ```

  * 2. 设置nodejs的process.env.NODE_ENV
       * browserlist有开发和生产两个不同的配置
       * 插件查找的时候默认查找的是生产时配置
       * ==如果需要配置的是开发时的配置，需要设置nodejs中的procss.env.NODE_ENV设置为development==

  * 优点：

    * 不需要再开发时在额外花费精力去处理兼容性问题

* 压缩css

  * 使用插件optimize-css-assets-webpack-plugin
    * 引入
    * 注册到plugins中

## ESLint

* 安装以下js库
  * 使用airbnb风格
    * eslint-config-airbnb-base
    * eslint
    * eslint-plugin-import
    * eslint-loader
* 配置时需要排除对node_modules中文件的检查
* 配置自动修复(loader中)：options中fix:true
* 配置（eslint配置）：
  * “extends”:“airbnb-base”

## js兼容性处理-babel

*   基础处理
* 插件：babel,@babel/preset-env，@babel/core
* 配置

```js
{
    test:/\.js$/,
    exlude:/node_modules/,//排除对第三方包的检测
    loader:'babel-loader',
    options:{
        //预设
        presets:['@babel/preset-env']
    }
    
}
```

* 全部处理
* 安装并引入@babel/ployfill
* 问题：处理后js文件体积过大

* 按需处理兼容性问题
* 使用core-js
* 配置

```js
{
    test:/\.js$/,
    exlude:/node_modules/,//排除对第三方包的检测
    loader:'babel-loader',
    options:{
        //预设
        presets:['@babel/preset-env'],
        {
            useBuiltIns:'usage',
            corejs:{
                version:3
            },
            //指定兼容到那个版本的浏览器
            targets:{
                chrome:'60'
            }
        }
    }
    
}
```

* 总结：
  * 使用以下插件和库
    * babel-loader
    * @babel/preset-env
    * @babel/core
    * core-js

## 性能优化

### 开发环境优化

* 优化方向

> 优化打包构建速度
>
> > HMR
>
> 优化调试环境
>
> > sourceMap

#### SourceMap基础

SourceMap是一种映射关系。当项目运行后，如果出现错误，错误信息只能定位到打包后文件中错误的位置。如果想查看在源文件中错误的位置，则需要使用映射关系，找到对应的位置。

```java
const path = require('path');

module.exports = {
  devtool: 'none', // SourceMap
  entry: './src/index.js',  // 入口文件
  output: {
    filename: 'bundle.js',  // 文件名
    path: path.resolve(__dirname, 'dist')  // 文件夹
  }
}
```

##### 参数

> ```bash
> [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
> ```

* 1、source-map

> 会生成map格式的文件，里面包含映射关系的代码

```bash
devtool: 'source-map',
```

* 2、inline-source-map

> 不会生成map格式的文件，包含映射关系的代码会放在打包后生成的代码中

```bash
devtool: 'inline-source-map',
```

* 3、inline-cheap-source-map

> cheap有两种作用：一是将错误只定位到行，不定位到列。二是映射业务代码，不映射loader和第三方库等。
>  会提升打包构建的速度

```bash
devtool: 'inline-cheap-source-map',
```

* 4、inline-cheap-module-source-map

> module会映射loader和第三方库

```bash
devtool: 'inline-cheap-module-source-map',
```

* 5、eval

> 用eval的方式生成映射关系代码，效率和性能最佳。但是当代码复杂时，提示信息可能不精确。

```bash
devtool: 'eval',
```

##### 推荐方式

* 开发环境

```bash
devtool: 'cheap-module-eval-source-map'|'eval-source-map',
```

* 生产环境

```bash
devtool: 'cheap-module-source-map'|'source-map',
```

### 生产环境优化

* 优化方向

> 优化打包构建速度
>
> > oneOf
>
> 优化代码运行性能  

#### oneOf

* 将rules中的处理单中类型文件loader放入oneOf数组中，在oneOf中的loader只会被匹配其中一个loader,
* 注意：当多个loader处理的是同一个类型的文件，只能有一个放在oneOf数组中
  * 列：eslint，babel都是处理js类型的文件
  * 建议：将需要提前出发的loader写在oneOf外面，后续的loader放在oneOf里

```js
module:{
  rules:[
    {
      test:/\.js$/,
      loader:'eslint-loader',
      ...
    }
    {
      oneOf:[
      	{
      		test:/\.css$/,
      		...
    		},
    		{
          test:/\.js$/,
          loader:'babel-loader',
          ...
        },
          ....
      ]
    }
  ]
}
```

























