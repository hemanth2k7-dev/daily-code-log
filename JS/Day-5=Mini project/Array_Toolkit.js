//Array Toolkit project
function reverseArr(arr, len) {
  let rev = [];
  for (let i = len; i > 0; i--) {
    rev[len - i] = arr[i - 1];
  }
  return rev;
}

function secondLargest(arr, len) {
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

function sortArr(arr, len) {
  for (let index = 0; index < len; index++) {
    for (let j = 0; j < len - index; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1] + arr[j];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j - 1];
      }
    }
  }
}

function removeDuplicate(arr, len) {
  for (let i = 0; i < len; i++) {
    let ele = arr.pop();
    if (arr.indexOf(ele) == -1) {
      arr.unshift(ele);
    }
  }
  return arr;
}

function freqCount(arr, len) {
  let Arr = [];
  let unique = removeDuplicate([...arr], len); // use copy so original arr is unchanged for counting
  for (let i = 0; i < unique.length; i++) {
    let count = 0;
    let ele = unique[i];
    for (let j = 0; j < arr.length; j++) {
      if (ele === arr[j]) count++;
    }
    Arr[i] = count;
    console.log(`${unique[i]} -> ${Arr[i]}`);
  }
}

function rotateArr(arr, dir, n) {
  if (dir == "left" || dir == "Left") {
    for (let i = 0; i < n; i++) {
      let ele = arr.shift();
      arr.push(ele);
    }
  } else if (dir == "right" || dir == "Right") {
    for (let i = 0; i < n; i++) {
      let ele = arr.pop();
      arr.unshift(ele);
    }
  }
  console.log(arr);
}

let exit;
do {
  alert("Array Toolkit");
  alert("Creating an array");
  let n = Number(prompt("Enter number of elements in array"));
  let arr = [];
  for (let i = 0; i < n; i++) {
    let ele = Number(prompt("Enter number element"));
    arr[i] = ele;
  }
  alert(
    "Operations you can perform:-\n1.Reverse\n2.Rotate\n3.Find Second largest\n4.Frequency count\n5.Sort\n6.Remove Duplicates\n7.Exit",
  );
  let ch = Number(prompt("Enter your choice of Opertion"));
  switch (ch) {
    case 1:
      alert(`Reversed array =>${reverseArr(arr, arr.length)}`);
      break;
    case 2:
      let dir = prompt("Enter the direction to be rotated by");
      let N = Number(prompt("Enter number of shift to rotate by"));
      alert(`Rotated array =>${rotateArr(arr, dir, N)}`);
      break;
    case 3:
      alert(`Second largest of array =>${secondLargest(arr, arr.length)}`);
      break;
    case 4:
      alert(`Frequency =>\n${freqCount(arr, arr.length)}`);
      break;
    case 5:
      alert(`Sorted array =>${sortArr(arr, arr.length)}`);
      break;
    case 6:
      alert(`Array without duplicates =>${removeDuplicate(arr, arr.length)}`);
      break;
    case 7:
      exit = "yes";
      break;
  }
} while (exit == "no");
