let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

/**
 *  选择符： |
 *  匹配选择左边或则右边的表达式，只要能匹配成功一侧，就为true
 */
let reg = /zsd|lo/g;
console.log(reg.test(str)); //true


/**
 * 字符转义： \
 * 使用RegExp构造函数创建正则时，参数pattern是字符串，
 * 在字符串中： \也是转义字符，
 * 因此 new RegExp("\d+\.\d+") 的步骤如下：
 * 1.进行字符串内部解析：分解 "\d" => d ;"\." => . "\d" => d
 *      组合： "d+.d+"
 * 2.将字符串作为参数传给构造函数 RegExp()
 * 所以得到的结构为 /d+.d+/
 * 而需要的结构为 /\d+\.\d+/
 * 因此需要对转义字符进行转义，所以参数为 "\\d+\\.\\d+"
 */
let num = 12.25;

console.log(/\d+\.\d+/.test(num)); //true

let reg2 = new RegExp("\d+\.\d+"); // /d+.d+/ => d+.d+
console.log(reg2.test(num)); //false
reg2 = new RegExp("\\d+\\.\\d+"); // /\d+\.\d+/ => \d+\.\d+
console.log(reg2, reg2.test(num)); //true