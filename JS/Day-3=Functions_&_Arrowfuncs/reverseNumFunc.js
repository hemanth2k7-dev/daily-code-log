//Function to reverse a number
function reverseNum(n) {
  let dig = 0,
    rev = 0,
    temp = n,
    count = 0;
  while (temp != 0) {
    count++;
    temp = Math.floor(temp / 10);
  }
  while (n != 0) {
    dig = n % 10;
    rev = rev * 10 + dig;
    n = Math.floor(n / 10);
  }
  console.log(`Reverse of ${n} = ${rev}`);
}
let n = Number(prompt("Enter a number"));
reverseNum(n);