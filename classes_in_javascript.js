// =============== CLASSES IN JAVASCRIPT  ===============
//decleration of class
// class  class name{
//     state === properties

//     behaviour ==== funcnality
// }
//

// ===== you can access the stete and funcaniloty of this class =======
// let obj = new class name();
//you can access these by the help of(.) operator

// class human{
//     //properties

//     #age=13;
//     wt40;
//     height=180;
//     //behaviour
// walking(){
//     console.log("i am walking",this.#age);
// }
// running(){
//     console.log("i am running");
// }
    
// }
// let obj=new human()
// console.log(obj.age)
// obj.walking()

// ====== you can marke any class member as private using # in javascript
// you can access the private member within the scope of class using this keyword


// ========== concpets of geter and seters ==========

// class human{
//     //properties

//     #age=13;
//     wt40;
//     height=180;
//     //behaviour
// walking(){
//     console.log("i am walking",this.#age);
// }
// running(){
//     console.log("i am running");
// }
// get ages(){
//     return this.#age;
// }
// set ages(value){
//     this.#age=value;
// }
// }

// let obj1=new human()
// console.log("my age is equels to:",obj1.ages())


// ========= constructors in js =========

// class human{
//     //properties

//     age
//     wt
//     height
//     //behaviour
// walking(){
//     console.log("i am walking");
// }
// running(){
//     console.log("i am running");
// }
//  constructor(newage,newheight,newwt){
//   this.age=newage
//   this.height=newheight
//   this.wt=newwt
//  }
// }
// let obj = new human(40,190,60)
// console.log(obj.age,obj.height,obj.wt)

//  ============= default parameter ===========

//============ it allows us to use functions with default values  =========
//  ========case 1 ========
// function name(myname ="sey my name"){
//     console.log("my name is:",myname) ======> when you forget to pass the argument the default set argument called automectally
// }

// name();

// ========== case 2 =========

// function afnmae(fname,lname="mishra"){
//     console.log("my name is:",fname,lname)
// }
// afnmae()


// =======  case 3 when one perameter is dependend on other perameter ==========

// function aname(fname="akash",lnme=fname.toUpperCase()){
//     console.log("my name is:",fname,lnme)
// }
// aname()


// ===== case 4 a objest is set as an default perameter ========
 
// function solve(value={age:13,he:130,wt:120}){
//     console.log("hello:",value)
// }
// solve()

//    you can also insert an array as a default argument in a function
//    you cand sent null as an argument and this will print null 


//    but you can't sent the argument as undefined in this case the function will take default afgument

//     you can send function as an default argument like this

function getage(){
    return 12;
}

function utlity(name="akash",age=getage()){
    console.log("my name is:",name,"my age is:",age)
}
utlity("akash",21)

utlity("akash")
utlity()




