(function () {
    //基本
    let fn1 = (a, b, c) => {
        return a + b + c;
    }

    //单参
    let fn2 = a => {
        return a;
    }

    //单语句 函数内只有一条执行语句时，可以不写大括号，并且将语句的结果值返回，因此，单语句简写时不能有return关键字
    let fn3 = (a, b) => a + b;

    //无参
    let fn4 = () => "无参时必须要有括号";
})()