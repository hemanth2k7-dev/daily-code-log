//To find the maximum and minimum of an array
let n = Number(prompt("Enter number of elements in array"));
let arr = [];
for (let i = 0; i < n; i++) {
  let ele = Number(prompt("Enter number element"));
  arr[i] = ele;
}
arr.sort((a, b) => a - b);
console.log(`Maximum of ${arr} is ${arr[arr.length - 1]}`);
console.log(`Minimum of ${arr} is ${arr[0]}`);
