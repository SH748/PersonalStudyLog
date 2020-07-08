module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target:"http://182.92.128.115",//请求地址
                changeOrigin:true, //是否跨域
                pathRewite:{
                    '^/api':'' //重置为空
                }
            }
        }
    }
}