let str = "acadnca";

// ^ $

//检测字符串以什么开始
console.log(/^\d/.test(str));
console.log(/^\w/.test(str));

//检测字符串以什么结束
console.log(/\d$/.test(str));
console.log(/\w$/.test(str));