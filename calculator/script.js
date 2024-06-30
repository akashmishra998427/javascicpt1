let inputVal = document.getElementById("exp");
let sol = document.querySelector(".solution");
let ac = document.getElementById("ac");
let divide = document.getElementById("/");
let percent = document.getElementById("%");
let minus = document.getElementById("-");
let plus = document.getElementById("+");
let multiply = document.getElementById("x");
let back = document.getElementById("back");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let zero = document.getElementById("0");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");
let cancel = document.querySelector(".cancel");
let show = document.querySelector(".show");
let dis = document.querySelector(".calculator");
let button = document.querySelector(".buttons");
back.addEventListener("click", (e) => {
  let val = inputVal.value;
  val = val.substr(0, val.length - 1);
  inputVal.value = val;
});

equal.addEventListener("click", () => {
  let val = inputVal.value;
  let result = eval(val);
  sol.innerText = result;
});

ac.addEventListener("click", () => {
  inputVal.value = "";
  sol.innerText = "";
});
inputVal.onchange = () => {
  if (!inputVal.value.length) {
    equal.setAttribute("disabled", "true");
  } else {
    equal.removeAttribute("disabled");
  }
};

divide.addEventListener("click", () => {
  inputVal.value = inputVal.value + "/";
});
multiply.addEventListener("click", () => {
  inputVal.value = inputVal.value + "*";
});
seven.addEventListener("click", () => {
  inputVal.value = inputVal.value + "7";
});
eight.addEventListener("click", () => {
  inputVal.value = inputVal.value + "8";
});
nine.addEventListener("click", () => {
  inputVal.value = inputVal.value + "9";
});
minus.addEventListener("click", () => {
  inputVal.value = inputVal.value + "-";
});
four.addEventListener("click", () => {
  inputVal.value = inputVal.value + "4";
});
five.addEventListener("click", () => {
  inputVal.value = inputVal.value + "5";
});
six.addEventListener("click", () => {
  inputVal.value = inputVal.value + "6";
});
plus.addEventListener("click", () => {
  inputVal.value = inputVal.value + "+";
});
one.addEventListener("click", () => {
  inputVal.value = inputVal.value + "1";
});
two.addEventListener("click", () => {
  inputVal.value = inputVal.value + "2";
});
three.addEventListener("click", () => {
  inputVal.value = inputVal.value + "3";
});
percent.addEventListener("click", () => {
  inputVal.value = inputVal.value + "%";
});
dot.addEventListener("click", () => {
  inputVal.value = inputVal.value + ".";
});

equal.addEventListener("click", () => {
  if (!inputVal.value.length) {
    sol.innerText = "";
  } else {
    let val = inputVal.value;

    let result = eval(val);
    sol.innerText = Number(result);
  }
});

