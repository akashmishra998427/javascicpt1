

// ========= Accessing html element by id,class,queryselector,queryselectorAll ============

// document.getElementById("heading");  ---> returns id named heading
// document.getElementsByClassName("heading") ------> returns the all collections of classes named heading
// document.getElementsByTagName("h1")   ----> returns the all collections of tags named h1
// document.querySelector(".heading")   ----> returns the first element of class named heading
// document.querySelector("#heading")   ----> returns the first element of id named heading
// document.querySelector("h1")   ----> returns the first element of tag named h1
// document.querySelectorAll(".heading")-----> returns all the classes named neading

// =============== Upadting Existing Element ============

// ========= using inner html  ================

// document.getElementsByClassName("heading");
// heading.innerHTML="my name is akash";

 // ========= using text content  ================
//  let element= document.querySelector("#fdiv");
//  element.textContent="my name is akash";
 

// ========= using inner-text ==============

// let element= document.querySelector("#fdiv");
//   element.innerText="akash mishra";

// ============ Adding element ================
// let heading = document.createElement("h1");
// heading.textContent="this is a heading";

// let bodyTag=document.querySelector("body");
// bodyTag.appendChild(heading);

// if you are using appendchild then the child wwi add at end of the body

// ========== adding child at xyz position ===========
// insertAdjusantHtml()
// let mydiv=document.querySelector("#mydiv");
// let me =document.createElement("span");
// me.textContent="my name is akash";
// mydiv.insertAdjacentElement("beforebegin",me);
// mydiv.insertAdjacentElement("afterbegin",me);
// mydiv.insertAdjacentElement("beforeend",me);
// mydiv.insertAdjacentElement("afterend",me);
 
// =========== removing an element ============

let parent = document.querySelector("#mydiv")
let child=document.querySelector("fpara")
// parent.removeChild(child);
