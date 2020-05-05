const http = require("http");

const uTools = require("url");

const server = http.createServer(function (res, rep) {

    console.dir(res.url);
    let url = uTools.parse(res.url, true);
    console.dir(url.query);
    rep.end(JSON.stringify(url));
})

server.listen(8000)