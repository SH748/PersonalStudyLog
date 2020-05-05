const fs = require("fs");

function mkdir(path) {
    let bo = fs.existsSync(`${__dirname }/test内容/${filesName}`);
    if (bo) return "文件夹已存在";
    fs.mkdir(path, err => {
        if (err) throw err;
        console.log("文件" + path + "创建成功 success");
    })
};
mkdir(`${__dirname }/test内容/images`);
mkdir(`${__dirname }/test内容/css`);
mkdir(`${__dirname }/test内容/js`);

function writeFile(path) {  
    let bo = fs.existsSync(path);
    if (!bo) {
        fs.writeFile(path, "123", function (err) {
            if (err) throw err;
            console.log("文件" + path + "创建成功 success");
        })
    }
}
writeFile(`${__dirname }/test内容/images/logo.png`);
writeFile(`${__dirname }/test内容/css/css.css`);
writeFile(`${__dirname }/test内容/index.html`);