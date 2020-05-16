const express = require("express");
const app = express();

app.listen(8000);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/promise.ajax.html");
})
app.get("/1", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.sendFile(__dirname + "/06_2promise封装ajax请求.html");
})