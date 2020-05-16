let p = new Promise((resolve, reject) => {
    resolve(1); //fulfilled
})

let result = p.then(value => {
    console.log(value);
    return new Promise((resolve, reject) => {
        throw new Error("我要报错") //rejected
    })
}, reason => {
    console.log(reason);
}).then(value => {
    console.log(value);
    return new Promise(); //终止链式调用中的then的继续调用，但是catch，finally会继续调用
}).then(
    value => {
        console.log('222');
    }
).catch(error => {
    console.log("33");
    console.log("catch", error); //异常被传递到此处才得以处理
}).then(value => {
    console.log('444');

}).finally(function () {
    console.log(arguments); //空

})