const fs = require('fs');

// fs.readFile("诗.txt", function (err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());

// })

//读取流
const readStream = fs.createReadStream("./诗.txt");
// readStream.on('data', function (chunk) {
//     console.log(chunk.toString());
// })
readStream.on('data', function (chunk) {
    console.log(chunk.toString());
});
console.log(222);