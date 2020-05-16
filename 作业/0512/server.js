const express = require("express");

const app = express();

const fs = require("fs");
const uTools = require("url");
const root = __dirname + "/public";
let notUse = ["Tom", "Tony", "Any"]
app.get("/registered", (res, rep) => {

    let content = fs.readFileSync(root + "/registered.html");
    rep.setHeader("content-type", "text/html,charset=utf-8");
    rep.end(content.toString());

})

app.get("/*.jpg", (res, rep) => {
    rep.sendFile(root + uTools.parse(res.url).pathname);
})

app.post("/checkName", (res, rep) => {
    let url = uTools.parse(res.url, true);
    //接收请求体数据
    let body = '';
    res.on('data', chunk => {
        body += chunk;
    })
    res.on('end', () => {
        body = JSON.parse(body);

        if (body["inputName"]) {
            if (notUse.indexOf(body["inputName"]) == -1) {
                rep.statusCode = 200;
                rep.send(JSON.stringify({
                    status: 200,
                    result: "success",
                    bo: true
                }))
            } else {
                rep.statusCode = 200;
                rep.send(JSON.stringify({
                    status: 200,
                    result: "fail",
                    bo: false
                }))
            }
        }
    })

})

app.listen(8000);