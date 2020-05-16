const express = require("express");

const app = express();

const uTools = require("url");
const fs = require("fs");

const root = __dirname + "/public";

app.get("/", (res, rep) => {
    let content = fs.readFileSync(root + "/index.html");
    rep.send(content.toString());
})

app.get("/getMessage", (res, rep) => {
    rep.send("我们的目标是:没有蛀牙.")
})

app.post("/getMessage", (res, rep) => {
    let url = uTools.parse(res.url, true);
    console.log(url.query)
    if (url.query["phone"]) {
        rep.send("Success")
    } else {
        rep.send("error")
    }
})

app.listen(8000)