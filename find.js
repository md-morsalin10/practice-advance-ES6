const student = [
    {name: "habib", age:21},
    {name: "hridoy", age:52},
    {name: "messi", age:34},
    {name: "abbas", age: 52},
    {name: "khan", age:65}
]

const findName = student.find(std=> std.name[0]='h');
console.log(findName);
