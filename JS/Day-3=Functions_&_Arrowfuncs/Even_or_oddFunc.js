//Arrow function to check whether the number is even or odd
let n = Number(prompt("Enter a number"));
const checkEven = (n) => (n % 2 == 0 ? "Even" : "Odd");
console.log(`${n} is ${checkEven(n)}`);
