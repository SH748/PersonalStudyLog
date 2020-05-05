(function () {
    class myArray {
        // static[Symbol.hasInstance](instance) {
        //     console.log("我被当做基准类进行检测:" + Object.prototype.toString.call(instance))
        //     // return Array.isArray(instance);
        //     return false;
        // }
    }
    console.log([] instanceof myArray)
})()