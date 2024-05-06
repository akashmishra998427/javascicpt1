//jaha par aap ka function
// apne current scope ke andar sabse top par shift ho jay use function hoistiog bolte hai
//names("akash mishra")
//function names(fullname){
  //  console.log(fullname)
//}
//names("akash mishra")
//function hoisting

//variable hoisting
//in this term only the decleration of variable moves on the top 
//console.log(age) that's whay this line is printing undefined
//var age =23;
//console.log(age)
//variable hoisting me keval variable ka decleration upar shift hota hai uski value nahi shift hoti hai

// checking can i do this using let  
// you can't do this using let 
// console.log(age)
// let age = 34
// console.log(age)

//checking can i do this using const

//console.log(age)
//const age = 34
// console.log(age)

//you can't do yhis using const

//this will not be run
// s();
// let a=function(){
//     console.log("hello")
// }
//you cant do function hoisting using function expression

//you can't do hoisting with class

// const object1 = new human()
// class human{

// }



// ============== function call stack ==========
// isme data LIFO formate me store hota hai

// for example sadhi ke plates

//in javascript function is known as first class cetizions
//you can assign function in to a variable


// let greet=function(){
//     console.log("say my name")
// }
// greet()

//you can pass it as a argument

// function greet(){
//     console.log("say my name")
// }
// function greetme(greet,name){
//     greet()
//     console.log("akash",name)
// }
// greetme(greet,"akash")

//you can return as a function


// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }

// let ans=solve(10)
// console.log("final answer is ",ans);

//you can use this in data structurs


// const arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ]
// console.log(arr[0](10,20));
// console.log(arr[1](10,20));
// console.log(arr[2](10,20));

//you can use this as a property

// let obj={
//     name:"akash",
//     greet:function(){
//         console.log("hello",this.name)
//     }
// }
// console.log(obj.greet(),obj.name)


// =============== something new ===============

// greet()
// let greet=function(){
//     console.log("hello")       ========>this is not possible 
// }  


// console.log(greet)
// var greet=function(){    ============> but this is possible
//     console.log("hello")
// }