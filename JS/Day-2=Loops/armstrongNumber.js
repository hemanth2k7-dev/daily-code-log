/*Checks whether a number is armstrong number or not*/
let num = Number(prompt("Enter the number"));
let temp = num,
  sum = 0,
  pow = 1,
  count = 0,
  dig = 0;
while (temp != 0) {
  count++;
  temp = Math.floor(temp / 10);
}
temp = num;
while (temp != 0) {
  dig = temp % 10;
  for (let i = 1; i <= count; i++) {
    pow *= dig;
  }
  sum += pow;
  pow=1;
  temp = Math.floor(temp / 10);
}
console.log(sum);
if (sum == num) {
  console.log(`${num} is an Armstrong number`);
} else {
  console.log(`${num} is not an Armstrong number`);
}
