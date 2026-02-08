/*Checking whether a number is palindrome*/

//Using string logic
let num = prompt("Enter a number");
let len = num.length;
let flag = 0;
for (let i = 0; i < len; i++) {
  if (num[i] !== num[len - 1]) {
    flag = 1;
    break;
  }
  len--;
}
if (!flag) {
  console.log(`${num} is  Palindrome`);
} else {
  console.log(`${num} is not Palindrome`);
}

//Using Math logic
number = Number(num);
let Rev = 0,dig = 0;
len = num.length;
for (let i = 1; i <= len; i++) {
  dig = number % 10;
  Rev = Rev * 10 + dig;
  number = Math.floor(number / 10);
}
if (num == Rev) {
  console.log(`${num} is  Palindrome`);
} else {
  console.log(`${num} is not Palindrome`);
}
