//To remove duplicates from array
function removeDuplicate(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let ele = arr.pop();
    if (arr.indexOf(ele) == -1) {
      arr.unshift(ele);
    }
  }
  return arr;
}
let n = Number(prompt("Enter number of elements in array"));
let arr = [];
for (let i = 0; i < n; i++) {
  let ele = Number(prompt("Enter number element"));
  arr[i] = ele;
}
console.log(`Array with duplicates=>${arr}`);
console.log(`Array without duplicates=>${removeDuplicate(arr)}`);