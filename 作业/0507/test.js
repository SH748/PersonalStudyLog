const ejs = require("ejs");
const fs = require("fs");
const arr = [{
        name: "刘亦菲",
        age: 18,
    },
    {
        name: "杨超越",
        age: 18,
    },
    {
        name: "斋藤飞鸟",
        age: 18,
    },
    {
        name: "斋藤飞鸟",
        age: 18,
    }
];
fs.readFile(__dirname + "/public/index.html", (error, data) => {
    let html = ejs.render(data.toString(), {
        arr: arr
    });
    console.log(html);

})