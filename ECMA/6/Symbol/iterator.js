(function () {
    //在自定义类型中实现Symbol的iterator就可以使用for-of遍历该类型

    // iterator使用
    let arr = [1, 2, 3, 4, 5];

    /* 
        1.obj[Symbol.iterator]() 方法返回一个iterator对象，对象中存在方法：next()
        2.obj[Symbol.iterator]是一个Function对象，需立即调用，如果将其赋值给某变量，需要指定this对象为obj，否则会报错
        3.使用iterator.next()遍历对象，返回{value,done}对象，其中value是当前遍历出来的值，done代表是否遍历完成,是一个boolean值
            注意：遍历到对象最后一个元素时，done仍然为false，只有超出变量对象可遍历范围时，done才为true
     */
    // let iterator = arr[Symbol.iterator];
    // let obj = iterator.call(arr);
    // console.log(obj.next())

    let iterator = arr = arr[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());


    //自定义类型实现iterator

    let obj = {
        "a": "a",
        "b": "b"
    }
    // for (const iterator of obj) {
    //     console.log(iterator)
    // } //为实现Symbol.iterator时报错： obj is not iterable

    obj[Symbol.iterator] = (() => {
        return {
            get: () => {
                //需要return 一个{value:XXX,done:XXX} 的对象
                return {}
            }
        }
    }).bind(obj)
    console.table(obj)
    obj[Symbol.iterator]()

})()