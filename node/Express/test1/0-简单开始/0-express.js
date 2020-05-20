const express = require("express");

const app = express();

app.get("/", (res, rep) => {

    // rep.end("Hello Express");
    rep.send("<h2>封装好的send会自动设置响应头</h2>")
})
app.listen(8000, () => {
    console.log(`express已启动 \r\n端口:8000`);
})