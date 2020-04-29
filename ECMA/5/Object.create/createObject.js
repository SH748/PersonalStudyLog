(function () {
    var pro = {
        type: 'car'
    }
    let falali = Object.create(pro, {
        brand: {
            get: function () {
                console.log(this == falali)
                return this.v;
            },
            set: function (v) {
                // console.log(this == falali)
                // console.log(brand)
                this.v = v;
            }
        }
    })
    falali.brand = "法拉利";
    console.log(falali);


    var stu = [{
        sc: 20
    }, {
        sc: 60
    }];
    Object.defineProperties(stu, {
        totao: {
            get: function () {
                this.stu.forEach(element => {

                });
            }
        }
    })
    stu.totao;


})()