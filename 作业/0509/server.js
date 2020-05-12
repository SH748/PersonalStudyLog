/**
 * 业务逻辑文件
 */

const http = require("http");
const fs = require("fs");
const uTools = require("url");
const ejs = require("ejs");
const zlib = require("zlib");
const etag = require("etag");
const opn = require("better-opn");
const defaultConfig = require("./config.js"); //默认配置文件

const dirTemplate = __dirname + "/template/dirTemplate.htm"

class Server {

    constructor(config) {
        /**
         *  config:实例化服务时传入的参数
         */
        Object.assign(defaultConfig, config); //将参数合并
    }

    /**
     * 404时调用
     * @param {请求对象} res 
     * @param {响应对象} rep 
     */
    notFind(res, rep) { //废弃
        rep.setHeader('content-type', 'text/html;charset=utf-8');
        let content = fs.readFileSync(__dirname + "/template/404.htm");
        rep.end(content.toString());
        return;
    }


    /**
     * 错误时调用
     * @param {*} errorcode 
     * @param {*} errorMessage 
     * @param {*} res 
     * @param {*} rep 
     */
    error(errorcode, errorMessage, res, rep) {
        rep.setHeader('content-type', 'text/html;charset=utf-8');
        ejs.renderFile(__dirname + "/template/error.htm", {
            errorcode,
            errorMessage
        }, (err, data) => {

            rep.end(data.toString());
        });
        return;
    }

    negotiationCache(stats, res, rep) {
        // 获取当前资源的 etag 值
        let tag = etag(stats);
        //获取文件的最后修改时间
        let lastModified = stats.mtime.toUTCString();
        //与请求头中的内容进行比对  if-none-match  if-modified-since
        if (res.headers['if-none-match'] === tag && res.headers['if-modified-since'] === lastModified) {
            //返回 304 
            rep.statusCode = 304;
            //设置响应体
            rep.end('');
            return;
        }
    }

    /**
     * 压缩
     * @param {string} content  压缩内容
     * @param {string} type 选择压缩类型,有效值:gzip,deflate
     */
    compression(content, type) {
        let result;
        if (type === "gzip") {
            result = zlib.gzipSync(content);
        } else if (type === "deflate") {
            result = zlib.deflateSync(data);
        }
        return result; //不要toString()!!!
    }

    z(content, res, rep) {
        //获取请求头信息
        let encodings = res.headers['accept-encoding'];
        //检测是否支持 gzip 压缩
        if (encodings.indexOf('gzip') !== -1) {
            //设置响应头
            rep.setHeader('Content-Encoding', 'gzip');
            //设置响应体
            rep.write(this.compression(content, "gzip"));
            return;
        } else if (encodings.indexOf('deflate') !== -1) {
            //设置响应头
            rep.setHeader('Content-Encoding', 'deflate');
            //设置响应体
            rep.write(this.compression(content, "deflate"));
            return;
        }
    }
    main() {
        http.createServer((res, rep) => {

            let url = uTools.parse(res.url, true);
            // 请求路径
            let pathName = decodeURI(url.pathname);
            // 根目录
            let root = defaultConfig.root;

            // 绝对路径
            let realPath = root + pathName;
            fs.stat(realPath, (err, stats) => { //检查文件是否存在
                //错误处理
                if (err) {
                    console.log(err);
                    this.error(404, "Resource Not Found", res, rep);
                    return;
                }

                //协商缓存
                if (defaultConfig.negotiationCache) {
                    this.negotiationCache(stats, res, rep);
                    return;
                }

                //检测目标是否为文件夹

                if (stats.isDirectory()) {
                    fs.readdir(realPath, (err, files) => {
                        //  files
                        let p = pathName.split("/");
                        console.log(p)
                        ejs.renderFile(dirTemplate, {
                            p,
                            pathName,
                            files
                        }, (err, str) => {
                            if (err) {
                                this.error(500, "Server Internal Error", res, rep);
                                return;
                            }
                            rep.write(str);
                            rep.end();
                        })
                    })
                } else {
                    //设置强制缓存
                    if (defaultConfig.forceCache) {
                        rep.setHeader('cache-control', 'max-age=' + defaultConfig.cacheTime);
                    }




                    //路径点击文件，直接查看
                    if (url.query.type === "tagA") {
                        if (fs.existsSync(realPath)) {
                            let content = fs.readFileSync(realPath);
                            rep.statusCode = 200;
                            this.z(content.toString(), res, rep);
                            rep.end();
                        } else {
                            this.notFind(res, rep);
                            return;
                        }
                    }
                }


            })

        }).listen(defaultConfig.port, () => {
            console.log(`服务启动\r\n使用端口:${defaultConfig.port}\r\n停止请按:Ctrl+C`);
            if (defaultConfig.autoOpen) opn(`http://127.0.0.1:${defaultConfig.port}`);
        })
    }

}

module.exports = Server;