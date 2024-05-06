//creation of array 
// let arr=[1,2,3,4,5,6,7,8,9,9,'akash']
// console.log(arr);
//array constructor
// let brr=new Array('akash',1,2,3,4,'mishra')
// console.log(brr);
// console.log(typeof brr)
// console.log(typeof arr)
// arr.push(10)
// arr.push(11)
// arr.push(12)
// arr.push(13)
// console.log(arr)

// console.log(arr.slice(2,5))
// console.log(arr.splice(2,5,'kunnu'))
// console.log(arr);
// built in functionf in javascript
//push, pop
// brr.push(akash);
// console.log(brr)
// console.log(brr.pop())
//shift remove first element
// brr.shift()
//unshift add first element
//slice 

// map function

// let arr=[100,200,300,400,1,2,3,4,5,6,'akash']
// let a=arr.map( (number)=>{
//     return number*number;
// })
// console.log(a)
// let a=arr.map((number)=>{
//     console.log(number+2)
// })
// console.log(a)

// let a= arr.filter((number)=>{
//     if(number%2==0){
//         return true
//     }
//     else{
//         false
//     }
// })
// console.log(a);
// console.log(typeof typeof arr);
// let a=arr.filter((number)=>
// {
//     if(typeof(number)==='string'){
//         console.log("typeof your value is string")
//         return true
//     }
//     else if(typeof(number)==='number'){
//         console.log("typeof your value is number")  
//         return false
//     }
// })
// console.log(a);
// let array=[1,2,3,4]
// let sum = array.reduce((acc,curr)=>{

//     return acc+curr;
// }, 0)
// console.log(sum)
// accessing array using foreach loop
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let a = arr.forEach((value,index)=>{
//     console.log("value=",value,"index=",index);
// })
// console.log(a);
// let length=arr.length;
// console.log(length)
// accessing of array using tradational for loop
// let arr=[1,2,3,4,5,'akash','mishra']
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i])
// }

// accesing the keys using for in loop

// let arr={
//      "first name":"akash",
//      "last name":"mishra",
//      village:"pawad",
//      age:20,
//      city:"pune"

//  }
//  for(let key in arr){
//     console.log(key," ",arr[key]);
//  }

// iteration on array using for of loop
// let array=[1,2,3,4,5,6,7,8,9,,10,11,12,13,14,15,16,17,18,19,20]

// for(let value of array){
//     console.log(value)
// }

// let name=["akash",'mishra']
// for(let value of name){
    // console.log(value)
// }
// passing arrays in a fnction

 let arr=[10,20,30,40,50]
//  function getsum(){
// let s=arr.length;
// let sum=0
// for(let index=0;index<=s;index++)
//     {
//        sum=sum+arr[index];
//     }
//     return sum
//  }
function getsum(arr){
    let sum=0;
    arr.forEach(value => {
        sum+=value
    });
    return sum
}
 let total=getsum
 console.log(total)

