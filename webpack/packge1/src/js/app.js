//包的引入
//通用方式
import * as m1 from "./m1";
import '@babel/polyfill';
//解构形式
import {
    sheshou,
    fuzhu
} from "./m2";
// import {default as m3} from "./m3";
// import * as m3 from "./m3";// m3.default
//简便方式
import m3 from "./m3";

import {
    seachTianqi
} from "./seachtianqi";

// let data = require("../json/data.json")

//导入json文件
import data from "../json/data.json";

import "../css/app.less";
import "../css/home.less";

//输出结果
console.log(m1);
console.log(sheshou, fuzhu);
console.log(m3);
console.log(data);
seachTianqi();

function getWeather(url) {
    return new Promise((r1, r2) => {
        let x = new XMLHttpRequest;
        x.onreadystatechange = function () {
            if (x.readyState == 4) {
                if (x.status >= 200 && x.status < 300) {
                    r1(x.responseText)
                } else {
                    r2(x.status)
                }
            }
        }
        x.open("get", url);
        x.send();
    })
}
async function fun() {
    try {
        let result = await getWeather("https://www.tianqiapi.com/api/?version=v1&appid=23941491&appsecret=TXoD5e8P");
        let data = JSON.parse(result);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}
fun();