const numbers = [10, 20 ,34,55, 66,44,32,56];

const oddNumber = numbers.filter(num=> num%2===1);
console.log(oddNumber);


const evenNumber = numbers.filter(num=> num%2===0);
console.log(evenNumber);


const names = ['habib', 'rakib', 'shakib', 'shihab', 'himel'];

const sName = names.filter(nam=> nam[0]=== 's');
console.log(sName);

const student = [
    {name: "habib", age:21},
    {name: "hridoy", age:52},
    {name: "messi", age:34},
    {name: "abbas", age: 52},
    {name: "khan", age:65}
]

const olderStudent = student.filter(std=> std.age>40);
console.log(olderStudent);
