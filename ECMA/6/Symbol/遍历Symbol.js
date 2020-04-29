(function () {
    let school = {
        name: "namea",
        [Symbol()]: "你好",
        [Symbol()]: "buhao"
    }
    for (let item in school) {
        console.log(school[item])
    }

    let keys = Reflect.ownKeys(school);
    console.log("keys:", keys)
    for (let item in keys) {
        console.log(school[keys[item]])
    }

    let keys2 = Object.getOwnPropertySymbols(school);
    console.log(keys2)
})()