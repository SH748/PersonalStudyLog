//引入path模块
const path = require("path");
/**
 *用来解决output中path的绝对路径的分割符差异性 \  / 
 */

//引入html打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口,路径要精确，不能出错
    // entry: "./src/js/app.js",
    //index.html 不能自动刷新的解决方法
    //新增一个入口，解决开启热模块替换后首页无法刷新的问题
    entry: {
        main: ['./src/js/app.js', './src/index.html']
    },

    //文件打包后的配置
    output: {
        //配置打包文件的根目录
        // path: __dirname + "/build", //需要绝对路径
        path: path.resolve(__dirname, "build"),

        //配置出口文件相对于path的相对路径，filename全小写
        filename: "js/app.js",
        //1. 添加 devServer 服务后需要调整输出的路径
        publicPath: '/'
    },

    //3. 增加 devServer 配置
    devServer: {
        open: true, // 自动打开浏览器
        compress: true, // 启动gzip压缩
        port: 8000, // 端口号
        hot: true // 开启热模块替换功能
    },

    devtool: 'cheap-module-eval-source-map', //设置 devtool 策略
    //配置模式，是mode 不是 module
    mode: "development", //生产环境
    // mode: "production", //发布环境

    //loader配置
    module: {
        //配置所有loader
        rules: [
            //less loader的配置
            {
                test: /\.less$/, // 检查文件是否以.less结尾（检查是否是less文件）
                use: [ // 数组中loader执行是从下到上，从右到左顺序执行
                    'style-loader', // 创建style标签，添加上js中的css代码
                    'css-loader', // 将css以commonjs方式整合到js文件中
                    'less-loader' // 将less文件解析成css文件
                ]
            },
            //eslint loader配置
            {
                test: /\.js$/, //只检测js文件
                exclude: /node_modules/, //排除node_modules文件夹
                enforce: "pre", //提前加载使用
                use: {
                    loader: "eslint-loader" //使用eslint-loader解析
                }
            },
            //babel loader配置
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // 8kb以下的图片会base64处理
                        outputPath: 'images', // 文件本地输出路径
                        name: '[hash:8].[ext]', // 修改文件名称和后缀 
                    }
                }
            },
            //图片处理
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },

            //font 字体处理
            {
                test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/, // 处理字体文件
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                    name: '[hash:8].[ext]'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // 设置要编译的 HTML 源文件路径
        })
    ]
}

/** entry 路径错误
 * 
Insufficient number of arguments or no entry found.
Alternatively, run 'webpack(-cli) --help' for usage info.

Hash: 2b4b2876bd773287bd21
Version: webpack 4.43.0
Time: 47ms
Built at: 2020-05-19 9:48:23

ERROR in Entry module not found: Error: Can't resolve '../src/js/app.js
 */