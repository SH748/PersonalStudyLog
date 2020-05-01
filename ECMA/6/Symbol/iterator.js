(function () {
    let arr = [1, 2, 3, 4, 5];
    let iterator = arr[Symbol.iterator];

    // console.log(iterator.next())
    console.log(iterator)
    let obj = iterator.call(arr);
    console.log(obj.next())
})()