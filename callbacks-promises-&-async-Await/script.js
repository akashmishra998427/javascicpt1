document.write("1");
document.write("2");
setTimeout(

    ()=>{
    document.write("hello world")

}, 4000) 

document.write("3"); 

//writing a callback functon to passing as an argument
function sum(a,b){
    document.write(a+b)
}
 function add(a,b,callback){
    callback(a,b)
 }
 add(2,3,sum)

//creating get data function to get the data 

function getdata(dataid ,getnextdata){
    console.log("data",dataid);
}

function findid(id,getnextdata)
{
    setTimeout(()=>{
        console.log("id",id)
        if(getnextdata){
            getnextdata();
        }
    },2000)
}


// =========    callback hell =========

getdata(1,()=>{
    console.log("getting data 2......")
    getnextdata(2,()=>{
        console.log("getting data 3......")
        getnextdata(3,()=>{
            console.log("getting data 4......")
            getnextdata(4)
        })
    });
})

// this is called callback hell 
// this type of programming becomes difficult to understand & manage
// so we use promises to solve this problem
//this is also called as nesting of callback functions


// =================   promises   ====================

// promises are used to solve callback hell problem
// promises are used to make asynchronous code synchronous

// promises are used to make code more readable & manageable

/*

promises is for "eventual" completion of task . it is an object in javascript
   it is a solution to callback hell 
   
   */
   
   /*

   syntax  let promise= new promis ((resolve,reject)=>{
    function with 2 handlers})

    */

// let promise = new Promise((resolve,reject)=>{
//     //resolve is called when promise is resolved
//     console.log("i am a promise");
// })    

/*  states of promise =>  there are three states of promise  

1. pending
2. resolved  [fullfilled]
3. rejected



*/


function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataid)
            
            resolve("data printed successfully")
        },5000)
    })
}

// function finddata(dataid,getnextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataid)
            
//             reject("i can't give you my personal data okay")
//         },5000)
//     })
// }

const getPromise = ()=>{
   return new Promise((resolve,reject)=>{
        console.log("calling a promise")
        // resolve("success");
        reject("unsuccess")
    })
}

let promis=getPromise();
Promise.then(()=>{
    console.log("promise fullfilled");

})
Promise.catch(()=>{
    console.log("the promise is rejected");
})

// way to access the promises 

// 1 .then((res)=>{...})
// 2. .catch((res)=>{...})

