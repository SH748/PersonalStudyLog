const uTools = require("url");
const fs = require("fs");
const ejs = require("ejs");
const arr = [{
        name: "刘亦菲",
        age: 18,
    },
    {
        name: "杨超越",
        age: 18,
    },
    {
        name: "斋藤飞鸟",
        age: 18,
    },
    {
        name: "斋藤飞鸟",
        age: 18,
    }
];
require("http").createServer((res, rep) => {
    let method = res.method;
    let url = uTools.parse(res.url);
    // console.log(method.toLowerCase() == "get", url.pathname === "/");/*  */

    /**
     * 思路：1.浏览器访问域名，返回根目录下的index.html
     * 2.浏览器解析index.html后，向node请求CSS文件和js文件
     * 3.node响应CSS文件和js文件请求，将对应资源响应给浏览器请求
     */
    if (method.toLowerCase() == "get") { //资源请求都是get类型
        if (url.pathname === "/") { //访问主页（例如：www.baidu.com）时，pathName是"/",返回index.html文件
            fs.readFile(__dirname + "/public/index.html", (error, data) => {
                /*
                文件读取，不做文件存在验证，如果inde.html都没了，还写个鸡儿
                */
                rep.setHeader("content-type", "text/html; charset=UTF-8"); //设置响应类型
                let html = ejs.render(data.toString(), {
                    arr: arr
                });
                rep.write(html);
                rep.end();
            })
        } else {
            /**
             * 根据不同的请求类型设置响应类型
             */
            if (/.css/g.test(url.pathname)) { //css
                rep.setHeader("content-type", "text/css; charset=UTF-8");
            }
            if (/.js/.test(url.pathname)) { //js
                rep.setHeader("content-type", "application/javascript; charset=UTF-8");
            }
            // rep.setHeader("content-type", "text/css; charset=UTF-8");
            let filePath = __dirname + "/public/" + url.pathname; //拼接请求文件路径
            if (fs.existsSync(filePath)) { //检测目标文件是否存在，不存在返回404
                fs.readFile(filePath, (error, data) => {
                    //读取，返回
                    rep.write(data);
                    rep.end();
                })
            } else {
                rep.statusCode = 404;
                rep.end();
            }
        }
    }

}).listen(8000);