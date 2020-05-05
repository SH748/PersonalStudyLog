const http = require("http");

const server = http.createServer(function (request, response) {
    response.end("hello node server");
})

server.listen(8000, function () {
    console.log("服务启动，监听80端口.....");
})