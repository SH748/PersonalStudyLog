(function () {
    //ES5时，创建对象

    // function Phone(brand, color) {
    //     this.brand = brand;
    //     this.color = color;
    // }

    // Phone.prototype.call = function (callWho) {
    //     console.log(`你好，${callWho}`)
    // }

    //使用 class 声明

    class Phone {
        constructor(brand, color) {
            this.brand = brand;
            this.color = color;
        }

        call(callWho) {
            console.log(`你好，${callWho}`)
        }
    }

    let chuizi = new Phone("Smartisan", "黑色");
    chuizi.call("你大爷")
})()