const fs = require("fs");
const util = require("util");
const pReadFile = util.promisify(fs.readFile);

async function fun() {
    try {
        let first = await pReadFile(__dirname + "/async.html");
        let second = await pReadFile(__dirname + "/await.html");

        console.log(first.toString());
        console.log(second.toString());
    } catch (error) {
        console.log(error);
    }
}
fun();