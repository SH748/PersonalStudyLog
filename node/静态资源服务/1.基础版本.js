const fs = require("fs");
const uTools = require("url");
const ejs = require("ejs");
const zlib = require("zlib");
const dirTemplate = __dirname + "/dirTemplate.html";

function z(content, res, rep) {
    //压缩  gzip  deflate  br
    //获取请求头信息 deflate, gzip,  br
    let encodings = res.headers['accept-encoding'];
    //检测支持的类型中是否包含 gzip 压缩
    if (encodings.indexOf('gzip') !== -1) {
        //设置响应头
        rep.setHeader('Content-Encoding', 'gzip');
        //设置响应体
        zlib.gzip(data, function (err, data) {});
        return;
    } else if (encodings.indexOf('deflate') !== -1) {
        //设置响应头
        rep.setHeader('Content-Encoding', 'deflate');
        //设置响应体 
        zlib.deflate(data, function (err, data) {});
        return;
    }
}

require("http").createServer((res, rep) => {
    let url = uTools.parse(res.url, true);
    let pathName = url.pathname;
    let root = __dirname + "/public";
    let fileUrl = root + pathName;
    fs.stat(fileUrl, (err, stats) => {
        if (err) {
            rep.statusCode = 404;
            rep.end("<h1>404</h1>");
            return;
        }



        if (stats.isDirectory()) {
            fs.readdir(fileUrl, (err, files) => {
                //  files
                let p = pathName.split("/");
                console.log(p)
                ejs.renderFile(dirTemplate, {
                    p,
                    pathName,
                    files
                }, (err, str) => {
                    rep.write(str);
                    rep.end();
                })
            })
        } else {
            if (url.query.type === "tagA") {
                if (fs.existsSync(fileUrl)) {
                    let content = fs.readFileSync(fileUrl);
                    z(content, res, rep);
                    rep.statusCode = 200;
                    rep.write(content);
                } else {
                    rep.statusCode = 404;
                    rep.write("<h1>404</h1>");
                }
                rep.end();
            }
        }

    })

}).listen(8000)