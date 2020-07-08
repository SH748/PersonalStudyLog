function A(a){
    return function B(b){
        return function C(c){
            console.log(a,b,c);
        }
    }
}
let A