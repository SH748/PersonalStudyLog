let p = new Promise((resolve, reject) => {
    reject("reject");
})

p.catch(reason => {
    console.log(reason); //reject用来处理promise中的错误
})

let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.reject(3);
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(4);
    }, 1000);
});
let result1 = Promise.all([p1, p2, p4]); //错一个，全盘皆错

//8. Promise.race  赛跑
let result2 = Promise.race([p4, p2, p1, p3]); //谁先结果就是谁
console.log(result1, result2);