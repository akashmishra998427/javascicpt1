// //singleton  jab hmm actually me littrals ki trha declear karte hai to singleton nahi banta
// //aur agar constroctur se banta hai to singleton hi banega

// // object literals
// //there are two methods to create this
// // 1. object.create - name

// //2. const jsuser ={}
// // we will focus on second method

// //how to use symbole in object
// const mysm=Symbol(key1)

// const jsuser ={

//     name:'shubham  ',
//     "full name":"akash mishra",
//     [mysm]:"mykey1",
//     age:20 ,
//     location:'delhi  ',
//     email:'shubham@gmail.com   ',
//     isloggendin:["monday  ","tuesday  ","thursday  "]
// }

// // way two access the object in javascript
// //1 using . operator
// console.log(jsuser.name,jsuser.email,jsuser.location)
// //2 using squre braces
// console.log(jsuser["email"]);

// console.log(jsuser.[mysm]);