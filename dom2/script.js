/*   ================ changing css with the help of javascript ==================== */
// style  ------> with the help of this you can get and set the values

// changing single line styles

// let paraelement=document.getElementById("fdiv")
// paraelement.style.backgroundColor="red";

// changing multiple line styles
// let secondem=document.getElementById("sdiv")
// secondem.style.cssText="backgroundColor:black;color:white;font-size:3rem;"

// ========= set attribute =======
// let em=document.querySelector('#fdiv')
// em.setAttribute('class','first')        //=======>this will works
// em.setAttribute('class','second')
// em.setAttribute('style','backgroungColor:green;')

// the class first added in the div which id is fdiv


// =========== class name =============


// let fpara=document.querySelector('fdiv');
// fpara.className="first";
// fpara.className="second";
// fpara.className="third";



//=============== class list =============
// let fpara=document.querySelector("#fpara")
// undefined
// fpara
// <p id=​"fpara" class=​"a n c d e f g">​ first paragraph ​</p>​
// fpara.classList;
// DOMTokenList(7) ['a', 'n', 'c', 'd', 'e', 'f', 'g', value: 'a n c d e f g']
// fpara.classList.add('fourclass');
// undefined
// fpara.classList
// DOMTokenList(8) ['a', 'n', 'c', 'd', 'e', 'f', 'g', 'fourclass', value: 'a n c d e f g fourclass']
// fpara.classList.remove('f');
// undefined
// fpara.classList
// DOMTokenList(7) ['a', 'n', 'c', 'd', 'e', 'g', 'fourclass', value: 'a n c d e g fourclass']
// fpara.classList.toggle('fourclass');
// false
// fpara
// <p id=​"fpara" class=​"a n c d e g">​ first paragraph ​</p>​
// fpara.classList.contains('a')
// true