(function () {

    let obj = {
        a: "a",
        b: [1, 2, 3],
        c: {
            d() {
                console.log(this)
            },
            e: new Set([1, 2, 3]),
            f: new Map([
                [1, 2],
                [3, 4]
            ])
        },
    }


    function deepClone(data) {
        return clone(data);
    }

    function getDataType(data) {
        return Object.prototype.toString.call(data).slice(8, -1);
    }


    function cloneSet(data) {
        let result = new Set();
        for (const iterator of data) {
            result.add(clone(iterator));
        }
        return result;
    }

    function cloneMap(data) {
        let result = new Map();
        for (const iterator of data) {
            result.set(iterator[0], clone(iterator[1]))
        }
        return result;
    }

    function cloneArray(data) {
        let result = [];
        data.forEach(element => {
            result.push(clone(element))
        });
        return result;
    }

    function cloneObject(data) {
        let result = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                result[key] = clone(element, data)
            }
        }
        return result;
    }

    function clone(item, father) {
        switch (getDataType(item)) {
            case "Array":
                return cloneArray(item);

            case "Object":
                return cloneObject(item);

            case "Function":
                return item.bind(father);

            case "Set":
                return cloneSet(item);

            case "Map":
                return cloneMap(item);

            default:
                return item;
        }
    }
    let newObj = deepClone(obj);
    newObj.c.d();
})()