//Function to count number of digits of a number
function countDigits(n) {
  let count = 0;
  while (n != 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}
let n=Number(prompt("Enter a number"));
let count=countDigits(n);
console.log(`Number of digits in ${n} = ${count}`);