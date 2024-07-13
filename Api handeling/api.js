const p = new Promise((res, rej) => {
  return res("hello");
});
// p.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// ); //second function in then is equal to the catch block.
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async await
// async function getData() {
//   try {
//     let data = await p;
//     console.log(data);
//   } catch (error) {
//     console.log("in exception", error);
//   }
// }
// getData(); //awaits waiits for the promise to be resolved or rejected

// let data=await p;
// console.log(data);

// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// const data = await res.json();
// console.log(data);

// let da = document.getElementById("da");

// data.forEach((element) => {
//   let ele = document.createElement("p");
//   ele.innerText = element.name;
//   ele.style.background="cyan"
//   da.appendChild(ele)
// });

const res= await fetch("https://jsonplaceholder.typicode.com/posts")
const db = await res.json();
console.log(db);

db.forEach(element => {
    let a=document.getElementById("da");
    let b=document.createElement("h3");
    b.innerText=element.title;
    a.appendChild(b);
});

