//To find sum of all elements of an array
let n = Number(prompt("Enter number of elements in array"));
let arr = [];
for (let i = 0; i < n; i++) {
  let ele = Number(prompt("Enter number element"));
  arr[i] = ele;
}
let Sum = arr.reduce((Sum, init) => (Sum += init));
console.log(`Sum of elements = ${Sum}`);
