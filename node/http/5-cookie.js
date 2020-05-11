const uTools = require("url");
require("http").createServer((res, rep) => {

    let method = res.method;
    let url = uTools.parse(res.url, true);
    if (method.toLowerCase() == "get") {
        rep.setHeader("content-type", "text/html;charset=utf-8");
        if (url.pathname === "/set-cookie") {
            //设置cookie
            // rep.setHeader("Set-Cookie", "path=/,name=cookie_test");
            //设置cookie时效性
            rep.setHeader("Set-Cookie", "path=/,name=cookie_test2；max-age:60");
            rep.end("set cookie")
            return;
        }
        if (url.pathname === "/get-cookie") {
            console.log(res.headers.cookie);
            rep.end("get cookie");
            return;
        }
        rep.statusCode = 404;
        rep.end("<h1>404</h1>")
    }

}).listen(8000);