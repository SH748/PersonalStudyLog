;(()=>{
    /**
     * object接口
     */
    interface ObjInterface {
        readonly id:number,
        name:string,
        age:number,
        nickName?:string
    }

    const zhangsan:ObjInterface ={
        id:1,
        name:"张三",
        age:18,
        nickName:"法外狂徒"//nickName为可选属性
    }
    const lisi:ObjInterface={
        id:2,
        name:"李四",
        age:15
    }
    // zhangsan.id = 6 //报错，readonly修饰的属性不能修改

  

})()