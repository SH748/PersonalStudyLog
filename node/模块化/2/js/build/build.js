(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _module = require("./module1");

var btn = document.getElementById("choujiang");
(0, _module.choujiang)(btn);
},{"./module1":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.choujiang = choujiang;
function choujiang(dom) {
    dom.onclick = function () {
        var result = percent(20);
        alert(result ? "中奖了" : "没中奖");
    };
}

function percent(num) {
    //获取一个 从 1-100 的随机数
    var n = rand(1, 100);
    //判断
    if (n <= num) {
        return true;
    } else {
        return false;
    }
}

function rand(m, n) {
    return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
}
},{}]},{},[1]);
