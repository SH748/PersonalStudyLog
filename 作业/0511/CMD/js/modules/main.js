define(function (require) {
    let module = require("./module1");
    console.log(module.module.getName())

    let m4 = require("./module4");
    m4.fun2();

    /**
     * m1
     * m2
     * m4
     * m3
     * m4为异步操作，需要等同步操作结束后才会执行，因此m3在m4前面
     */
});