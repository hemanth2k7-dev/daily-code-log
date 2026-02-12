//To find second largest element in an array
function secondLargest(arr) {
  let len = arr.length;
  for (let index = 0; index < len; index++) {
    for (let j = 0; j < len - index; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1] + arr[j];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j - 1];
      }
    }
  }
  return arr[len - 2];
}
let n = Number(prompt("Enter number of elements in array"));
let arr = [];
for (let i = 0; i < n; i++) {
  let ele = Number(prompt("Enter number element"));
  arr[i] = ele;
}
console.log(`Second largest in array ${arr} is ${secondLargest(arr)}`);