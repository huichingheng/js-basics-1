// 1. Using `const`, define a variable called `x` with the value `5.25`
// - Log it to the console using `console.log('The value of x is', x)`
const x = 5.25;
console.log("The value of x is " + x);

// Using `let`, define a variable called `y` with the value `'Hello!'`
// - Log it to the console
let y = "Hello!";
console.log(y);

// Using `var`, define a variable called `z` with the value `true`
// 	- Log it to the console
var z = true;
console.log(z);

// Define a variable called `sum` with the value of `x` plus `15`
// 	- Log it to the console
const sum = x + 15;
console.log(sum);

// Define a variable called `bodyClass` with the value of `document.body.className`
//    	- Log it to the console
const bodyClass = document.body.className;
console.log(bodyClass);

// Change `document.body.className` to `"loading"`
document.body.className = "loading";

// Log the value of `bodyClass` to the console again
console.log(bodyClass);

// Define a variable called `randomNumber` with the value of `Math.random()`
// 	- Log it to the console
const randomNumber = Math.random();
console.log(randomNumber);

// Define a variable called `mainClass` to store the `className` of the `main`
// element on the page
//    	- Log it to the console
const mainClass = document.querySelector("main").className;
console.log("The mainClass name is " + mainClass);

const bodyClassname = document.querySelector("body").className;
console.log("The bodyClass name is " + bodyClassname);

// FUNCTION
// Define a function `hello` that displays an `alert` with the message `"Hello,
//    world!"`
//    	- Invoke it to verify that it works
// Update the `hello` function above to `console.log` a message (`"I am the
//    hello function"`) after displaying the `alert`.
// const hello = "Hello World!";
// alert(hello);
// console.log("I am the hello function");
// OR
const helloo = () => {
    alert("Hello, world!");
    console.log("I am the helloo function");
}
// helloo();

// Define a function `hi` that takes a single argument `name` and returns the
//    string `"Hi, <name>!"`.
//    	- when invoked like `hi('John')` it should return `"Hi, John!"`
//    	- when invoked like `hi('Ben')` it should return `"Hi, Ben!"`
const hi = name => {
  return `Hi, ${name}!`}

// function hi(name) {
//     return "Hi, " + name + "!";
// } 
// OR
// let hi = function(name) {
//     return "Hi, " + name + "!";
// } 
// OR
// let hi = name => {
//   return "Hi, " + name + "!";
// };

// Log the output of the `hi` function to the console
console.log(hi("John"));
console.log(hi("Ben"));

// Define a function `add` that takes two arguments: `num1` and `num2` and
//    returns the sum of `num1` and `num2`
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(4, 7));
// OR
// const add = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(add(4,7));

// Define a function `random5` that does not take any arguments and returns a
//    random number between `1` and `5` (no decimals)
//    	- Hint: Multiply `Math.random()` by 5 and then use `Math.round()`
const random5 = () => {
  return Math.round(Math.random() * 5)
}
console.log(random5())
//OR
// function random5() {
//   return Math.round(Math.random() * 5);
// }
// console.log(random5());

