define(function (require, exports, module) {

    let msg = "md4";
    //让4依赖2,3

    //同步引入
    let m2 = require("./module2");
    m2();

    //异步引入

    require.async("./module3", function (m3) {
        m3.module3.fun();
    })

    function fun2() {
        console.log(msg);
    }

    exports.fun2 = fun2
});