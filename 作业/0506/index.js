const uTools = require("url");
const fs = require("fs");
require("http").createServer((res, rep) => {
    let method = res.method;
    let url = uTools.parse(res.url);
    // console.log(method.toLowerCase() == "get", url.pathname === "/");

    if (method.toLowerCase() == "get") {
        if (url.pathname === "/") {
            fs.readFile(__dirname + "/public/index.html", (error, data) => {
                rep.setHeader("content-type", "text/html; charset=UTF-8");
                rep.write(data);
                rep.end();
            })
        } else {
            if (/.css/g.test(url.pathname)) {
                rep.setHeader("content-type", "text/css; charset=UTF-8");
            }
            if (/.js/.test(url.pathname)) {
                rep.setHeader("content-type", "application/javascript; charset=UTF-8");
            }
            // rep.setHeader("content-type", "text/css; charset=UTF-8");
            let filePath = __dirname + "/public/" + url.pathname;
            if (fs.existsSync(filePath)) {
                fs.readFile(filePath, (error, data) => {
                    rep.write(data);
                    rep.end();
                })
            }
        }
    }
    // rep.statusCode(404);
    // rep.end();

}).listen(8000);