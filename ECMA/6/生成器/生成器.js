(function () {
    function* gen(arg) {
        console.log(arg)
        let stop2 = yield 2;
        console.log("stop2", stop2)
        let stop3 = yield 3;
        console.log("stop2", stop3)
        let stop4 = yield 4;
        console.log("stop2", stop4)
        let stop5 = yield 5;
        console.log("stop2", stop5)
    }

    let iterator = gen("开始执行");
    let r1 = iterator.next();
    console.log(r1)
    let r2 = iterator.next("离开stop2")
    console.log(r2)
})()