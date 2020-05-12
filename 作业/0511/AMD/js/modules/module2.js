//定义有依赖的参数

define([
    'module1',
    "jquery"
], function (module1, $) {

    let msg = "Hello"

    function sayHello() {

        alert(msg + module1.getName())
    }

    $("body").css("background", "lightblue")

    return {
        sayHello
    }
});