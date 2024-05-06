// types of variable scope
// 1 global
// 2 function
// 3 block


//global scoped variable
// you can use this any where any how
// normaly we awid to create this type of variable

// var age=15
// console.log(age)
// {
//     console.log(age)
// }
// if(true){
//     console.log(age)
// }
// function sayhello(){
//     console.log("hello this is my age:",age)
// }
// sayhello()

// if you create a globale scoped variable using let var or const yu can use this any where


//function scoped

function sayhello(){
    var name="earth"
    console.log("hello this is planet:",name)
}
sayhello()
console.log(name)


