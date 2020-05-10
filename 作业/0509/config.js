const argv = require('yargs').argv;

module.exports = {
    //根目录：设置或者cmd的路径
    root: argv.root || process.cwd(),

    //默认端口：8000
    port: argv.port || 8000,

    //强制缓存:开启
    forceCache: true,

    //强制缓存的时间:300s
    cacheTime: 300,

    //协商缓存:关闭
    negotiationCache: false,

    //自动打开浏览器:否
    autoOpen: false
}