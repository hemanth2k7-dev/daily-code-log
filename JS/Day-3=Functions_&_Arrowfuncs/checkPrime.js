//Function to check whether the given number is prime or not
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
let n = Number(prompt("Enter the number"));
if (isPrime(n)) {
  console.log(`${n} is Prime`);
} else {
  console.log(`${n} is not Prime`);
}
