(function () {
    class Phone {
        constructor(brand, color) {
            this.brand = brand;
            this.color = color;
        }
        message(some) {
            console.log(`我可以给${some}发短信`)
        }
    }

    class SmartPhone extends Phone {
        constructor(brand, color, screen) {
            super(brand, color);
            this.screen = screen;
        };

        playGame() {
            console.log("适度游戏，请勿沉迷")
        }
    }

    let v20 = new SmartPhone("荣耀", "黑色", "5.0");
    v20.playGame();
})()