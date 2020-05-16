let p = new Promise((resolve, reject) => {
    resolve(1); //fulfilled
    // reject(1); //rejected
    // throw new Error("我要报错") //rejected
})

let result = p.then(value => {
    console.log(value);
    return new Promise((resolve, reject) => {
        // resolve(1); //fulfilled
        // reject(1); //rejected
        throw new Error("我要报错") //rejected
    })
}, reason => {
    console.log(reason);
}).then(value => {
    console.log(value);
}).then().catch(error => {
    console.log("catch", error); //异常被传递到此处才得以处理
})