"use strict";
class A{
    name =123
    constructor(a,b,c){
        this.name = a
        this.age = b
        this.xxx =c
       console.log("A constructor",a,b,c);
       this.fn()
    }
    name=123
    age=456
    fn(){
        console.log("fn",this);
        return 1;
    }
}
class B extends A{
    constructor(a,b,c){
        super(a,b,c)
        console.dir(this);
    }
}
// console.log("B",(new B).fn());

// console.log("A",(new A).fn());
var a =  new A(1,2,3)
a.fn()
new B
/**
 * A constructor undefined undefined undefined
 * B { name: undefined, age: undefined, xxx: undefined }
 */

 new B(4,5,6)
 /**
  * A constructor 4 5 6
  * B { name: 4, age: 5, xxx: 6 }
  */