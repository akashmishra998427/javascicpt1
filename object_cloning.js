// ============= object cloning in javascript ============

// let obj ={
//     age:19,
//     waight:85,
//     height:180
// }
// let obj2=obj;
// console.log(obj)
// obj2.age=90;
// console.log(obj2)
// console.log(obj)
// obj.color="pink";
// console.log(obj);


//object cloning is starts here
// ways to cloning

// (1) using spread operator
// let obj1={
//     age:19,
//     waight:85,
//     height:180
// }                       
// let src ={...obj1}    =====> cloning method
// src.age=20;
// console.log("obj",obj1);
// console.log("src",src);


// (2) using asign method()

// let obj1={
//     age:19,
//     waight:85,
//     height:180
// }
// let obj2={
//     age:59,
//     waight:4849,
//     height:9404
// }

// let obj3=Object.assign({},obj1,obj2)  --------> cloning method
// obj1.age=50;
// console.log("obj1",obj1)
// console.log("obj2",obj2)
// console.log("obj3",obj3)

// (3) using iteration method 

// let src={
//     age:19,
//     waight:85,
//     height:180

// }
// let dest={

// }
// for(let key in src){
//     // console.log(key)
//     let newkey= key;      =============> clone is created using iteration wthis the help of for in loop
//     let value=src[key];
//     // insert key and value in dest and create a clone

//     dest[newkey]=value;
// }

// console.log(dest)
// src.age=80
// console.log(src)



// =========== garbage collector ===========

// we din't have any control on garbage collector