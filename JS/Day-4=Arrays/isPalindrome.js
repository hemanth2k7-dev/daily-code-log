//To Check if array is palindrome
function isPalindrome(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] != arr[len - i - 1]) {
      return false;
    }
  }
  return true;
}
let n = Number(prompt("Enter number of elements in array"));
let arr = [];
for (let i = 0; i < n; i++) {
  let ele = Number(prompt("Enter number element"));
  arr[i] = ele;
}
if (isPalindrome(arr)) {
  console.log(`Array ${arr} is Palindrome`);
} else {
  console.log(`Array ${arr} is not Palindrome`);
}
