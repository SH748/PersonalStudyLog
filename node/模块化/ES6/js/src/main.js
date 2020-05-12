//引入其他模块

/**
 * 语法： import xxxx form '路径'
 */

import {
    m1_fun1 as m1f1, //取别名
    m1_fun2,
    arr
} from './m1';
import {
    fun1,
    fun2
} from './m2';
m1f1();
m1_fun2();
console.log(arr)
fun1();
fun2();