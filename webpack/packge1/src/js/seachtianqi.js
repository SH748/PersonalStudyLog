export function seachTianqi() {
    let btn = document.querySelector("button");
    let div = document.querySelector("#box");
    let city = document.querySelector("input[name='city']")
    btn.onclick = function () {
        city = city.value || "深圳";
        //1.new 对象
        let xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let result = JSON.parse(xhr.responseText); //将返回的结果转换为JSON
                    console.log(result) //打印JSON
                    let title = document.createElement("h1"); //创建H1
                    title.innerText = result.city; //给H1写入内容，内容为结果中的city
                    div.appendChild(title);
                    let wBox = document.createElement("div");
                    result.data.forEach(element => {
                        let tBox = document.createElement("div");
                        tBox.innerText = `时间：${element.day} 天气：${element.wea} `;
                        wBox.appendChild(tBox);
                    });
                    div.appendChild(wBox)
                }
            }
        }
        xhr.open("get", `https://www.tianqiapi.com/api/?version=v1&city=${city}&appid=23941491&appsecret=TXoD5e8P`);
        xhr.send();
    }
}