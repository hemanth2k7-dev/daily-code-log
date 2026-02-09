/*Write the following using arrow functions
1.add two numbers
2.find max of two numbers
3.swap two numbers*/

let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
//1.
const addNum = (a, b) => a + b;
console.log(`${a} + ${b} = ${addNum(a, b)}`);
//2.
const max = (a, b) => (a > b ? a : b);
console.log(`Maximum of ${a} & ${b} is ${max(a, b)}`);
//3.
console.log(`Before Swap=> a=${a} & b=${b}`);
const swapNum = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`After Swap=> a=${a} & b=${b}`);
};
swapNum(a, b);
