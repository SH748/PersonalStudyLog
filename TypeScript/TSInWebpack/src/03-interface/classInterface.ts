; (() => {
    interface ICar {
        price: number
        Brand: string
        strtUp(key: string): void
        whistle(): string
    }

    class Ford implements ICar {
        price = 120000.0
        Brand = "福特"
        strtUp(key) {
            if (key) {
                console.log("hong hong~ 老福特启动了")
            }
        }
        whistle() {
            return "bibibi~"
        }
    }
    const c = new Ford()
    console.log(c);
    c.strtUp("key")
    console.log(c.whistle());

    /**
   * 接口继承接口
   */
    interface Animal {
        action: () => void
    }
    interface Human extends Animal {
        name: string
        age: number
        run: () => void
    }
    class Chiness implements Human {
        name: string
        age: number
        constructor()
        constructor(name: string, age: number)

        constructor(name?: string, age?: number) {
            if (name !== "" && age !== null) {
                this.name = name
                this.age = age
            }
        }

        run() {
            console.log("飞奔在复兴大道的中国人");
        }
        action() {
            console.log("动一动")
        }
    }

    const liuxiang: Animal = new Chiness("刘翔", 30)
    console.log(liuxiang);


})()