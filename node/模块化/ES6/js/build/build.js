(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.m1_fun1 = m1_fun1;
exports.m1_fun2 = m1_fun2;
//暴露模块 分别暴露

function m1_fun1() {
    console.log("m1_fun1");
}

function m1_fun2() {
    console.log("m1_fun2");
}

var arr = exports.arr = [1, 2, 3];
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//统一暴露

function fun1() {
    console.log("fun1");
}

function fun2() {
    console.log("fun1");
}

exports.fun1 = fun1;
exports.fun2 = fun2;
},{}],3:[function(require,module,exports){
'use strict';

var _m = require('./m1');

var _m2 = require('./m2');

//引入其他模块

/**
 * 语法： import xxxx form '路径'
 */

(0, _m.m1_fun1)();
(0, _m.m1_fun2)();
console.log(_m.arr);
(0, _m2.fun1)();
(0, _m2.fun2)();
},{"./m1":1,"./m2":2}]},{},[3]);
