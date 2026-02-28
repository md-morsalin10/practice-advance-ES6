const numbers = [1,2,3,4,5,6,7,8];
// arrow function with reduce 
const total = numbers.reduce((acc,num)=> acc+num, 0);

console.log(total);

// reduce with normal function 
const total2 = numbers.reduce(function(acc,num){
    return acc+num;
},0)
console.log(total2);


const cart = [
  { item: "Book", price: 100 },
  { item: "Pen", price: 20 }
];

const totalPrice = cart.reduce((acc,product)=> acc+product.price, 0);

console.log(totalPrice);


    
