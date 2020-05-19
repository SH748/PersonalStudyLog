//引入path模块
const path = require("path");
/**
 *用来解决output中path的绝对路径的分割符差异性 \  / 
 */

module.exports = {
    //入口,路径要精确，不能出错
    entry: "./src/js/app.js",

    //文件打包后的配置
    output: {
        //配置打包文件的根目录
        // path: __dirname + "/build", //需要绝对路径
        path: path.resolve(__dirname, "build"),

        //配置出口文件相对于path的相对路径，filename全小写
        filename: "js/app.js"
    },
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
            }
        ]
    },
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