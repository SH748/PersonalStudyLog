(function () {
    const data = [{
            name: "刘亦菲",
            age: 18,
        },
        {
            name: "杨超越",
            age: 18,
        },
        {
            name: "斋藤飞鸟",
            age: 18,
        },
        {
            name: "斋藤飞鸟",
            age: 18,
        }
    ];
    dataInit();

    function dataInit() {
        let table = document.querySelector(".tableBox table");
        data.forEach(element => {
            let node = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerText = element.name;
            let td2 = document.createElement("td");
            td2.innerText = element.age;
            node.appendChild(td1);
            node.appendChild(td2);
            table.append(node);
        });
    }

    changeColor();

    function changeColor() {
        let table = document.querySelectorAll(".tableBox table tr:not(.title)");
        table.forEach((ele, ind) => {
            if (ind % 2 != 0) {
                ele.style = "background-color:#f0f0f0";
            }
        })
    }
})();