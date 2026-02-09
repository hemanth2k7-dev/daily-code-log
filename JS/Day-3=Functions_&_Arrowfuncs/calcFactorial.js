//Function to find factorial
function calcFactorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log(`Factorial of ${n} = ${fact}`);
}
let n = Number(prompt("Enter a number"));
calcFactorial(n);
