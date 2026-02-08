/*Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value*/

let n = Number(prompt("Enter a number"));
//label for outer loop
nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue nextPrime; //skips outer loop
    }
  }
  console.log(i);
}
