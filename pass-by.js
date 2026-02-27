function multiply(a,b){
    a = a+5;
    b = b + 5;
    console.log(a , b)
    return a*b;
}
let x = 10;
let y = 5;
console.log("before calling x y", x,y);
const result = multiply(x,y);
console.log(result)
console.log("after calling xy", x,y);
