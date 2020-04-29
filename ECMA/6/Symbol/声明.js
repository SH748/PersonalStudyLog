(function () {

    //声明一个Symbol
    let sy1 = Symbol();

    //声明Symbol时添加描述
    let sy2 = Symbol("唯一值描述");
    //通过 对象.description 的形式获取Symbol的描述
    console.log(sy2.description)

    //通过Symbol.for(描述)的形式声明
    let sy3 = Symbol.for("lishi");
    let sy4 = Symbol.for("lishi");
    //通过for声明的Symbol，如果声明时for中的描述一致，则第二次声明时不会创建一个新的变量，而是引用同一个Symbol
    console.log(sy3 === sy4) //true

    //不通过for，即使描述值唯一，也不相等，证明不是同一个
    let sy5 = Symbol("唯一值描述");
    console.log(sy2 === sy5); //false


})()