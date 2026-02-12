//To count number of even and odd numbers in an array
let n = Number(prompt("Enter number of elements in array"));
let arr = [],
  evenCount = 0,
  oddCount = 0;
for (let i = 0; i < n; i++) {
  let ele = Number(prompt("Enter number element"));
  arr[i] = ele;
  if (ele % 2 == 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log(`Number of even digits = ${evenCount}`);
console.log(`Number of odd digits = ${oddCount}`);
