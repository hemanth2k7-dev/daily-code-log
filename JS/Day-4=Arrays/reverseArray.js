//To reverse an array(Without using built in reverse())

function reverseArr(arr) {
  let rev = [],
    len = arr.length;
  for (let i = 1; i <= len; i++) {
    rev.push(arr[len - i]);
  }
  return rev;
}

let n = Number(prompt("Enter number of elements in array"));
let arr = [];
for (let i = 0; i < n; i++) {
  let ele = Number(prompt("Enter number element"));
  arr[i] = ele;
}
console.log(`Using Extra Array Result=>${reverseArr(arr)}`);