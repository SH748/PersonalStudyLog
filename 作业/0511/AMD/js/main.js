(function () {

    requirejs.config({
        baseUrl: "js/", //基本路径  出发点在根目录

        paths: {
            module1: "./modules/module1", //不要加后缀名，requirejs会自动添加后缀 ./代表baseUrl
            module2: "./modules/module2",
            jquery: "./libs/jquery-1.10.1", //jQ支持amd规范，但使用AMD规范导入就Q对象是jQ对象名必须是小写:jq
        },

        shim: {
            //如果第三方库不支持amd规范时,需要额外配置时，配置内容写在这里


        }
    })

    requirejs(["module2"], function (m2) {
        m2.sayHello();
    })
})()