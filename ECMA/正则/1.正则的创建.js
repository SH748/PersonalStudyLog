let str = "wsdfj;sj";

//1、字面量创建正则表达式
/*
    用两个斜杆来声明，表达式在斜杆里面书写
    例： /a/ （匹配字符串中是否存在字母a） 
*/
console.log(/w/.test(str)); //true

let a = "f";
//字母创建的问题
/*
 *在想要引用变量时，变量名被当做表达式解析，无法应用变量
 （在正则中引用变量不常用） 
 */
console.log(/a/.test(str)); //false

//解决方案
console.log(eval(`/${a}/`).test(str)); //true


//2、使用对象创建 
/**
 * 声明方式：new RegExp(pattern, attributes);
 * 可选参数：
 *      pattern:是一个字符串，指定了正则表达式的模式或其他正则表达式。
 *      attributes:是一个可选的字符串，包含属性 "g(全局)"、"i(区分大消息)" 和 "m(多行匹配)"，
 *      分别用于指定全局匹配、区分大小写的匹配和多行匹配，ECMAScript 标准化之前，不支持 m 属性
 *      如果 pattern 是正则表达式，而不是字符串，则attributes必须省略该参数。。
 */
let reg = new RegExp("a", "g");
let reg2 = new RegExp(a, "g"); //可以引用变量
console.log(reg.test(str), reg2.test(str));