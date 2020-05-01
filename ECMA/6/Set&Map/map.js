(function () {

    let m = new Map();

    m.set("key", "value")
    let key = {
        map: "map"
    }

    m.set(key, "set")

    m.get(key);

    console.log(m);

    m.delete("key")

    console.log(m)
})()