let fs = require("fs");


//写入
// fs.writeFile('demo.txt', "fs第一次写入", function (err) {
//     console.log(err)
// })


//向后拼接 
fs.writeFile('demo.txt', "fs再次写入", {
    flag: 'a'
}, function (err) {
    console.log(err)
})