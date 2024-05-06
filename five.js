console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)

console.log("2">1)
console.log("02">1)

//is type ke conversion aap ko confuse kar sakte hai kabhi bhi 

console.log(null>0)
console.log(null>=0)
console.log(null==0)
console.log(null<=0)

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined<0)

// but most of the cases we avoid this types of conversions

// yaha tak koi dikkat nahi hai kabi null convert ho raha hai nan ke ander kabhi nahi

// lets check this by strict check   (===)
// jab hmm strict check ko use kar rahe hi to ye data types bhi check kar raha hai aur bol raha hai ye dono to same nahi hai aur false return karega

console.log("2"===1)

    
