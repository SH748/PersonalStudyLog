const http = require("http");
const qs = require("querystring");
const url = require("url");
const server = http.createServer(function (request, response) {
    let obj = qs.parse(request.url);
    let uo = url.urlTools;
    console.table(url.parse(request.url))
    let sum = 0;
    for (let i in obj) {
        sum += parseFloat(obj[i]);
    }
    console.table(obj);

    response.end("Sum:" + sum);
})

server.listen(8000, function () {
    console.log("服务启动，监听80端口.....");
})