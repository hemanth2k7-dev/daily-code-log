/*Finding factorial of number N*/
let N = Number(prompt("Enter a number"));
let f = 1;
for (let i = 1; i <= N; i++) {
  f *= i;
}
console.log(`Factorial of ${N} = ${f}`);
