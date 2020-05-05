const fs = require("fs");

const stream = fs.createWriteStream("诗.txt", {
    flags: "a"
});
stream.write("我的小鱼你醒了，\r\n");
stream.write("还认识早晨吗？\r\n");
stream.write("昨夜你曾经说，\r\n");
stream.write("愿夜幕复永不开启。\r\n");
stream.write("你的香腮边轻轻滑落的，\r\n");
stream.write("是你的泪，还是我的泪？\r\n");
stream.write("初吻吻别的那个季节，\r\n");
stream.write("不是已经哭过了吗？\r\n");
stream.write("你慌乱的心跳制。\r\n");
stream.write("温柔的体香里，\r\n");
stream.write("那一缕长发飘飘。\r\n");
stream.close();

// const stream = fs.createWriteStream("../node.md", {
//     flags: "a"
// });
// stream.write("# nodejs \r\n");
// stream.write("## node命令 \r\n");
// stream.close();