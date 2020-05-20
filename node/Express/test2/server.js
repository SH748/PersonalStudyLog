const express = require("express");
const app = express();
const fs = require("fs");
const root = __dirname + "/public";

app.get("/", function (res, req) {
    req.header("contectType", "text/html")
    let content = fs.readFileSync(root + "/index.html");
    req.end(content.toString());
})
app.get("/new", (res, req) => {
    let content = fs.readFileSync(root + "/json/data.json");
    req.send(JSON.stringify(content.toString()));
})

app.listen(8000);