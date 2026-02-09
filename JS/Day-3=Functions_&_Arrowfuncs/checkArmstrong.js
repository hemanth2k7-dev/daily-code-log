/*Functions to check whether a number is armstrong or not*/
const countDigits = (temp) => {
  let count = 0;
  while (temp != 0) {
    count++;
    temp = Math.floor(temp / 10);
  }
  return count;
};

function checkArmstrong(n) {
  let temp = n,
    dig = 0,
    pow = 1,
    sum = 0;
  let count = countDigits(temp);
  temp = n;
  while (temp != 0) {
    dig = temp % 10;
    for (let i = 1; i <= count; i++) {
      pow *= dig;
    }
    sum += pow;
    temp = Math.floor(temp / 10);
    pow = 1;
  }
  let result = n == sum ? true : false;
  return result;
}
let n = Number(prompt("Enter the number"));
if (checkArmstrong(n)) {
  console.log(`${n} is Armstrong`);
} else {
  console.log(`${n} is not Armstrong`);
}
