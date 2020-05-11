const express = require("express");

const app = express();

const fs = require("fs");

const root = __dirname + "/public";

app.get("/", (res, rep) => {
    let content = fs.readFileSync(root + "/index.html");
    rep.send(content.toString());
})

app.get("/getMessage", (res, rep) => {

})

app.listen(8000)