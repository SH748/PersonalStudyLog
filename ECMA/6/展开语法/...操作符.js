(function () {
    // var arr = [1, 2, 3]
    console.dir(Object.prototype)

    let obj = {
        name: "张三",
        age: 10,
        hobbies: ["sing", "drum", "basketball"]
    }
    let arr = [...obj.hobbies]
    console.log(arr)

})()