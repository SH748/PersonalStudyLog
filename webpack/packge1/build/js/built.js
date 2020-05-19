/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _m1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m1 */ \"./src/js/m1.js\");\n/* harmony import */ var _m2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m2 */ \"./src/js/m2.js\");\n/* harmony import */ var _m3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./m3 */ \"./src/js/m3.js\");\n//包的引入\r\n//通用方式\r\n\r\n//解构形式\r\n\r\n// import {default as m3} from \"./m3\";\r\n// import * as m3 from \"./m3\";// m3.default\r\n//简便方式\r\n\r\n\r\n//输出结果\r\nconsole.log(_m1__WEBPACK_IMPORTED_MODULE_0__);\r\nconsole.log(_m2__WEBPACK_IMPORTED_MODULE_1__[\"sheshou\"], _m2__WEBPACK_IMPORTED_MODULE_1__[\"fuzhu\"]);\r\nconsole.log(_m3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/m1.js":
/*!**********************!*\
  !*** ./src/js/m1.js ***!
  \**********************/
/*! exports provided: name, position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"position\", function() { return position; });\n//分别暴露\r\nlet name = \"盲僧\";\r\nlet position = \"打野\";\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/m1.js?");

/***/ }),

/***/ "./src/js/m2.js":
/*!**********************!*\
  !*** ./src/js/m2.js ***!
  \**********************/
/*! exports provided: sheshou, fuzhu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sheshou\", function() { return sheshou; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fuzhu\", function() { return fuzhu; });\nlet sheshou = {\r\n    name: \"后裔\",\r\n    position: \"下路\"\r\n};\r\n\r\nlet fuzhu = {\r\n    name: \"蔡文姬\",\r\n    position: \"辅助\"\r\n}\r\n\r\n//统一暴露\r\n\n\n//# sourceURL=webpack:///./src/js/m2.js?");

/***/ }),

/***/ "./src/js/m3.js":
/*!**********************!*\
  !*** ./src/js/m3.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//默认暴露\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    game: \"王者荣耀\",\r\n    company: \"Tencent\"\r\n});\n\n//# sourceURL=webpack:///./src/js/m3.js?");

/***/ })

/******/ });