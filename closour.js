function outerFunction (){
    function innerFunction(){
        console.log("From inner function")
    }
    return innerFunction();
}

outerFunction()
// innerFunction()

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
        
    }
    return inner;
}

const counter = outer();
counter();
counter();
counter();
counter();
counter();

function sayHello(name){
    function innerHi (){
        console.log('Hello ', name)
    }
    return innerHi;
}

const massage = sayHello("Morsalin");
const massage1 = sayHello("Shakib");
massage();
massage();
massage();
massage1();
massage1();
massage();