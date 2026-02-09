//Function to check whether a number is palindrome
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
  return rev;
}
function isPalindrome(n) {
  if (n == reverseNum(n)) {
    return true;
  }
  return false;
}
let n = Number(prompt("Enter a number"));
if (isPalindrome(n)) {
  console.log(`${n} is Palindrome`);
} else {
  console.log(`${n} is not Palindrome`);
}
