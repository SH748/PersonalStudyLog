//定义没有依赖的模块
define(function (require, exports, module) {
    let name = "m1";

    function getName() {
        return name;
    }
    //暴露模块
    exports.module = {
        getName
    };

});