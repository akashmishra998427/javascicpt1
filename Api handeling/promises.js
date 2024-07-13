//  creating first promise

const promises1 = new Promise(function(resolve , reject){
  // do an async task
  // db call , network call  
  setTimeout(()=>{
    console.log("task is completed")
    resolve()
  },1000)
})

//  way to consuming a promise

// second promise 

promises1.then(function(){
    console.log('promise consumed');
})

new Promise( function(resolve, reject)  {
  setTimeout(()=>{
    console.log('async task 2 completed');
    resolve()
  },1000)
})

.then(function(){
console.log("async2 is resolved");
})

// creatinf third promise  

const promise3 = new Promise(function(resolve,reject){
  setTimeout(()=>{
    resolve({username:"akash",email:"akash@12gmail.com"})
  },1000)
})

promise3.then(function(username){
  console.log(username);
})

// creating promis 4 

let Promise4 = new Promise((resolve,reject)=>{
setTimeout(()=>{
  let Error=true
  if(!Error){
    resolve({username:"akash",password:"akash123@"})

  }
  else{
    reject('Error something went wrong')
  }
},1000)

})



Promise4
.then(( username)=>{
 console.log(username);
 return username.username
 //chaining of .then()
})
.then((username)=>{
console.log(username);
})
.catch((Error)=>{
  console.log(Error);

})

// creating promise 5

let promie5 = new Promise((reject,resolve)=>{
  setTimeout(()=>{
  let error=false;
  if(!error){
    resolve({username:'vikas',password:'vikas123@'})
  }
  else{
    reject('oops ! something went wrong')
  }
  },1000)
})

promie5
.then((username)=>{
  console.log(username)
  return username.username


})
.then((username)=>{
console.log(username)
})
.catch((error)=>{
console.log(error)
})
// the finally block ios alwya executed either promise is resolved or rejected
.finally(()=>{
  console.log('the promise is either resolve or rejected');
})

// creating promise 6

const promise6 = new Promise((reject,resolve)=>{
  setTimeout(()=>{
    let error=true;
    if(!error){
      resolve({LanguageName:'Javascript',LanguageCode:'Js123'})
    }
    else{
      reject('oops ! javascript went wrong')
    }
    },1000)
})

// consuming promise6 using async await

async function consumePromise6(){
 
    const response =await promise6
  console.log(response);
  }

  consumePromise6();

  // for the beast practic for async await always put your code in try catch block

  async function consumePromise6(){
  try{
    const response = await promise6
    console.log(response);
  }
  catch(error){
    console.log(error);
  }
  }
  consumePromise6();

// =================== fetch ===============

async function getresponse(){
try {
  const response= await fetch('https://jsonplaceholder.typicode.com/comments')
  let data = await response.json()
  // console.log(response)
  console.log(data);
} 
catch (error) {
   console.log('Error is:',error);
}
}
getresponse();

// fetch using .then() .catch()

fetch('https://jsonplaceholder.typicode.com/comments')
.then((Response)=>{
  return Response.json()
})
.then((Response)=>{
  console.log(Response)
})
.catch((error)=>{
console.log(error);
})

fetch('https://jsonplaceholder.typicode.com/posts')
.then((Response)=>{
 return Response;
 Response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{
console.log(error)
})

async function getdata(){
  try {
    const Response= await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await Response.json()
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}