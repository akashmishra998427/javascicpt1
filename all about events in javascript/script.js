// ============== adding events  ===========

// function change(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara')
// fpara.textContent="hi akash mishra";
// }

//  let fpara = document.getElementById('fpara')
//  fpara.addEventListener('click',change)

//  ================ removeEventListener ===================
// let fpara=document.getElementById('fpara')
// fpara.removeEventListener('click',change)

//the function you are passing in add or remove Eventlistiner should be same 
 
// let ancr=document.getElementById('fanchor')
// ancr.addEventListener('click',function(){
//     event.preventDefault();
//     ancr.textContent="clicked "
// })

//avoiding to many listiners 

// let paras=document.querySelectorAll('p')
// for(let i=0; i<paras.length;i++){
//     let para=paras[i];                           ==============> this is not a good practic
//     para.addEventListener('click',function(){
//         alert("you clicked on para "+(i+1))
// })
// }


// this is the right way to do this  

// let paras = document.querySelectorAll('p')
// function alertfunction(){
//     alert("you clicked on para"+event.target.textContent)
// }
                                                                //   ==========> not good practic
// for(let i=0;i<paras.length;i++){
//     let para=paras[i]
//     para.addEventListener('click',alertfunction);
// }

// ====================== always do this =============

// let maydiv=document.getElementById('wrapper')
// document.addEventListener('click',alertfunction)


// function alertfunction(){
//         alert("you clicked on para"+event.target.textContent)
//     }


    // =============== if i want to show on only span content clicl function triggred==========================


//     function alertfunction(){
//         if(event.target.nodeName==='span'){
//             alert("you clicked on para"+event.target.textContent)
//         }
       
//     }

//     let maydiv=document.getElementById('wrapper')
//   maydiv= document.addEventListener('click',alertfunction)
let age=prompt("Enter your age");
console.log(age)

;
