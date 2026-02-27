function sum(arr1, arr2){
    arr1[0]=100;
    arr2[0]=200;
    const first = arr1[0];
    const second = arr2[0];
    return first+second;
}

let a = [1,2,3,4];
let b = [5,6,7,8];
console.log('before the function call', a,b);
console.log(sum(a,b));
console.log("after the function call", a,b);
