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

const triple = numbers.map(num=> num*3);
console.log(triple);


const names = ["khaled", "shakib", "mustafiz", "messi", "neymar"];
const fistLetter = names.map(lt=>lt[0]);
console.log(fistLetter);


const products = [
    {name: 'iphone', price:10000, color:'black'},
    {name: 'iphone', price:10000, color:'black'},
    {name: 'iphone', price:10000, color:'black'},
    {name: 'iphone', price:10000, color:'black'}

]
const prices = products.map(pri=> pri.price);
console.log(prices);
