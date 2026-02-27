function add (num1, num2){
    console.log('argument', arguments)
    const args = [...arguments]
    console.log(args)

}
add(10,20,30,40,50,60)