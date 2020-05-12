//定义无依赖模块

define(function () {
    let name = "奇衡三";

    function getName() {
        return name;
    }

    return {
        getName
    };
})