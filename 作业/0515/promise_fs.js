const fs = require("fs");

let p = new Promise((resolve, reject) => {
    fs.readFile(__dirname + "/trycatch.js", (err, data) => {
        if (err) reject(err);
        resolve(data);
    })
})
p.then(
    value => {
        console.log(value.toString());
        return new Promise((resolve, reject) => {
            fs.readFile(__dirname + "/promise基本使用.html", (err, data) => {
                if (err) reject(err);
                resolve(value + "\r\n" + data);
            })
        })
    },
    reason => {
        console.log(reason.message);
        console.log('abc');
    }
).then(value => {
        console.log(value.toString());

    },
    reason => {
        console.log(reason.message);
        console.log('abc');
    })