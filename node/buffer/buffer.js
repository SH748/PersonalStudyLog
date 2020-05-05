//创建一个buffer
//alloc 会对空间进行初始化
let b1 = Buffer.alloc(20);
console.log(b1);

//allocUnsafe 不会对空间进行初始化
let b2 = Buffer.allocUnsafe(20);
// console.log(b2)

//from
let b3 = Buffer.from("I Love You");
console.log(b3);
console.log(b3[0]);
console.log(b3.toString());

let b4 = Buffer(10);
b4[0] = 3000;
// console.log(String.fromCharCode(184));