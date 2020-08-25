;(() => {
    /**
     * TypeScript数据类型
     */
    /**
     * 声明带类型的变量
     * let [name]:type = value
     * 声明时限制了变量的类型，变量在后续的使用时，不能再赋值为其他类型
     */

    //boolean 布尔
    let bo:boolean = false;
    // bo = 1 //报错

    //string 字符串
    let str:string = "string"
    
    //nubmer 数字
    let num:number = 1 
    let num2:number = 12.5
    let num3:number = 0x62
    let num4:number = NaN 
    let num5:number = 0b1010 
    let num6:number = 0o12

    //undefind和null
    let u:undefined = undefined
    let n:null = null
    //null和und是所有类型的子集
    /**
     * 即:任意类型的变量都可以被赋值为null或und
     */
    let num7:number = null
    num7 = undefined


    
})()