const numbers = [1,2,3,4,5,6];

// const double = [];
// for(const num  of numbers){
//     double.push(num*2)
// }

// const doubleIt = num => num*2;
// const double = numbers.map(doubleIt);

// less shortcut
const double = numbers.map(num =>num*2);
console.log(double)