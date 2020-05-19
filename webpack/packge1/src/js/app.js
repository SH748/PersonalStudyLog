//包的引入
//通用方式
import * as m1 from "./m1";
//解构形式
import {
    sheshou,
    fuzhu
} from "./m2";
// import {default as m3} from "./m3";
// import * as m3 from "./m3";// m3.default
//简便方式
import m3 from "./m3";

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