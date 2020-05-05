(function () {

    let arr = [1, 2, 3, 4];
    let eArr = [5, 6];

    //push 向数组后添加
    // arr.push(4, 5)
    // console.table(arr);

    //push和数据结构
    // arr.push(...eArr);
    // console.table(arr);

    //pop 返回并删除数组的最后一个
    // let nArrLast = arr.pop();
    // console.table(arr);
    // console.log(nArrLast);

    //unshiift 从数组的前面添加，可以添加多个
    // arr.unshift(0);
    // console.table(arr);



    //shift  返回并删除数组的第一个元素
    // let nArrFirst = arr.shift();
    // console.table(arr);
    // console.log(nArrFirst);


    //fill 填充
    let nArr = new Array(5);

    //fill(XX) 以XX填充数组,如果数组内有数据，也会将所有数据都修改为XX
    nArr.fill(1)
    // console.log(nArr);

    //fill(XX,sN,eN) 从sN位置开始，到eN(不包括)位置结束的所有元素修改为XX sN>eN eN可以越界，但不会扩展数组长度
    // nArr.fill(2, 1, 6);
    // console.log(nArr);

    // 不会修改数组长度
    // nArr = new Array();
    // nArr.fill(5)
    // console.log(nArr)


})()