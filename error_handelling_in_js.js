// ========= Error heandeling ============
// what is error --- error is just an event which interrupt the normal flow of execution of code

// ==== types of error ======

// there are two types of error

// (1) compile time error =====> throws the error during parssing the code of javascript

// here we have syntax error

// console.log(1;  ------  this is a compile time error



// (2) runtime error   =======>
    // here we have refrence error

    // console.log(x) ----  this is a run time error


//  =======  handling the erroes ======
// try{
    // code which may throw an error
// } 
// catch{
    // code which will run if there is an error
// }

// try{
    // console.log("try block starts here")
    // error ------> refrence error
//     console.log(x);
//     console.log("try block end's here")
// }

// if you don't have any error inside the try block the catch block should no be execute

// catch(error){
//     console.log("something went wrong");
//     console.log("your error is here:",error)
    // erroer ke saath aap kya karna chate hai
    // retry logic
    // fallback mechanism
    // logging
    // custom error
// }

// finally    ----> this will execute every time

// finally{
//     console.log("this will execute every time because i am finally block")
// }

// if you want to create a error then for this you have a key word name  THROW  

// throw use to create  your custome error

// lets cretate a custome error

// try {
//     console.log(x); // this is refrence error
// }

// catch (err){
//     throw new Error("first decleare then use this ")

// }

// let err =100;
// if(err==10){
//     throw new Error("invalid json error")
// }