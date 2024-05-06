// stack  (primiive) givs a copy of decleared  variable
// heap(non-primitive) givs a refrence of original value


// EXAMPLE

let myname = "akash mishra"
let anothername=myname;



anothername="vikas"

console.log(anothername);
console.log(myname);



let user =  { name: 'Akash' ,
 email: 'abc@gmail.com',
 password:'123456'
}

let user2 = user;
user2.email = "axp@gmail.com";

console.log(user.email);
console.log(user2.email);
// here both variables are pointing to the